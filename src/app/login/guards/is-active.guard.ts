import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const isActiveGuard: CanActivateFn = (route, state) => {

  const authService= inject(AuthService);
  const router = inject(Router);

  console.log({route, state});


  if(!authService.currentUser()){
    router.navigateByUrl('/login');
    localStorage.setItem('urlRedirect',state.url);
    return false;
  }
  return true;
};
