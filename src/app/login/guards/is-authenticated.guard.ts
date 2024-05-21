import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  const router = inject(Router);

  //const url = state.url;
  //localStorage.setItem('url', url);

  if(authService.authStatus() === AuthStatus.AUTHENTICATED){
    return true;
  }

  router.navigateByUrl('/login');
  return false;
};
