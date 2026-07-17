import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImportService } from './import.service';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Get('health')
  getHealth() {
    return this.importService.getStatus();
  }

  @Post('cost-ledger')
  @UseInterceptors(FileInterceptor('file'))
  uploadCostLedger(
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.importService.parseCostLedger(file);
  }
}
