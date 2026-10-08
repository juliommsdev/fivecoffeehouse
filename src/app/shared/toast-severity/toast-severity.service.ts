import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastSeverityService {
  constructor(private messageService: MessageService) {}
  visible: boolean = false;

  showSuccess(message: string) {
    this.messageService.clear();
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: message,
      life: 5000,
      closable: true,
      styleClass: 'toast-success',
      icon: 'pi pi-check-circle'
    });
  }

  showError(message: string) {
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: message,
      life: 7000,
      closable: true,
      styleClass: 'toast-error',
      icon: 'pi pi-times-circle'
    });
  }

  showInfo(message: string) {
    this.messageService.clear();
    this.messageService.add({
      severity: 'info',
      summary: 'Informação',
      detail: message,
      life: 5000,
      closable: true,
      styleClass: 'toast-info',
      icon: 'pi pi-info-circle'
    });
  }

  showWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: message,
      life: 6000,
      closable: true,
      styleClass: 'toast-warn',
      icon: 'pi pi-exclamation-triangle'
    });
  }

  showStickyInfo(message: string) {
    this.visible = true;
    this.messageService.clear();
    this.messageService.add({
      key: 'showInfoConfirm',
      severity: 'info',
      summary: 'Informação',
      detail: message,
      sticky: true,
      closable: false,
      styleClass: 'toast-sticky-info',
      icon: 'pi pi-bell'
    });
  }

  onConfirm() {
    this.messageService.clear('showInfoConfirm');
    this.visible = false;
  }
}
