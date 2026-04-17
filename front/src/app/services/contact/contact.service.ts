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
      headers: {
        'Content-Type':  'application/json',
        'X-Site-Domain': 'augustemanou.com',
        'X-Api-Key':     '3dfe7a62d001aa9142cca9a1c7c184c158b2caacae49f6ca61471b99a44e34c0'
      }
    });
  }
}