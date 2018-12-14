import { Component, OnInit } from '@angular/core';
import { First_navClass } from '../navClass';

import { TrNavService } from '../tr-nav.service'; // 資料的服務模塊
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private trNavService: TrNavService) { }
  First_navData: First_navClass[];

  Second_navData_TRPlus: {}; // 這筆資料不經過格式檢查 只規定是Obj

  category_Data: Array<any>; // 每一分類資料
  index : number;


  getFirst_navData(): void { 

    // 為了模擬異步所以用了rxjs Observable
    // Observable會在抓到資料完成的時候才通知調用它的地方
    this.trNavService.getFirst_nav()
        .subscribe(First_navData => this.First_navData = First_navData);
  }

  getSecond_navData_TRPlus(): void { // 取得 getSecond_navData_TRPlus 存在Stage
    this.trNavService.Second_navData_TRPlus('TRPlus')
        .subscribe(Second_navData_TRPlus =>{
          this.Second_navData_TRPlus = Second_navData_TRPlus;
          this.LocalStorage_save() // 取完順便存進去
        });
  }

  LocalStorage_save() : void { // 儲存 getSecond_navData_TRPlus 的動作
    localStorage.setItem('Second_navData_TRPlus', JSON.stringify(this.Second_navData_TRPlus))
  }

  chackLocalStorage_save(): any { // 檢查是否已經有 getSecond_navData_TRPlus 在 LocalStorage
    const LocalSecond_navData_TRPlus = localStorage.getItem('Second_navData_TRPlus');
    if (!LocalSecond_navData_TRPlus) {
      // 若無重跑一次取得檔案
      this.getSecond_navData_TRPlus()
    } else if (LocalSecond_navData_TRPlus && !this.Second_navData_TRPlus){
      // 若LocalSecond 有 但是Second_navData_TRPlus 內存無 幫存
      this.Second_navData_TRPlus = JSON.parse(LocalSecond_navData_TRPlus);
    }
    // 如果兩者都有什麼都不用做
  }

  mouseEnterNav(i) : void { // 當游標懸停的時候的動作
    this.chackLocalStorage_save(); // 檢查資料還在否 沒有的話存一下
    this.index = i ;
    this.category_Data = this.Second_navData_TRPlus['LCategories'][i]; // 把資料傳下去
  }

  mouseLeaveNav() : void {
    this.index = null ;
    this.category_Data = undefined;
  }

  ngOnInit() {
    this.getFirst_navData()
  }

}
