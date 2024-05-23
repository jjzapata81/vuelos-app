import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  loginForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.minLength(6)]]
  })

  constructor(private fb:FormBuilder,
    private authService:AuthService,
   ){

  }

  onSubmit(){
    if(!this.loginForm.valid){
      alert('Diligencie todos los campos');
      return;
    }
    const { email, password } = this.loginForm.value;

    this.authService.login(email || '', password ||'').subscribe({
      next:()=> console.log('Todo bien'),
      error:(message)=>{
        alert(message);
      }
    });

  }

}
