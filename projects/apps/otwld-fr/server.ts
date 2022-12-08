import 'zone.js/dist/zone-node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Crawler } = require('es6-crawler-detect')

import { AppServerModule } from './src/main.server';

function findDistPath() {
  return [
    join(process.cwd(), 'dist/projects/apps/otwld-fr/browser'),
    join(process.cwd(), '../browser'),
    join(process.cwd(), './browser')
  ].find(distPath => existsSync(distPath));
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = findDistPath(); //
  if (!distFolder) {
    throw new Error('Could not find dist folder');
  }
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    const CrawlerDetector = new Crawler(req)
    const isCrawler = CrawlerDetector.isCrawler()
    const hasBypassQuery = req.query['forceSSR'] === 'true';

    if (isCrawler || hasBypassQuery) {
      return res.render(indexHtml, {
        req,
        providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
      });
    } else {
      res.sendFile(join(distFolder, indexHtml + '.html'));
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
