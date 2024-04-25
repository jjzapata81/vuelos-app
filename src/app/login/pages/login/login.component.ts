import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  template: '<button>Log in</button>',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor() {
   //auth.loginWithPopup
  }
}
