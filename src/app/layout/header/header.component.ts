import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CartButtonComponent } from '../../components/cart-button/cart-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CartButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
