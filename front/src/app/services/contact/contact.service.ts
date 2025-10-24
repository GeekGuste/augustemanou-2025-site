import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ContactMessage } from '../../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private api: ApiService) {}

  sendContactForm(data: ContactMessage) {
    return this.api.post('contact', data);
  }
}