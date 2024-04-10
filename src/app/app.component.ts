import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomiconComponent } from './randomicon/randomicon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomiconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
