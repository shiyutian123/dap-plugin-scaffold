
import { Injectable } from '@angular/core';

const ss = sessionStorage;

@Injectable({
  providedIn: 'root'
})

export class SessionStorageService {

  constructor() { }

  /**
   * 获取key对应的value
   */
  public get<T>(key: string): any {
    return JSON.parse(ss.getItem(key)) as T;
  }

  /**
   *  获取一个list
   */
  public getList<T>(key: string) {
    const before = ss.getItem(key);
    return before ? (JSON.parse(before) as T[]) : [];
  }

  /**
   *  设置对应key的值
   */
  public set(key: string, value: any): void {
    if (!value && value === undefined) { return; }
    const arr = JSON.stringify(value);
    ss.setItem(key, arr);
  }

  /**
   *  清理sessionStorge中信息
   */
  public clearSession() {
    ss.clear();
  }

}
