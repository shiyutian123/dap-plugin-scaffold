
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *  简单的get请求
   * @param url  地址
   */
  get(url: string): Observable<any> {
    return this.http.get(url).pipe(map((response: Response) => response));
  }

  /**
   *  简单的post请求
   * @param url  请求地址，字符串
   * @param param 请求参数
   */
  post(url: string, params: any): Observable<any> {
    return this.http.post(url, params).pipe(map((response: Response) => response));
  }

}
