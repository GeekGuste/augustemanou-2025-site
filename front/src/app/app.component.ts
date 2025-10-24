import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { LanguageSwitcherComponent } from './shared/language-switcher/language-switcher.component';
import { ContactCallComponent } from "./components/contact-call/contact-call.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesModule, LanguageSwitcherComponent, RouterModule, ContactCallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auguste-portfolio-2025';
}
