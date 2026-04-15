import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ContactMessage } from '../../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly url = 'https://contact.augustemanou.com/send.php';

  constructor(private http: HttpClient) {}

  sendContactForm(data: ContactMessage) {
    const body = new HttpParams()
      .set('from_name', data.name)
      .set('from_email', data.email)
      .set('subject', data.motif)
      .set('message', data.message);

    return this.http.post(this.url, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
}