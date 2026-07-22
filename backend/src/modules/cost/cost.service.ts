import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CostLedger } from './entities/cost-ledger.entity';

@Injectable()
export class CostService {
  constructor(
    @InjectRepository(CostLedger)
    private readonly costLedgerRepository: Repository<CostLedger>,
  ) {}

  /**
   * 비용 데이터 저장
   */
  async saveCostLedger(data: CostLedger[]) {
    return await this.costLedgerRepository.save(data);
  }
  async findAll() {
    return await this.costLedgerRepository.find();
  }

  async count() {
    const count = await this.costLedgerRepository.count();

    return {
      count,
    };
  }
}
