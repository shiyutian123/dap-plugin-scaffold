/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 16:33:11
 * @LastEditTime: 2019-11-05 08:13:33
 * @LastEditors: Devin Shi
 */
import { Component, OnInit, ElementRef, ViewChild, Renderer2, OnDestroy } from '@angular/core';
import { SliderMenuItem } from '../slider-menu.model';
import { DdmpLayoutMenuService } from '../ddmp-menu.service';
import { DdmpAuthService } from 'src/app/auth/ddmp-auth.service';
import { DdmpUser } from 'src/app/auth/ddmp-auth.model';
import { DdmpAppInfo } from '../ddmp-appinfo.model';
import { DdmpAppInfoService } from '../ddmp-appinfo.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'src/app/cache/sessionStorage/session-storage.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { LocalStorageService } from './../../cache/localStorage/local-storage.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NetworkService } from 'src/app/network/network.service';
import { webSocket } from 'rxjs/webSocket';
import { GlobalLoadingService } from 'src/app/services/global-loading/global-loading.service';

@Component({
  selector: 'app-slider-layout',
  templateUrl: './slider-layout.component.html',
  styleUrls: ['./slider-layout.component.less']
})
export class SliderLayoutComponent implements OnInit {

  menuItems: any = [];
  appList: any = [];
  appTitle: string;
  appIcon: string;
  nowAppName: string;
  currentUser: DdmpUser;
  appInfo: DdmpAppInfo;
  currentPath; // 当前路径
  currentPathArray = [];
  isCollapsed: boolean;
  show_meuns: Boolean = true;
  showBread: any = {
    name: ''
  };
  child_num: any;
  child_num2: any;
  equipmentType = true; // 设备类型
  appCode: any; // 应用code(LA/EPV/VS)
  isCollapsible = true;
  isSetting = false;
  validateForm: FormGroup;
  validateInfoForm: FormGroup; // 修改个人信息表单
  openMessageWindow: Boolean = false; // 控制消息推送窗口是否打开
  messagesType: string; // 展示的消息类型
  messagesTypeCode: string; // 展示的消息类型编码
  messagesListData: Array<any> = []; // 消息集合
  messageCount: Array<any> = [];
  defaultAppIcon: String = './assets/150x150.png'; // 没有设置图标的时候设为默认值
  ws: WebSocket; // 定义websocket
  loadingConfig: LoadingConfig = {
    showLoading: false
  };
  @ViewChild("ng-star-inserted")
  private el: ElementRef;
  isDark :boolean; // 是否为深色主题
  themeColor:string; // 主题颜色

  isModifyInfo: boolean = false; //是否显示修改个人信息弹框
  userIcon: string; // 用户头像url
  isHasIcon: boolean; // 是否有头像
  iconName: string; // 头像上的名字
  avatarImgBng: string; // 头像背景
  isUpdateInfo: boolean = false; // 是否可以更新个人信息
  userSex: string = "man"; // 用户性别
  commonAddress: string ; // 公共地址

  @ViewChild("avatarCropping") avatarCropping:any;

  constructor(
    private ddmpLayoutMenuService: DdmpLayoutMenuService,
    private ddmpAuthService: DdmpAuthService,
    private ddmpAppInfoService: DdmpAppInfoService,
    private titleService: Title,
    private router: Router,
    private session: SessionStorageService,
    private activatedRoute: ActivatedRoute,
    private modalService: NzModalService,
    private localStorageService: LocalStorageService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private nzNotificationService: NzNotificationService,
    private fb: FormBuilder,
    private fb2: FormBuilder,
    // private confirmModalService: ConfirmModalService,
    private network: NetworkService,
    private globalLoadingService: GlobalLoadingService
  ) {
    this.initGlobalLoading();
  }

