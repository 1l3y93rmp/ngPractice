import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hellobz',
  templateUrl: './hellobz.component.html',
  styleUrls: ['./hellobz.component.sass']
})
export class HellobzComponent implements OnInit {
  
  constructor(private heroService: HeroService) { }
  // 在constructor 設置一個參數，讓下面的人可以用This 去Call它

  heroes: Hero[] = []; // 建立了一個私人的State
 
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
      // 在列表中取得4筆資料
  }

  ngOnInit() {
    // 初始化的時候，把值塞進去私人State裡面
    this.getHeroes();
  }

}
