/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-05 11:42:51
 * @LastEditTime: 2019-11-06 19:41:18
 * @LastEditors: Devin Shi
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { format, getDaysInYear, addDays, isMonday, compareAsc } from 'date-fns';
import { PlanSetService } from './plan-demo.service';
import { NzNotificationService, NzModalService, NzMessageService } from 'ng-zorro-antd';
import { DdmpAuthService } from 'src/app/auth/ddmp-auth.service';

@Component({
    selector: 'app-plugin-plan-demo',
    templateUrl: './plan-demo.component.html',
    styleUrls: ['./plan-demo.component.less']
})
export class PlanSetComponent implements OnInit {
    pageTitle: any;
    pageType: String = 'planSet';
    isEdit: Boolean = false; // 是否是编辑状态
    year: number;
    repeatValue: String = ''; // 重复次数
    classesValue: '';
    workItemValue: '';
    teamsValue: '';
    userInfo: any = {
        base: '',
        factory: '',
        userName: '',
        workShop: ''
    };
    nowDate: any; // 今天的日期
    num: any = 1000; // 序号之前的数据不改变
    planTableData: any[] = []; // 计划表格数据
    monDateNum: any[] = []; // 一年中周一的日期
    times: any;
    searchData: any = {
        year: '',
        name: '',
        base: ''
    };
    isVisible: Boolean = false;
    keyWord: '';
    pageAll: any = {
        pageSize: 10,
        page: 1,
        pageSizeOptions: [10, 20, 30, 40, 50],
        pageTotal: 10
    };
    workcrsList: any = [];
    modelIndex: any;

    currentUser;
    currentToken;

    constructor(
        private ddmpAuthService: DdmpAuthService,
        private planSetService: PlanSetService,
        private nzNotificationService: NzNotificationService) {

      this.currentUser = this.ddmpAuthService.currentUser ;
      this.currentToken = this.ddmpAuthService.currentToken ;
      this.planSetService.getPlanDemo().subscribe((res) => {
        if (res.code === 'ok') {
          this.planTableData = res.table ;
        }
      });

    }
    ngOnInit() {
    }
}
