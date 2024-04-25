import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  let auth = inject(AuthService);
  let router = inject(Router);

  return auth.isAuthenticated$.pipe(
    tap( isLogged =>{
      if(!isLogged){
        router.navigate(['']);
      }
    })
  );
};
