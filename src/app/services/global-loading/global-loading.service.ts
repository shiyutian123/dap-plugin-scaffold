/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 15:44:14
 * @LastEditTime: 2019-10-12 15:53:31
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class GlobalLoadingService {
    private _onLoading = new Subject<any>();
    onLoading$ = this._onLoading.asObservable();

    private _onLoadingSuccess = new Subject<any>();
    onLoadingSuccess$ = this._onLoadingSuccess.asObservable();

    private _onLoadingError = new Subject<any>();
    onLoadingError$ = this._onLoadingError.asObservable();

    showLoading(config: any) {
        setTimeout(() => {
            this._onLoading.next(config);
        }, 1);
    }

    showError(config: any) {
        setTimeout(() => {
            this._onLoadingError.next(config);
        }, 1);
    }

    showSuccess(config: any) {
        setTimeout(() => {
            this._onLoadingSuccess.next(config);
        }, 1);
    }
}
