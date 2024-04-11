import { Component } from '@angular/core';
import { faAlignJustify, faArrowDownShortWide, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAirbnb, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-randomicon',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './randomicon.component.html',
  styleUrl: './randomicon.component.scss'
})
export class RandomiconComponent {
  icons = [faCoffee, faAlignJustify, faAirbnb, faAmazon, faArrowDownShortWide]
  randomIndex: number | undefined;
  icon: any = undefined;
  timeout: any;
  getRandomIcon()
  {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.randomIndex = Math.floor(Math.random() * this.icons.length);
      this.icon = this.icons[this.randomIndex];
    }, 3000)
  }
}
