import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; // 指定的component (這裡不用副檔名)
import { HellobzComponent } from './hellobz/hellobz.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeaderComponent } from './header/header.component';
// import { AAAComponent } from './aaa/aaa.component';


const routes: Routes = [
  // { path: '', redirectTo: '/hellobz', pathMatch: 'full' },// 這裡可以重新定向路由要指到哪裡，會自動轉跳 預設是自動轉跳到/根目錄
  // { path: 'aaa', component: AAAComponent },
  // 附註: 如果想要一般瀏覽器的 Href 轉跳，可以再連結寫 Href
  // 這邊也可以註記如果他的傳統 href 引導過來，要redirectTo去哪個頁面
  // redirectTo必定是一個有宣告綁定過 component 的 path(必定是AN所生產的)，不然會一直跳錯

  { path: 'teat1', component: HeroesComponent }, // 這邊寫著的都是不存在真實的路由，由 AN 的 component 控制呈現
  { path: 'teat1/hellobz', component: HellobzComponent },
  { path: 'teat1/detail/:id', component: HeroDetailComponent },
  // 詳細說明的Component, path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id (深層路由)
  { path: 'teat2', component: HeaderComponent },
  { path: 'teat2/child', loadChildren: './child/child.module#ChildModule' }
  // loadChildren lazy loading module 直接指定路徑於此表示這不會被幫斗在 Main JS 內，若 Main JS 可協助減肥 (import 方式等於加入  Main JS)
];



@NgModule({
  imports: [RouterModule.forRoot(routes)], // 始化路由器
  exports: [RouterModule]
})
export class AppRoutingModule { }
