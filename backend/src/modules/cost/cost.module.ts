import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CostLedger } from './entities/cost-ledger.entity';
import { CostService } from './cost.service';
import { CostController } from './cost.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CostLedger])],
  controllers: [CostController],
  providers: [CostService],
  exports: [CostService],
})
export class CostModule {}
