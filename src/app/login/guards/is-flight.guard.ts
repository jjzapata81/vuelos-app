import { CanActivateFn, Router } from '@angular/router';
import { FlightService } from '../../flight/services/flight.service';
import { inject } from '@angular/core';

export const isFlightGuard: CanActivateFn = (route, state) => {

  const flightService = inject (FlightService);
  const router = inject(Router);

  if (flightService.selectedFlight()!==null){
    return true;
  }
  router.navigateByUrl('/');
  return false;
};
