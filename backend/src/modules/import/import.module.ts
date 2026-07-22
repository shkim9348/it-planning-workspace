import { Module } from '@nestjs/common';

import { ImportController } from './import.controller';
import { ImportService } from './import.service';

import { CostModule } from '../cost/cost.module';

@Module({
  imports: [CostModule],
  controllers: [ImportController],
  providers: [ImportService],
})
export class ImportModule {}
