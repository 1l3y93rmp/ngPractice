import { Component, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.sass' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>; //宣告了一個 heroes$ 是 searchTerms (回傳結果)
  private searchTerms = new Subject<string>(); // 建立了一個 叫做searchTerms 的 Observable (這是搜尋文字)
 
  constructor(private heroService: HeroService) {} //注入使用heroService的方法
 
  // 將搜索詞推送到 observable 裡面
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // 300毫秒之內都沒有keyup關鍵字時...
      //debounceTime: 只有在特定的一段时间经过后并且没有发出另一个源值，才从源 Observable 中发出一个值。 https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-debounceTime
      debounceTime(300),
 
      // 檢查一下 如果輸入的東西相同就忽略掉
      // https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-distinctUntilChanged
      distinctUntilChanged(),
 
      // 每當搜尋不同時 切換到新的 Observable
      // 每个从 debounce 和 distinctUntilChanged 中通过的搜索词调用搜索服务。 它会取消并丢弃以前的搜索可观察对象，只保留最近的。
      switchMap((term: string) => this.heroService.searchHeroes(term)),

      // 借助 switchMap 操作符， 每个有效的击键事件都会触发一次 HttpClient.get() 方法调用。 即使在每个请求之间都有至少 300ms 的间隔，仍然可能会同时存在多个尚未返回的 HTTP 请求。

      // switchMap() 会记住原始的请求顺序，只会返回最近一次 HTTP 方法调用的结果。 以前的那些请求都会被取消和舍弃。

      // 注意，取消前一个 searchHeroes() 可观察对象并不会中止尚未完成的 HTTP 请求。 那些不想要的结果只会在它们抵达应用代码之前被舍弃。
    );
  }
}