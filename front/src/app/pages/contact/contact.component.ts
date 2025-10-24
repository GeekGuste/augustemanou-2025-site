import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DATA } from '../../models/data';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted = false;
  services = DATA.services.services;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private contactService: ContactService) {}

  ngOnInit(): void {
    let motifFromUrl = this.route.snapshot.queryParamMap.get('motif') || '';

    if (motifFromUrl) {
      motifFromUrl = this.services.find((service) => service.slug === motifFromUrl)?.name || '';
    }

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motif: [motifFromUrl],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe({
        next: (res) => {
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (err) => {
          const errorMessag = err.error?.message || 'Une erreur est survenue.';
          console.error('Erreur lors de l\'envoi du formulaire de contact:', errorMessag);
        },
        complete: () => {
          //this.isSubmitting = false;
        }
      });

    }
  }
}
