import { Component, OnInit } from '@angular/core';
// import { format, getDaysInYear, addDays, isMonday, compareAsc } from 'date-fns';
import { PlanAllService } from './plan-all.service';
// import { NzNotificationService, NzModalService, NzMessageService } from 'ng-zorro-antd';
// import { NetworkApi } from 'src/network/network-api';

@Component({
    selector: 'app-plan-all',
    templateUrl: './plan-all.component.html',
    styleUrls: ['./plan-all.component.less']
})

export class PlanAllComponent implements OnInit {
    pluginInfo = {
        ddmp_plugin_start: "definesys-ddmp-plugin-conf",
        conf: {
            name: "全部计划",
            path: "home/app-plan-all",
            description: "xxx",
            icon: "schedule"
        },
        ddmp_plugin_end: "true"
    };
    pageTitle: any;
    userInfo: any;
    planTableData: any[] = [];
    searchInfo = {
        year: '',
        userName: '',
        // base: '',
        orgName: '',
        station: '',
        // workItemValue: ''
    };
    page = {
        total: 0,
        pageIndex: 1,
        pageSize: 10
    };
    constructor(private planAllService: PlanAllService) {}
    ngOnInit() {
        const subject = this.planAllService.queryParamsObersver().subscribe(res => {
            this.pageTitle = res.title;
        });
        subject.unsubscribe();
        this.queryYearPlan();
    }
    onChangeYear(msg) {
        // 
    }
    // 查询该年计划
    queryYearPlan() {
        let params = this.searchInfo;
        params['page'] = this.page.pageIndex;
        params['pageSize'] = this.page.pageSize;
        this.planAllService.queryPlan(params).subscribe(res => {
            // if (res['code'] === 'OK') {
                this.planTableData = res['arrayData'];
                this.page.total = res['data'];
            // }
        });
    }
    search() {
        this.queryYearPlan();
    }
    pageIndexChange(msg) {
        this.page.pageIndex = msg;
        this.queryYearPlan();
    }
    pageSizeChange(msg) {
        this.page.pageSize = msg;
        this.queryYearPlan();
    }

    // 导出
    derive() {
        // this.post(NetworkApi.NETWORK_API_PLAN_ALL_DERIVE.url, this.searchInfo);
        // this.planAllService.deriveAllPlan(this.searchInfo).subscribe(res => {
        //     
        //     console.log(res);
        // });
        this.planAllService.exportExcelPost(this.planAllService.NetworkApi.NETWORK_API_PLAN_ALL_DERIVE.url, this.searchInfo, '全部计划');
    }
}
