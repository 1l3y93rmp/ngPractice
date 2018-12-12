import { Component, OnInit , Input} from '@angular/core';
// Input 指的是從父輩傳值進來的這一件事情，如果這個Component有用到 就要導入
import { Hero } from '../hero';
// 這個文件單純的表示了靜態的值在Clsss中的"擺放方式與值的類型"

// 这个组件所做的只是通过 hero 属性接收一个英雄对象，并显示它。
import { HeroService }  from '../hero.service'; // 要自己取得資料不要再依靠父輩傳遞囉

import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common'; //location 是一个 Angular 的服务，用来与浏览器打交道。(?)

@Component({
  selector: 'app-hero-detail', // 如果這個Class 被Call 他在html裡面是這樣寫: <app-hero-detail>
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  


  @Input() hero: Hero; // 這裡就是從父輩傳入的資料了 傳入hero 格式採用 Hero(../hero) 註:這是單向的

  getHero(): void { // 去取得一筆 hero 資料
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void { // 回上一頁
    this.location.back();
  }

  save(): void { // 點擊處存按鈕後儲存資料
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.getHero(); //取得資料
  }

}
