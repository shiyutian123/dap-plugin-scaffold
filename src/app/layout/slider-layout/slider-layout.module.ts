/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 15:06:34
 * @LastEditors: Devin Shi
 * @Description:
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderLayoutComponent } from './slider-layout.component';
import { SharedModule } from 'src/app/shared.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  imports: [
    SharedModule,
    NzDropDownModule
  ],
  declarations: [
    SliderLayoutComponent,
  ],
  exports: [SliderLayoutComponent]
})
export class SliderLayoutModule { }
