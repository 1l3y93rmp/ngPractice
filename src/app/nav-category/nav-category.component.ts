import { Component, OnInit, Input} from '@angular/core';
// Input 指的是從父輩傳值進來的這一件事情，如果這個Component有用到 就要導入
@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.sass']
})
export class NavCategoryComponent implements OnInit {
  
@Input() category_Data: {};
  constructor() { }

  category_s_Data: Array<any>; // 每一分類再下一層資料
  index: Number = 0

  mouseEnterNav(i) : void { // 當游標懸停的時候的動作
    console.log(this.category_Data['MCategories'][i])
    // this.category_s_Data = this.category_Data['MCategories'][i]; // 把資料傳下去
    this.index = i;
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    // ngAfterContentInit 上層傳入值第一次 觸發
    // ngAfterContentChecked 上下層傳入/ 修改都會觸發
    console.log('偵測到變動')
      this.category_s_Data = this.category_Data['MCategories'][this.index]
      if (this.category_s_Data === undefined) {
        this.category_s_Data = this.category_Data['MCategories'][0]
        this.index = 0;
      }
  }

}
