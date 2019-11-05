import { Component, OnInit } from '@angular/core';
import { format, getDaysInYear, addDays, isMonday, compareAsc } from 'date-fns';
import { PlanSetService } from './plan-set.service';
import { NzNotificationService, NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-plan-set',
    templateUrl: './plan-set.component.html',
    styleUrls: ['./plan-set.component.less']
})

export class PlanSetComponent implements OnInit {
    pluginInfo = {
        ddmp_plugin_start: "definesys-ddmp-plugin-conf",
        conf: {
            name: "计划制定",
            path: "home/app-plan-set",
            description: "xxx",
            icon: "schedule"
        },
        ddmp_plugin_end: "true"
    };
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
    constructor( private planSetService: PlanSetService,
        private nzNotificationService: NzNotificationService) {

    }
    ngOnInit() {
        const subject = this.planSetService.queryParamsObersver().subscribe(res => {
                this.pageTitle = res.title;
        });
        subject.unsubscribe();
        this.planSetService.queryPlanInfo({}).subscribe(res => {
            if (res['code'] === 'OK') {
                this.userInfo = res['data'];
                this.repeatValue = res['data'].currentRate;
            }
        });
        this.year = (new Date()).getFullYear();
        this.planTableData = [];
        console.log(this.planTableData);
        this.queryYearMon();
        this.nowDate = new Date();
        this.queryYearPlan(this.year);
    }
    // 查询该年计划
    queryYearPlan(year) {
            const params = {
                year : year.toString(),
                queryAll : "Y"
            };
        this.planSetService.queryYearPlan(params).subscribe(res => {
            if (res['code'] === 'OK') {
                this.planTableData = res['arrayData'];
                this.repeatValue = res['content'];
            }
        });
    }
    // 批量填入
    addAllTable() {
        this.planTableData.forEach((item, index) => {
            if (!item.exp) {
                item.shift = this.classesValue;
                item.workshop_section = this.workItemValue;
                item.team = this.teamsValue;
            }
        });
    }
    // 改变年份
    reduceYear() {
        this.year--;
        this.repeatValue = '';
        this.queryYearMon();
        // this.repeatDate(this.repeatValue);
        this.queryYearPlan(this.year);
    }
    addYear() {
        this.year++;
        this.repeatValue = '';
        this.queryYearMon();
        // this.repeatDate(this.repeatValue);
        this.queryYearPlan(this.year);
    }
    // 获取该年的周一
    queryYearMon() {
        this.monDateNum = [];
        const yearNum = getDaysInYear(new Date(this.year, 0, 1)); // 获取该年多少天
        for (let i = 0; i < yearNum; i++) {
            const date = addDays(new Date(this.year, 0, 1), i);
            if (isMonday(date)) {
                this.monDateNum.push({
                    showDate: format(date, 'YYYY-MM-DD'),
                    jsonDate: date
                });
            }
        }
    }
    // 频次改变
    /**
    repeatDate(msg) {
        let dateNum = 0;
        this.planTableData = [];
        if (msg === 'oneWeek') {
            this.monDateNum.forEach((item, index) => {
                if (index < 10) {
                    if (compareAsc(item.jsonDate, this.nowDate) > 0) {
                        dateNum++;
                        if (dateNum === 1) {
                            this.num = index;
                        }
                        this.planTableData.push({
                            isExceed: true,
                            planDate: item.showDate,
                            workClass: '',
                            workSection: '',
                            classGroup: '',
                            workStation: '',
                            finishDate: '',
                            status: '',
                            statusType: ''
                        });
                    } else {
                        this.planTableData.push({
                            isExceed: false,
                            planDate: item.showDate,
                            workClass: '',
                            workSection: '',
                            classGroup: '',
                            workStation: '',
                            finishDate: '',
                            status: '',
                            statusType: ''
                        });
                    }
                }
            });
            // 通过延时定时器解决dom元素过多，加载缓慢问题
            const num = Math.ceil(this.monDateNum.length / 10);
            let i = 1;
            let circleNum = 0;
            this.times = setInterval(() => {
                circleNum++;
                let arr;
                    if (10 * (i + 1) < this.monDateNum.length) {
                        arr = this.monDateNum.slice(10 * i, 10 * (i + 1));
                    } else {
                        arr = this.monDateNum.slice(10 * i, this.monDateNum.length);
                        window.clearInterval(this.times);
                    }
                    arr.forEach((item, index) => {
                        if (compareAsc(item.jsonDate, this.nowDate) > 0) {
                            dateNum++;
                            if (dateNum === 1) {
                                this.num = index + 10 * (circleNum) - 1;
                                if (this.num > this.monDateNum.length) {
                                    this.num = this.monDateNum.length;
                                }
                            }
                            this.planTableData.push({
                                isExceed: true,
                                planDate: item.showDate,
                                workClass: '',
                                workSection: '',
                                classGroup: '',
                                workStation: '',
                                finishDate: '',
                                status: '',
                                statusType: ''
                            });
                        } else {
                            this.planTableData.push({
                                isExceed: false,
                                planDate: item.showDate,
                                workClass: '',
                                workSection: '',
                                classGroup: '',
                                workStation: '',
                                finishDate: '',
                                status: '',
                                statusType: ''
                            });
                        }
                    });
                    i++;
            }, 50);
        } else if (msg === 'twoWeek') {
            this.monDateNum.forEach((item, index) => {
                if (index % 2 === 0 && index < 10) {
                    if (compareAsc(item.jsonDate, this.nowDate) > 0) {
                        dateNum++;
                        if (dateNum === 1) {
                            this.num = index / 2 - 1;
                        }
                        this.planTableData.push({
                            isExceed: true,
                            planDate: item.showDate,
                            workClass: '',
                            workSection: '',
                            classGroup: '',
                            workStation: '',
                            finishDate: '',
                            status: '',
                            statusType: ''
                        });
                    } else {
                        this.planTableData.push({
                            isExceed: false,
                            planDate: item.showDate,
                            workClass: '',
                            workSection: '',
                            classGroup: '',
                            workStation: '',
                            finishDate: '',
                            status: '',
                            statusType: ''
                        });
                    }
                }
            });
            // 通过延时定时器解决dom元素过多，加载缓慢问题
            const num = Math.ceil(this.monDateNum.length / 10);
            let i = 1;
            let circleNum = 0;
            this.times = setInterval(() => {
                let arr;
                circleNum++;
                    if (10 * (i + 1) < this.monDateNum.length) {
                        arr = this.monDateNum.slice(10 * i, 10 * (i + 1));
                    } else {
                        arr = this.monDateNum.slice(10 * i, this.monDateNum.length);
                        window.clearInterval(this.times);
                    }
                    arr.forEach((item, index) => {
                        if (index % 2 === 0) {
                            if (compareAsc(item.jsonDate, this.nowDate) > 0) {
                                dateNum++;
                                if (dateNum === 1) {
                                    this.num = index + 10 * (circleNum) / 2 - 1;
                                }
                                this.planTableData.push({
                                    isExceed: true,
                                    planDate: item.showDate,
                                    classes: '',
                                    workItem: '',
                                    teams: '',
                                    station: '',
                                    finishDate: '',
                                    status: '',
                                    statusType: ''
                                });
                            } else {
                                this.planTableData.push({
                                    isExceed: false,
                                    planDate: item.showDate,
                                    classes: '',
                                    workItem: '',
                                    teams: '',
                                    station: '',
                                    finishDate: '',
                                    status: '',
                                    statusType: ''
                                });
                            }
                        }
                    });
                    i++;
            }, 50);
        } else if (msg === 'oneMon') {
            const arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            for (let i = 0; i < arr.length; i++) {
                if (Number(arr[i]) === this.nowDate.getMonth() + 1) {
                    this.num = i;
                }
                if (arr[i] > this.nowDate.getMonth() + 1) {
                    this.planTableData.push({
                        isExceed: true,
                        planDate: this.year + '-' + arr[i] + '-01',
                        classes: '',
                        workItem: '',
                        teams: '',
                        station: '',
                        finishDate: '',
                        status: '',
                        statusType: ''
                    });
                } else {
                    this.planTableData.push({
                        isExceed: false,
                        planDate: this.year + '-' + arr[i] + '-01',
                        classes: '',
                        workItem: '',
                        teams: '',
                        station: '',
                        finishDate: '',
                        status: '',
                        statusType: ''
                    });
                }
            }
        }
    }
    */
   repeatDate(msg) {
       this.planSetService.queryRate({year : this.year, rate : msg}).subscribe(res => {
           this.planTableData = res['data'];
       });
   }
    //
    queryPlan(msg) {
        this.pageType = msg;
    }
    // 保存
    save() {
        console.log(this.planTableData);
        const arr = [];
        this.planTableData.forEach(item => {
            if (!item.exp) {
                arr.push(item);
            }
        });
        const params = JSON.stringify(arr);
        this.planSetService.planSave({planInfoArray: params}).subscribe(res => {
            if (res['code'] === 'OK') {
                this.nzNotificationService.create('success', '成功', '保存成功');
                this.queryYearPlan(this.year);
                this.isEdit = false;
            } else {
                this.nzNotificationService.create('error', '失败', res['msg']);
            }
        });
        // this.repeatValue = '';
        this.classesValue = '';
        this.workItemValue = '';
        this.teamsValue = '';
    }
    pageIndexChange(msg) {
        this.pageAll.page = msg;
        const params = {
            keyWord: this.keyWord || '',
            page: this.pageAll.page,
            pageSize: this.pageAll.pageSize
        };
        this.getWorkData(params);
    }
    pageSizeChange(msg) {
        this.pageAll.pageSize = msg;
        const params = {
            keyWord: this.keyWord || '',
            page: this.pageAll.page,
            pageSize: this.pageAll.pageSize
        };
        this.getWorkData(params);
    }
    modelChange() {
        this.pageAll.page = 1;
        this.pageAll.pageSize = 10;
        const params = {
            keyWord: this.keyWord || '',
            page: this.pageAll.page,
            pageSize: this.pageAll.pageSize
        };
        this.getWorkData(params);
    }
    showModel(i) {
        this.modelIndex = i;
        this.isVisible = true;
        const params = {
            keyWord: this.keyWord || '',
            page: this.pageAll.page,
            pageSize: this.pageAll.pageSize
        };
        this.getWorkData(params);
    }
    handleCancel() {
        this.isVisible = false;
    }
    handleOk() {
        console.log(this.planTableData[this.modelIndex]);
        this.workcrsList.forEach(item => {
            if (item['checked']) {
                this.planTableData[this.modelIndex]['station'] = item['WORKCR_CODE'];
            }
        });
        this.isVisible = false;
    }
    getWorkData(params) {
        this.planSetService.queryWorkPage(params).subscribe(res => {
                this.workcrsList = res['arrayData'];
                this.pageAll.pageTotal = res['data'];
        });
    }
    changeTr(index) {
        this.workcrsList.forEach(item => {
            item['checked'] = false;
        });
        this.workcrsList[index]['checked'] = true;
    }
}