  ngOnInit() {

    this.themeColor = this.localStorageService.get("themeColor");
    this.isDark = this.localStorageService.get("isDark");
    if (this.themeColor == null || this.isDark == null){
      this.themeColor = "dark";
      this.isDark = false;
    }

    // 判断是否有头像
    this.userIcon = this.session.get("app.userInfo.userIcon");
    if ( this.userIcon == null) {
      this.isHasIcon = false;
      this.iconName = this.session.get("app.userInfo.userName");
      // this.avatarCropping.setIconName(this.iconName);
      // this.avatarCropping.setHasIcon(this.isHasIcon);
    } else {
      this.avatarImgBng = "white";
      this.isHasIcon = true;
      this.iconName = "";
      // this.avatarCropping.setIconName(this.iconName);
      // this.avatarCropping.setHasIcon(this.isHasIcon);
    }

    this.validateForm = this.fb.group({
      // empId: [{ value: null, disabled: true }], // 工号
      oldPassword: [null, [Validators.required]], // 原始密码
      password: [null, [Validators.required]], // 新密码
    });
    this.validateInfoForm = this.fb2.group({
      name: [null, [Validators.required]], // 姓名
      email: [null, ''], // 邮箱
      phone: [null, ''], // 手机
    });

    this.appInfo = this.ddmpAppInfoService.appInfo;
    this.ddmpAppInfoService.appInfoObservable.subscribe(appInfo => {
      this.appInfo = appInfo;
      if (this.appInfo && this.appInfo.title) {
        this.titleService.setTitle(this.appInfo.title);
      }
    });
    // TODO:监听socket
    // this.refreshMessage();
    this.messagesType = this.messagesType ? this.messagesType : '全部消息';
    this.messagesTypeCode = this.messagesTypeCode ? this.messagesTypeCode : 'all';
    // 监听路由变化获取切割url
    this.activatedRoute.url.subscribe(res => {
      const pathArray = window.location.href.split('/');
      this.currentPath = pathArray[pathArray.length - 1];
      this.currentPathArray = this.menuItems.map(item => item['path']);
    });
    const href = window.location.href;
    const params: any = {};
    const search = href.substring(href.indexOf('?') + 1);
    for (const item of search.split('&')) {
      const arr = item.split('=');
      params[arr[0]] = arr[1] ? decodeURIComponent(arr[1]) : arr[1];
    }
    this.showBread = {
      name: params.title || ''
    };

    this.isPC();
    this.menuItems = this.ddmpLayoutMenuService.menuItems;

    this.ddmpLayoutMenuService.menuItemObservable.subscribe(menuItems => {
      this.menuItems = menuItems;
    });
    // this.appCode = environment.appInfo["appCode"];
    // if (this.equipmentType === false) {
    //   if (this.appCode === 'LA') {
    //     this.menuItems = this.menuItems.filter(item => (item.name === '我的待办' || item.name === '主动执行'));
    //   } else if (this.appCode === 'EPV') {
    //     this.menuItems = this.menuItems.filter(item => (item.name === '我的待办'));
    //   } else if (this.appCode === 'VS') {
    //     this.menuItems = this.menuItems.filter(item => (item.name === '我的待办' || item.name === '缺陷记录'));
    //   }
    // }

    this.currentUser = this.ddmpAuthService.currentUser;
    this.ddmpAuthService.currentUserObservable.subscribe(user => {
      this.currentUser = user;
    });

    const accessToken = this.ddmpAuthService.currentToken;
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    if (accessToken && accessToken.accessToken) {
    }
    // this.renderer.setStyle(this.el.nativeElement, "display", "none");
    // this.elementRef.nativeElement.getElementBy

  }
  private getFirstMenu(menuItem) {
    if (menuItem.haveChild) {
      return this.getFirstMenu(menuItem.childs[0]);
    } else {
      return menuItem;
    }
  }


  private initGlobalLoading() {
    this.globalLoadingService.onLoading$.subscribe((res) => {
      this.loadingConfig.showLoading = true;
    });
    this.globalLoadingService.onLoadingSuccess$.subscribe((res) => {
      setTimeout(() => {
        this.loadingConfig.showLoading = false;
      }, (200 + Math.random() * 200));
    });
    this.globalLoadingService.onLoadingSuccess$.subscribe((res) => {
      setTimeout(() => {
        this.loadingConfig.showLoading = false;
      }, (200 + Math.random() * 200));
    });
  }

  private convertMenuListToSliderMenuItems(menuList, level): SliderMenuItem[] {
    menuList.forEach(menu => {
      menu.itemText = menu.name;
      menu.iconType = menu.icon;
      menu.navigateLink = "";
      // menu.path = menu.path;
      menu.routeName = "";
      menu.routeParam = null;
      menu.isHidden = false;
      menu.isGroup = false;
      menu.isSubmenu = menu.haveChild;
      if (menu.haveChild) {
        menu.children = this.convertMenuListToSliderMenuItems(menu.childs, level + 1);
      }
    });
    return menuList;
  }

