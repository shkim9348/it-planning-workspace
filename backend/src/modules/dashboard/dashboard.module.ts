import { Module } from '@nestjs/common';
import { CostModule } from '../cost/cost.module';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [CostModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
