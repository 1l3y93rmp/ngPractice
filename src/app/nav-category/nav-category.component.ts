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

  ngOnInit() {
  }

}
