import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cost_ledger')
export class CostLedger {
  @PrimaryColumn()
  ledger_id: string;

  @Column()
  resource_id: string;

  @Column()
  resource_name: string;

  @Column()
  service_name: string;

  @Column()
  vendor: string;

  @Column()
  usage_year: number;

  @Column()
  usage_month: number;

  @Column()
  cost_category: string;

  @Column('decimal')
  actual_cost: number;

  @Column()
  currency: string;
}
