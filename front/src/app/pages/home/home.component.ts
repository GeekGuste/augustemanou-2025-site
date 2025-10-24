import { Component } from '@angular/core';
import { DATA } from '../../models/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly data = DATA;
}
