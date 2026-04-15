import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DATA } from '../../models/data';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted = false;
  isSubmitting = false;
  services = DATA.services.services;

  toast: { visible: boolean; success: boolean; message: string } = {
    visible: false,
    success: true,
    message: ''
  };

  private toastTimer: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private contactService: ContactService) {}

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

  showToast(success: boolean, message: string): void {
    clearTimeout(this.toastTimer);
    this.toast = { visible: true, success, message };
    this.toastTimer = setTimeout(() => (this.toast.visible = false), 5000);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.contactService.sendContactForm(this.contactForm.value).subscribe({
        next: () => {
          this.contactForm.reset();
          this.submitted = false;
          this.showToast(true, 'Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais !');
        },
        error: (err) => {
          this.isSubmitting = false;
          const message = err.error?.message || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.';
          this.showToast(false, message);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}
