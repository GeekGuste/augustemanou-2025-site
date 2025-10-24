import { Injectable } from '@angular/core';
import { environment } from '../../../environment.ts/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) {}

  private createHeaders(): HttpHeaders {
    const lang = this.translate.currentLang || 'fr';
    return new HttpHeaders({
      'Accept-Language': lang
    });
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`, {
      headers: this.createHeaders()
    });
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, data, {
      headers: this.createHeaders()
    });
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}`, data, {
      headers: this.createHeaders()
    });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}`, {
      headers: this.createHeaders()
    });
  }
}