
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PagesService {

  // 发射给业务中心管理 - 查询
  searchValuesToBusinessCenter: EventEmitter<string> = new EventEmitter();
  // 发射给用户管理 - 查询
  searchValuesToUserManagement: EventEmitter<string> = new EventEmitter();

  constructor() { }

}
