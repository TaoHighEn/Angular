import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // 將Router Service導入



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  constructor(private router: Router) { } // 注入Router

  ngOnInit() {
  }

  login(): void {
    this.router.navigate([''], {
      queryParams: {
        name: 'Alan'
      }
    });
  }

}