  isPC() {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    // var flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        // flag = false;
        this.equipmentType = false;
        break;
      }
    }
    if (this.equipmentType === false) {
      this.show_meuns = false;
      this.isCollapsible = false;
    }
  }

  logout() {
    this.modalService.confirm({
      nzTitle: '确认退出',
      nzClosable: true,
      nzContent: '是否退出登录？',
      nzOnOk: () => {
        this.localStorageService.clearStorage();
        this.session.clearSession();
        this.localStorageService.set("themeColor",this.themeColor);
        this.localStorageService.set("isDark",this.isDark);
        if (environment.needSSO) {
          location.href = environment.ssoDomain + "/uaa/logout";
        } else {
          this.router.navigate(['./login']);
        }
      }
    });
  }

  // 打开修改密码的弹窗
  setting() {
    this.isSetting = true;
    // 新接口不需要工号
    // const user = this.localStorageService.get("app.userInfo.userId");
    // this.validateForm.get("empId").setValue(user);
  }
  // 确定修改密码
  settingPwd() {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) {
      this.nzNotificationService.create("warning", "请填写必填项！", "");
      return;
    }
    const params = this.validateForm.value;
  }
  cancelCale() {
    this.validateForm.reset();
    this.isSetting = false;
  }
  showMeuns() {
    this.show_meuns = !this.show_meuns;
    this.isCollapsible = !this.isCollapsible;
  }
  navigateMenuItem(menuItem) {
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("pageSize");
    sessionStorage.removeItem("params");
    sessionStorage.removeItem("currentAdvancedSearch");
    sessionStorage.removeItem("showNormalSearch");

    // 循环判断在菜单在那一层
    if (menuItem.functionType === "DefaultMenu") {
      this.showBread = {
        name: menuItem.name
      };
      this.child_num = '';
      this.child_num2 = '';
    }

    this.menuItems.forEach(item => {
      if (item.functionType !== "DefaultMenu") {
        if (item.code === menuItem.code) {
          this.showBread = item;
          this.child_num = '';
          this.child_num2 = '';
        } else {
          if (item.childs && item.childs.length > 0) {
            item.childs.forEach((ele, index) => {
              if (ele.code === menuItem.code) {
                this.showBread = item;
                this.child_num = index;
                this.child_num2 = '';
              } else {
                if (ele.childs && ele.childs.length > 0) {
                  ele.childs.forEach((list, i) => {
                    if (list.code === menuItem.code) {
                      this.showBread = item;
                      this.child_num = index;
                      this.child_num2 = i;
                    }
                  });
                }
              }
            });
          }
        }
      }
    });

    // 根据菜单目录跳转相应的地址
    if (menuItem.functionType === 'FlowForm') {
      this.router.navigate(['/home/app-page-process'], {
        queryParams: {
          processCode: menuItem.configureCode,
          title: menuItem.name
        }
      });
    } else if (menuItem.functionType === 'PageForm') {
      this.router.navigate(['/home/app-page-release-list'], {
        queryParams: {
          formCode: menuItem.configureCode,
          formId: menuItem.configureId,
          title: menuItem.name
        }
      });
    } else if (menuItem.functionType === 'QueryPage') {
      this.router.navigate(['/home/search-interface'], {
        queryParams: {
          id: menuItem.configureId,
          title: menuItem.name
        }
      });
    } else if (menuItem.functionType === 'ExternalLink') {
      this.router.navigate(['/home/app-page-web'], {
        queryParams: {
          functionCode: menuItem.functionCode,
          title: menuItem.name
        }
      });
    } else if (menuItem.functionType === 'CustomFunction' || menuItem.functionType === 'DefaultMenu') {
      this.router.navigate(['/' + menuItem.path], {
        queryParams: {
          title: menuItem.name
        }
      });
    }
    // window.location.reload();
  }

  /**
   * 点击logo返回到首页
   */
  returnToHome() {
    this.showBread = {
      name: this.getFirstMenu(this.ddmpLayoutMenuService.menuItems[0]).name
    };
    const routerUrl = './' + this.getFirstMenu(this.ddmpLayoutMenuService.menuItems[0]).path;
    this.router.navigate([routerUrl]);
  }

  /**
   * @author wucan
   * @date 2019年9月27日
   * @description 打开消息推送的抽屉
   */
  openMessage() {
    this.openMessageWindow = true;
    this.getMessages();
  }
  /**
   * @description 获取推送的消息
   */
  getMessages(type?) {
    const appId = environment.appInfo.appId;
    this.network.get("/message/query?appId="
      + appId + "&status=" + this.messagesTypeCode).subscribe((res: any) => {
        if (res.code === 'ok') {
          this.messagesListData = res.table ? res.table : [];
          this.messageCount = this.messagesListData.filter(item => item.status === 'unread');
        }
      });
  }

  /**
   * @description 刷新推送消息
   */
  refreshMessage() {
    const appId = environment.appInfo.appId;
    const user = this.localStorageService.get('currentUser');
    if (this.ws != null) {
      this.ws.close();
    }
    this.ws = new WebSocket('ws://k8s.definesys.com:30529/socket/' + appId + "_" + user.code);
    const that = this;
    this.ws.onopen = function (event) {
      // socket 开启后执行，可以向后端传递信息
      // that.ws.send('sonmething');
    };
    this.ws.onmessage = function (event) {
      // socket 获取后端传递到前端的信息
      that.getMessages();
    };
    this.ws.onerror = function (event) {
      // socket error信息
    };
    this.ws.onclose = function (event) {
      // socket 关闭后执行

    };
  }

  // 设置所有数据为已读
  // setAllMessageRead() {
  //   const appId = environment.appInfo.appId;
  //   this.network.get("/message/updataStatusAll?appId="
  //     + appId + "&status=" + this.messagesTypeCode).subscribe((res: any) => {
  //       if (res.code === 'ok') {
  //         this.getMessages(this.messagesTypeCode);
  //       }
  //     });
  // }
  // 推送消息的类型
  // changeMessType(event) {
  //   this.messagesTypeCode = event;
  //   this.getMessages(event);
  //   switch (event) {
  //     case 'all':
  //       this.messagesType = '全部消息';
  //       break;
  //     case 'unread':
  //       this.messagesType = '未读消息';
  //       break;
  //     default:
  //       this.messagesType = '已读消息';
  //   }
  // }
  close() {
    this.openMessageWindow = false;
  }

  /**
   * @author lizhihang
   * @date 2019-10-30
   * @description 打开修改个人信息弹窗
   */
  modifyInfo(){
    //const user = this.localStorageService.get("app.userInfo.userId");

    //this.validateInfoForm.get("empId").setValue(user);
    const name = this.session.get("app.userInfo.userName");
    this.validateInfoForm.get("name").setValue(name);
    const sex = this.session.get("app.userInfo.userGender");
    if (sex == null) {
      this.userSex = "man";
    } else {
      this.userSex = sex;
    }
    const email = this.session.get("app.userInfo.userEmail");
    this.validateInfoForm.get("email").setValue(email);
    const phone = this.session.get("app.userInfo.userPhone");
    this.validateInfoForm.get("phone").setValue(phone);
    this.isModifyInfo = true;
  }
 /**
   * @author lizhihang
   * @date 2019-10-30
   * @description 保存修改个人信息
   */
  saveInfo(){
    for (const i in this.validateInfoForm.controls) {
      this.validateInfoForm.controls[i].markAsDirty();
      this.validateInfoForm.controls[i].updateValueAndValidity();
    }
    if(this.isUpdateInfo) {
      if (!this.validateInfoForm.valid) {
        this.nzNotificationService.create("warning", "请填写必填项！", "");
        return;
      }
    }
  }

  cancelModify(){
    this.isModifyInfo = false;
    this.userIcon = this.session.get("app.userInfo.userIcon");
    if ( this.userIcon == null) {
      this.isHasIcon = false;
      this.iconName = this.session.get("app.userInfo.userName");
      // this.avatarCropping.setIconName(this.iconName);
      // this.avatarCropping.setHasIcon(this.isHasIcon);
    } else {
      this.avatarImgBng = "white";
      this.isHasIcon = true;
      this.iconName = "";
      // this.avatarCropping.setIconName(this.iconName);
      // this.avatarCropping.setHasIcon(this.isHasIcon);
      // this.avatarCropping.setAvatarSrc(this.userIcon);
    }
  }
}

class LoadingConfig {
  showLoading: Boolean;
}
