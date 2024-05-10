import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gender-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gender-buttons.component.html',
  styleUrl: './gender-buttons.component.scss',
})
export class GenderButtonsComponent {
  selected: { men: boolean; woman: boolean; kid: boolean } = {
    men: false,
    woman: false,
    kid: false,
  };

  changeSelected(pressed: 'men' | 'woman' | 'kid') {
    this.selected = {men: false, woman: false, kid: false, [pressed]: true}
  }
}
