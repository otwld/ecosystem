import {Controller, Get} from '@nestjs/common';
import {HealthCheck, HealthCheckService, HttpHealthIndicator, MongooseHealthIndicator} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthCheckService, private readonly mongoHealth: MongooseHealthIndicator,
              private httpHealth: HttpHealthIndicator) {
  }

  @Get()
  @HealthCheck()
  check() {
    return this.healthService.check([
      () => this.mongoHealth.pingCheck('mongo', {timeout: 3000}),
      () => this.httpHealth.pingCheck('google', 'https://google.com')
    ])
  }
}
