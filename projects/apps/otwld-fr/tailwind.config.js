const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../../libs/ui/tailwind.config');

/**
 * node_modules/@nrwl/workspace/src/utilities/generate-globs.js#28
 *
 *    ie: const filenameRelativeToWorkspaceRoot = (0, path_1.relative)(workspace_root_1.workspaceRoot, dirPath);
 *
 *    Correction: const filenameRelativeToWorkspaceRoot = (0, path_1.relative)(workspace_root_1.workspaceRoot, dirPath).replace(/\\/g, '/');
 *    Error: the path is in windows format, so the Map<> can't be accessed.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [sharedTailwindConfig],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
};
