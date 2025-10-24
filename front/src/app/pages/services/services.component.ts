import { Component } from '@angular/core';
import { DATA } from '../../models/data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = DATA.services.services;
}
