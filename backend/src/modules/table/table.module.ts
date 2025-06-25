import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableEvent } from 'src/entities/Table';
import { Invite } from 'src/entities/Invite';
import { TableController } from 'src/controllers/table-controller/table-controller.controller';
import { TableService } from 'src/services/table-service/table-service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TableEvent, Invite])
  ],
  controllers: [TableController],
  providers: [TableService,],
  exports: [TableService], 
})
export class TableModule {}
