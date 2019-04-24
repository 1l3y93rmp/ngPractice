import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AAAComponent } from '../aaa/aaa.component';


const routes: Routes = [ // 這是一個不會被幫斗再一起的 JS 路由由child 後面出去
  { path: '', component: AAAComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
