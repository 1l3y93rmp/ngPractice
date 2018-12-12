import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; //指定的component (這裡不用副檔名)
import { HellobzComponent } from './hellobz/hellobz.component'
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeaderComponent }  from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/hellobz', pathMatch: 'full' }, // 這裡可以寫預設路由要指到哪裡，會自動轉跳
  { path: 'heroes', component: HeroesComponent },
  { path: 'hellobz', component: HellobzComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  // 詳細說明的Component, path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id (深層路由)
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //始化路由器
  exports: [RouterModule]
})
export class AppRoutingModule { }
