import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// 這個文件單純的表示了靜態的值在Clsss中的"擺放方式與值的類型"
// import { HEROES } from '../mock-heroes'; // 一堆假資料

import { HeroService } from '../hero.service'; // 資料的服務模塊

@Component({ // 裝飾器
  selector: 'app-heroes', // 如果這個Class 被Call 他在html裡面是這樣寫: <app-heroes>
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass'] // 該模塊私有的
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {
    // 在constructor 設置一個參數，讓下面的方法可以用This 去Call它
    // 也可以說: 是把'../hero.service' 這個資料的服務模塊的操作 "注入"進來這個Class
  }

  // 新增一個State 叫做 hero
  hero: Hero = { // 這裡指的是我們在設定靜態值必須要依照class Hero的方式 (這個State 暫時沒有再用了)
    id: 1,
    name: 'Windstorm'
  };


  // heroes = HEROES; // 英雄列表
  heroes: Hero[]; // 新增一個State 是陣列 英雄列表
  getHeroes(): void {
    // 這其實是一個Get資料的動作 只是我們又把這件事情用模組包起來了
    // this.heroes = this.heroService.getHeroes();

    // 為了模擬異步所以用了rxjs Observable
    // Observable會在抓到資料完成的時候才通知調用它的地方
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // selectedHero: Hero; // 新增一個State 叫做 selectedHero，是\必須參照'../hero'這個格式表

  // onSelect(hero: Hero): void {
  //   // onSelect這個方法 會把被點種的當前Li的值傳進來(值就是指 For 迴圈被列舉到的值)
  //   this.selectedHero = hero;
  // }
  // 上面這段因為已經被 routerLink 處理掉了 所以不需要再去紀錄 selectedHero 落給誰了

  delete(hero: Hero): void { // 點擊刪除後的操作
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    // 刪除什麼的操作都是給 heroService 那邊去寫
    // 不過讀取更新的工作這個模塊要自己做
    // heroService.delete() 之後會返回 Observable 所以這樣會自動更新
  }
  ngOnInit() { // 子模塊的生命週期: 初始化邏輯
    this.getHeroes(); // 第26行定義的方法
  }

}
