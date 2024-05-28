import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { EMPTY, Observable, from, of, throwError } from 'rxjs';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule // Importa HttpClientTestingModule para proporcionar HttpClient
      ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
    localStorage.removeItem('urlRedirect');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cannot call authService with invalid form', ()=>{

    const authServiceSpy = spyOn(service, 'login').and.callFake(()=>{
      return EMPTY;
    })

    component.onSubmit();

    expect(authServiceSpy).toHaveBeenCalledTimes(0);

  });
  it('must call authService with a valid form', ()=>{

    const authServiceSpy  = spyOn(service, 'login').and.returnValue(of(true));
    const routerSpy  = spyOn(router, 'navigateByUrl').and.callFake(()=>{
      return Promise.resolve(true);
    });

    const email = component.loginForm.get('email');

    email?.setValue('jj@google.com');

    const password = component.loginForm.get('password');

    password?.setValue('123456');

    component.onSubmit();

    expect(authServiceSpy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith('/');
  });

  it('must call authService with a valid form and redirect', ()=>{

    const authServiceSpy  = spyOn(service, 'login').and.returnValue(of(true));
    const routerSpy  = spyOn(router, 'navigateByUrl').and.callFake(()=>{
      return Promise.resolve(true);
    });

    localStorage.setItem('urlRedirect', '/login');

    const email = component.loginForm.get('email');

    email?.setValue('jj@google.com');

    const password = component.loginForm.get('password');

    password?.setValue('123456');

    component.onSubmit();

    expect(authServiceSpy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith('/login');
  });

  it('must show error on authService failure', ()=>{

    //const authServiceSpy = spyOn(service, 'login').and.throwError('Error!')

    const authServiceSpy  = spyOn(service, 'login').and.
      returnValue(throwError(()=>'Login failed'));


    const email = component.loginForm.get('email');

    email?.setValue('jj@google.com');

    const password = component.loginForm.get('password');

    password?.setValue('123456');

    component.onSubmit();

    expect(authServiceSpy).toHaveBeenCalled();
  })

});
