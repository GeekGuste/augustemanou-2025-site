import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  currentLang = 'fr';

  constructor(private langService: LanguageService) {
    this.currentLang = this.langService.getCurrentLang();
  }


  switchLang(lang: string) {
    this.langService.setLang(lang);
    this.currentLang = lang;
  }
}
