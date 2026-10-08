// src/app/core/services/emailjs.service.ts
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmailJsService {
  private initialized = false;

  private ensureInit() {
    if (this.initialized) return;
    emailjs.init(environment.emailjs.publicKey);
    this.initialized = true;
  }

  /**
   * Envia um formulário inteiro (inclui <input type="file"> se existir no form).
   * IMPORTANTE: o "name" dos campos precisa bater com o Template do EmailJS.
   */
  sendJoinForm(formEl: any): Promise<EmailJSResponseStatus> {
    this.ensureInit();

    return emailjs.sendForm(
      environment.emailjs.serviceId,
      environment.emailjs.templateIdJoin,
      formEl,
      {
        // ajuda a evitar abuso
        // (opcional) deixa 1 envio a cada 10s
        // publicKey já vem do init, mas você poderia passar aqui também
      }
    );
  }
}
