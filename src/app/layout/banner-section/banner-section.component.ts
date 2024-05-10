import { Component } from '@angular/core';
import { GenderButtonsComponent } from '../../components/gender-buttons/gender-buttons.component';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [GenderButtonsComponent],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.scss'
})
export class BannerSectionComponent {

}
