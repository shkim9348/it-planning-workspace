import { Injectable, BadRequestException } from '@nestjs/common';

import csv from 'csv-parser';
import { Readable } from 'stream';

import { CostService } from '../cost/cost.service';
import { CostLedger } from '../cost/entities/cost-ledger.entity';

@Injectable()
export class ImportService {
  constructor(
    private readonly costService: CostService,
  ) {}

  getStatus() {
    return {
      message: 'Import module is ready.',
    };
  }

  async parseCostLedger(file: Express.Multer.File) {
    // ============================
    // 파일 존재 여부
    // ============================

    if (!file) {
      throw new BadRequestException('CSV 파일이 없습니다.');
    }

    // ============================
    // 확장자 검사
    // ============================

    const extension = file.originalname.split('.').pop()?.toLowerCase();

    if (extension !== 'csv') {
      throw new BadRequestException('CSV 파일만 업로드 가능합니다.');
    }

    // ============================
    // 빈 파일 검사
    // ============================

    if (file.size === 0) {
      throw new BadRequestException('파일이 비어 있습니다.');
    }

    const results: CostLedger[] = [];

    return new Promise((resolve, reject) => {
      Readable.from(file.buffer)
        .pipe(csv())

        .on('data', (data) => {

          // ============================
          // CSV 데이터 확인 (디버깅용)
          // ============================

          console.log(Object.keys(data));
          console.log(data);

          results.push({
            ledger_id: data.ledger_id ?? data['\ufeffledger_id'],

            resource_id: data.resource_id,

            resource_name: data.resource_name,

            service_name: data.service_name,

            vendor: data.vendor,

            usage_year: Number(data.usage_year),

            usage_month: Number(data.usage_month),

            cost_category: data.cost_category,

            actual_cost: Number(data.actual_cost),

            currency: data.currency,
          });
        })

        .on('end', async () => {
          try {

            if (results.length === 0) {
              throw new BadRequestException('CSV 데이터가 없습니다.');
            }

            // ============================
            // Header Validation
            // ============================

            const requiredHeaders = [
              'ledger_id',
              'resource_id',
              'resource_name',
              'service_name',
              'vendor',
              'usage_year',
              'usage_month',
              'cost_category',
              'actual_cost',
              'currency',
            ];

            const firstRow = results[0];

            const missingHeaders = requiredHeaders.filter(
              (header) => !(header in firstRow),
            );

            if (missingHeaders.length > 0) {
              throw new BadRequestException(
                `필수 컬럼이 없습니다. (${missingHeaders.join(', ')})`,
              );
            }

            // ============================
            // DB 저장
            // ============================

            const savedRows =
              await this.costService.saveCostLedger(results);

            resolve({
              filename: file.originalname,
              totalRows: results.length,
              savedRows: savedRows.length,
              message: 'Cost data imported successfully.',
            });

          } catch (error) {
            reject(error);
          }
        })

        .on('error', (error) => {
          reject(error);
        });
    });
  }
}
