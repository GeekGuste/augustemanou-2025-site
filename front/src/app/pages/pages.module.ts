import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LightboxModule } from 'ngx-lightbox';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    LightboxModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, AboutComponent, PortfolioComponent, ServicesComponent, ContactComponent, ProjectDetailComponent],
  exports: [HomeComponent, AboutComponent, PortfolioComponent, ServicesComponent, ContactComponent, ProjectDetailComponent]
})
export class PagesModule { }
