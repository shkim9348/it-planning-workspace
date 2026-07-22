import { Controller, Get } from '@nestjs/common';
import { CostService } from './cost.service';

@Controller('cost')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Get()
  async findAll() {
    return await this.costService.findAll();
  }

  @Get('count')
  async count() {
    return await this.costService.count();
  }
}
