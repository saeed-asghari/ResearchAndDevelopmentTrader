import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  
  themeClass =''
  ngOnInit(): void {}
  changeTheme(theme:string) {
         this.themeClass = theme;
  }
}
