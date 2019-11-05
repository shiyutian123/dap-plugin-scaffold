import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { SliderLayoutModule } from './slider-layout/slider-layout.module';
import { DdmpLayoutMenuService } from './ddmp-menu.service';
import { DdmpAppInfoService } from './ddmp-appinfo.service';

@NgModule({
  imports: [
    SharedModule,
    SliderLayoutModule
  ],
  providers: [ DdmpLayoutMenuService , DdmpAppInfoService ]
})
export class DdmpLayoutModule { }
