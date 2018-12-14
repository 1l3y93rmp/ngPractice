// 這裡是整個服務最TOP的 也就是根模塊
// NgModule 用于描述应用的各个部分如何组织在一起。 每个应用又至少一个 Angular 模块，根模块就是你用来启动此应用的模块。
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here 真可憐 只好全域import NgModel 之下的模塊
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HellobzComponent } from './hellobz/hellobz.component'
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HttpClientModule }    from '@angular/common/http'; // 好像是專門處理执行 HTTP 请求的方法
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeaderComponent } from './header/header.component';
import { NavCategoryComponent } from './nav-category/nav-category.component';



@NgModule({ // 這也是一個裝飾器
  declarations: [
    //该应用所拥有的组件 依賴的模塊寫這裡 (這裡都是有View的)(網站裡面所有的都要寫在這喔
    // 有寫在這裡才能被html 的TMP或是 Router調用
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HellobzComponent,
    HeroSearchComponent,
    HeaderComponent,
    NavCategoryComponent
  ],
  imports: [ // 匯入的 Module(angular自己寫的沒有 View的 Module) 在這裡 导入 BrowserModule 以获取浏览器特有的服务，比如 DOM 渲染、无害化处理和位置
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [], // 各种服务提供商 提用来指导 Dependency injection 系统 (依賴注入)该如何获取某个依赖的值( 資料 )。 大多数情况下，这些依赖就是你要创建和提供的那些服务，它们是全应用范围的。
  bootstrap: [AppComponent] // 根组件，Angular 创建它并直接插入 index.html 宿主页面，註:插入的是該模塊的 Class 名稱
})
export class AppModule { }

// 更多關於這個檔案請看 https://angular.cn/guide/bootstrapping