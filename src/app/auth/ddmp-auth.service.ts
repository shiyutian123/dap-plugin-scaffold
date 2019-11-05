import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DdmpUser, DdmpToken } from './ddmp-auth.model';

@Injectable()
export class DdmpAuthService {

    private user: DdmpUser ;           // 当前用户
    private token: DdmpToken ;         // 当前登录的 token 信息

    private currentUserObservable$ = new Subject<DdmpUser>();
    private currentTokenObservable$ = new Subject<DdmpToken>();

    constructor() {
    }

    /**
     * 获取当前用户信息
     */
    get currentUser(): DdmpUser {
        return this.user ;
    }

    setUser(user: DdmpUser) {
        this.user = user ;
        this.currentUserObservable$.next(user);
    }

     /**
     * 获取当前用户信息的通知
     */
    get currentUserObservable(): Observable<DdmpUser> {
        return this.currentUserObservable$.asObservable() ;
    }

    /**
     * 获取当前 Token
     */
    get currentToken(): DdmpToken {
        return this.token ;
    }

    setToken(token: DdmpToken) {
        this.token = token ;
        this.currentTokenObservable$.next(token);
    }

    /**
     * 获取当前 Token 的通知
     */
    get currentTokenObservable(): Observable<DdmpToken> {
        return this.currentTokenObservable$.asObservable() ;
    }
}
