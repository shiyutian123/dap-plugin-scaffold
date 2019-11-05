/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 14:29:46
 * @LastEditTime: 2019-11-04 15:15:39
 * @LastEditors: Devin Shi
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';

// #region your modules
const THIRDMODULES = [
  NgZorroAntdModule,
];
// #endregion

// // #region your componets & directives
const COMPONENTS = [
];
const DIRECTIVES = [
];
const PIPES = [
];
// // #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...THIRDMODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})

export class SharedModule { }
