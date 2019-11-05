
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoginService } from './login.service';
import { LocalStorageService } from 'src/app/cache/localStorage/local-storage.service';
import { SessionStorageService } from 'src/app/cache/sessionStorage/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  // isDisabled = false;
  submitForm(e): void {
    // console.log(this.validateForm.controls);
    for (const i in this.validateForm.controls) {
      if (i) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.loginService.empId = e.userName;
    this.loginService.password = e.password;
    if (this.validateForm.value.remember) {
      this.setCookie('userName', this.validateForm.value.userName);
      this.setCookie('pwd', this.validateForm.value.password);
    } else {
      this.delCookie('userName');
      this.delCookie('pwd');
    }
    this.loginService.login();
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [null]
    });

    if (this.getCookie('userName')) {
      this.validateForm.get('userName').setValue(this.getCookie('userName'));
      this.validateForm.get('password').setValue(this.getCookie('pwd'));
      this.validateForm.get('remember').setValue(true);
    }
    // this.loginService.isDisabled.subscribe((isDisabled: boolean) => {
    //   this.isDisabled = this.isDisabled === isDisabled ? !isDisabled : isDisabled;
    // });
  }

  // /**
  //  * @description 记住密码
  //  */
  // rememberPWD(event) {
  //   if (event) {
  //     this.setCookie('userName', this.validateForm.value.userName);
  //     this.setCookie('pwd', this.validateForm.value.password);
  //   } else {
  //     this.delCookie('userName');
  //     this.delCookie('pwd');
  //   }
  // }

  // 设置cookie
  setCookie(name, value) {
    const day = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
  }

  // 获取cookie
  getCookie(name) {
    let arr;
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }

  // 删除cookie
  delCookie(name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(name);
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
    }
  }
}

