import { Injectable } from '@nestjs/common';

import { CostService } from '../cost/cost.service';

@Injectable()
export class DashboardService {
  constructor(private readonly costService: CostService) {}

  /**
   * Dashboard KPI
   */
  async getKpi() {
    const costs = await this.costService.findAll();

    const totalCost = costs.reduce(
      (sum, item) => sum + Number(item.actual_cost),
      0,
    );

    const resourceCount = new Set(costs.map((item) => item.resource_id)).size;

    const serviceCount = new Set(costs.map((item) => item.service_name)).size;

    const vendorCount = new Set(costs.map((item) => item.vendor)).size;

    return {
      totalCost,
      resourceCount,
      serviceCount,
      vendorCount,
    };
  }
  /**
   * 월별 비용 추이
   */
  async getMonthlyCost() {
    const costs = await this.costService.findAll();

    const monthlyMap = new Map<number, number>();

    costs.forEach((item) => {
      const current = monthlyMap.get(item.usage_month) ?? 0;

      monthlyMap.set(item.usage_month, current + Number(item.actual_cost));
    });

    return Array.from(monthlyMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([month, cost]) => ({
        month,
        cost,
      }));
  }
  /**
   * 서비스별 비용
   */
  async getServiceCost() {
    const costs = await this.costService.findAll();

    const serviceMap = new Map<string, number>();

    costs.forEach((item) => {
      const current = serviceMap.get(item.service_name) ?? 0;

      serviceMap.set(item.service_name, current + Number(item.actual_cost));
    });

    return Array.from(serviceMap.entries())
      .map(([service, cost]) => ({
        service,
        cost,
      }))
      .sort((a, b) => b.cost - a.cost);
  }
  /**
   * 비용 카테고리별 비용
   */
  async getCategoryCost() {
    const costs = await this.costService.findAll();

    const categoryMap = new Map<string, number>();

    costs.forEach((item) => {
      const current = categoryMap.get(item.cost_category) ?? 0;

      categoryMap.set(item.cost_category, current + Number(item.actual_cost));
    });

    return Array.from(categoryMap.entries())
      .map(([category, cost]) => ({
        category,
        cost,
      }))
      .sort((a, b) => b.cost - a.cost);
  }
  /**
   * 최근 비용 데이터
   */
  async getRecentCosts() {
    const costs = await this.costService.findAll();

    return costs
      .sort((a, b) => {
        if (a.usage_year !== b.usage_year) {
          return b.usage_year - a.usage_year;
        }

        return b.usage_month - a.usage_month;
      })
      .slice(0, 10)
      .map((item) => ({
        ledgerId: item.ledger_id,
        resource: item.resource_name,
        service: item.service_name,
        vendor: item.vendor,
        category: item.cost_category,
        cost: Number(item.actual_cost),
        month: `${item.usage_year}-${String(item.usage_month).padStart(2, '0')}`,
      }));
  }
}
