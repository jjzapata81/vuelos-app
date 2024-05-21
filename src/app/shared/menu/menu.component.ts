import { Component, computed, inject } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';
import { AuthService } from '../../login/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  private authService = inject(AuthService);

  user = computed (()=>this.authService.currentUser());

  menuItems: Menu[] = [
    { name:'Logo (inicio)', url: '/' },
    { name:'Ofertas y destinos', url: '#' },
    { name:'Mis reservas', url: '#' },
    { name:'Centro de ayuda', url: 'help' }
  ]

}
