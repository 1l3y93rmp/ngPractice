// 這裡是負責接收 NAV 資料的模塊
import { Injectable } from '@angular/core';
import { FirstNavClass } from './navClass'; // 資料標準格式
import { Observable, of } from 'rxjs'; // 產生響應式函式的LIB
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 有包含Get Post 一些發起伺服器請求的方法類似JQ AJAX
import { catchError, map, tap } from 'rxjs/operators'; // 來自 rxjs 的錯誤處理

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}; // 暫時沒有用到

@Injectable({
  providedIn: 'root'
})
export class TrNavService {

  constructor(
    private http: HttpClient
  ) { }
  private First_navUrl = 'api/First_nav'; // ...這是一個比較真的假資料
  private Second_navUrl_TRPlus = 'api/Second_nav_TRPlus';
  private localhosturl = '/people'; // 另外起的一個 MockAPI 位置

  private handleError<T> (operation = 'operation', result?: T) { // 出錯了的處理方法
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getAll(): Observable<any> {
    return this.http.get(this.localhosturl).pipe(
      catchError(this.handleError('get 測試的一堆資料', []))
    );
  }

  getFirst_nav(): Observable<FirstNavClass[]> { // 取得資料
    return this.http.get<FirstNavClass[]>(this.First_navUrl)
    .pipe(
      catchError(this.handleError('get First_nav', []))
    );
  }

  Second_navData_TRPlus(storeID): Observable<{}> { // 取得資料 這筆資料沒有驗證格式
    // 這邊其實有傳進來要 for Sever 的資料(storeID) 但是目前還找不到方法傳入後去判別取得正確的資料
    return this.http.get(this.Second_navUrl_TRPlus)
    .pipe(
      catchError(this.handleError('get Second_navData_TRPlus', []))
    );
  }
}
