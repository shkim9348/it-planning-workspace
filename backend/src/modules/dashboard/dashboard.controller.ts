import { Controller, Get } from '@nestjs/common';

import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  /**
   * Dashboard KPI
   */
  @Get('kpi')
  async getKpi() {
    return await this.dashboardService.getKpi();
  }

  /**
   * 월별 비용 추이
   */
  @Get('monthly-cost')
  async getMonthlyCost() {
    return await this.dashboardService.getMonthlyCost();
  }
  /**
   * 서비스별 비용
   */
  @Get('service-cost')
  async getServiceCost() {
    return await this.dashboardService.getServiceCost();
  }
  /**
   * 비용 카테고리별 비용
   */
  @Get('category-cost')
  async getCategoryCost() {
    return await this.dashboardService.getCategoryCost();
  }
  /**
   * 최근 비용 데이터
   */
  @Get('recent-costs')
  async getRecentCosts() {
    return await this.dashboardService.getRecentCosts();
  }
}
