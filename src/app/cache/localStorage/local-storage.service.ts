/**
 *  之后考虑添加一个过期功能
 *  Service多播要在其他服务中实现
 */

import { Injectable } from '@angular/core';

const ls = localStorage;

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  // expiredTime: number = 1000 * 60 * 60 * 24 * 7; // 7天过期时间

  constructor() {}

  /**
   * 获取key对应的value
   */
  public get<T>(key: string): any {
    return JSON.parse(ls.getItem(key)) as T;
  }

  /**
   *  获取一个list
   */
  public getList<T>(key: string) {
    const before = ls.getItem(key);
    return before ? (JSON.parse(before) as T[]) : [];
  }

  /**
   *  设置对应key的值
   */
  public set(key: string, value: any): void {
    if (!value && value === undefined) { return; }
    const arr = JSON.stringify(value);
    ls.setItem(key, arr);
  }

  /**
   *  删除某一项
   * @param localStorage中的key
   */
  public removeItem(key: string): void {
    ls.removeItem(ls.getItem(key));
  }

  /**
   *  清理localStorage
   */
  public clearStorage() {
    ls.clear();
  }

}
