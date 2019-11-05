import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObjectUtilsService } from './object-util.service';
import { GuidService } from './uuid.service';
import { MoneyUtilService } from './money-util.service';

@NgModule({
  imports: [CommonModule],
  providers: [ObjectUtilsService ,GuidService, MoneyUtilService],
  declarations: [],
  exports: [],
})
export class UtilsModule { }
