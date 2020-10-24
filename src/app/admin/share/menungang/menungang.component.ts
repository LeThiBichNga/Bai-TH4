import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-menungang',
  templateUrl: './menungang.component.html',
  styleUrls: ['./menungang.component.css']
})
export class MenungangComponent implements OnInit, AfterViewInit {

  public menus = [
    {name :'Người dùng', url:'',icon:'user',childs:[{name:'Quản lý người dùng',url:'user/user'},{name:'Đăng xuất', url:''},{name:'Đăng nhập', url:'/login'}]},
    {name:'Hàng hóa',url:'',icon:'signal',childs:[{name:'Quản lý danh mục',url:'/donhang'},{name:'Quản lý loại hàng',url:'/loaihang'},{name:'Quản lý sản phẩm',url:'/sanpham'}]}];
    constructor() { } 
    ngOnInit(): void {
    }
    ngAfterViewInit() {
      $('#sidebar-collapse').click(function () {
        setTimeout(() => {
          let event;
          if (typeof (Event) === 'function') {
            event = new Event('resize');
          } else {
            event = document.createEvent('Event');
            event.initEvent('resize', true, true);
          }
          window.dispatchEvent(event);
        }, 100);
        if (!$('#sidebar').hasClass('menu-min')) {
          $('.main-content').css('padding-left', '43px');
          $('.footer-inner').css('left', '43px');
        } else {
          $('.main-content').css('padding-left', '190px');
          $('.footer-inner').css('left', '190px');
        }
      });
      setTimeout(() => {
        let event;
        if (typeof (Event) === 'function') {
          event = new Event('resize');
        } else {
          event = document.createEvent('Event');
          event.initEvent('resize', true, true);
        }
        window.dispatchEvent(event);
      }, 100);
      setTimeout(() => {
        $('.main-content').css('padding-left', $('#sidebar').width() + 1);
        $('.footer-inner').css('left', $('#sidebar').width() + 1);
      }, 100);
    }

}
