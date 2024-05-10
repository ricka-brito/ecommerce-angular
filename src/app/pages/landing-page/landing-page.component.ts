import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { BannerSectionComponent } from '../../layout/banner-section/banner-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, BannerSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
