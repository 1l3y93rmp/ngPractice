//這一個模塊主要是負責取得資料並 提共資料給 負責呈現的Componter 的工作
import { Injectable } from '@angular/core';
import { Hero } from './hero'; // 資料標準格式
import { HEROES } from './mock-heroes'; // 實際假資料來源(靜態黨)
import { Observable, of } from 'rxjs'; // 產生響應式函式的LIB
import { MessageService } from './message.service'; // 一個可以存取變數的服務模組
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 有包含Get Post 一些發起伺服器請求的方法類似JQ AJAX
import { catchError, map, tap } from 'rxjs/operators'; // 來自 rxjs 的錯誤處理

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root' // 依赖注入系统目前還沒有依賴
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'api/heroes'; // ...這是一個比較真的假資料

  private handleError<T> (operation = 'operation', result?: T) { // 出錯了的處理方法
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // getHeroes(): Hero[] {
  //是一個Get資料的動作 
  //這裡應該會是一個異步操作(這邊還是假的所以是同步)
  // return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    // 這個方法是回傳所有資料回去
    // 為了異步所以用了rxjs Observable
    this.messageService.add('HeroService: fetched heroes (每次component初始化這邊就會跑一次)');
    // 在這裡也順便操作messageService 模塊裡面的 add 方法
    // 這個變數是放在 './message.service'裡面的
    // 鬆耦合通讯
    // return of(HEROES);

    // 這更像是真正的 get 並加上catchError
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> { // 這個方法是回傳一筆選重的資料，與參數經過對比後return
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));

    // 下面是使用較為真實的API 並加上catchError
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
    .pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  addHero (hero: Hero): Observable<Hero> { // 新增資料給 API修改 用"Post"
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  updateHero (hero: Hero): Observable<any> { // 回傳資料給 API修改 用"Put"
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );

  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  // 因為這邊API根本就是前端模擬假的也沒有資料庫可以存 所以重整後 修改的資料還是會消掉喔...

  searchHeroes(term: string): Observable<Hero[]> { // 這是一個搜尋名子的操作
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
