import { Component } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuItems: Menu[] = [
    { name:'Logo (inicio)', url: '/' },
    { name:'Ofertas y destinos', url: '#' },
    { name:'Mis reservas', url: '#' },
    { name:'Centro de ayuda', url: 'help' },
    { name:'Iniciar sesión', url: '#' }
  ]

}
