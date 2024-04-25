import { Component } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  user={
    name:'',
    photo:''
  }

  constructor(public auth: AuthService){


    auth.user$.subscribe(u => {
      this.user.name = u?.name||'';
      this.user.photo = u?.picture||'';
      console.log(u?.sub);
    })

  }

  menuItems: Menu[] = [
    { name:'Logo (inicio)', url: '/' },
    { name:'Ofertas y destinos', url: '#' },
    { name:'Mis reservas', url: 'bookings' },
    { name:'Centro de ayuda', url: 'help' }
  ]

}
