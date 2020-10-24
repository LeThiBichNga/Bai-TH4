import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share/share.module';
import { HomeComponent } from './home/home.component';
import { DonhangComponent } from './donhang/donhang.component';
import { LoaihangComponent } from './loaihang/loaihang.component';
import { SanphamComponent } from './sanpham/sanpham.component' 
import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from '../common/login/login.component';
import { from } from 'rxjs';
import { MainComponent } from './main.component';
import {ReactiveFormsModule} from '@angular/forms';
const approuter : Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path : '',
        component: HomeComponent
      },
      {
        path: 'donhang',
        component: DonhangComponent
      },
      {
        path: 'loaihang',
        component: LoaihangComponent
      },
      {
        path: 'sanpham',
        component: SanphamComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
@NgModule({
  declarations: [HomeComponent, DonhangComponent, LoaihangComponent, SanphamComponent, MainComponent,LoginComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(approuter),
    ReactiveFormsModule
  ]
})
export class MainModule { }
