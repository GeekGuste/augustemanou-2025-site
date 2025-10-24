import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly defaultLang = 'fr';
  private readonly storageKey = 'preferred_lang';

  constructor(private translate: TranslateService) {
    const saved = this.getSavedLang();
    this.translate.setDefaultLang(this.defaultLang);
    this.translate.use(saved);
  }

  getCurrentLang(): string {
    return this.translate.currentLang || this.defaultLang;
  }

  setLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem(this.storageKey, lang);
  }

  getSavedLang(): string {
    return localStorage.getItem(this.storageKey) || this.defaultLang;
  }
}