import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules - Campos de entrada e grupos
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputNumber } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TextareaModule } from 'primeng/textarea';
import { AccordionModule } from 'primeng/accordion';

// PrimeNG Modules - UI/UX
import { TooltipModule } from 'primeng/tooltip';
import { Dialog } from 'primeng/dialog';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SpeedDial } from 'primeng/speeddial';
import { SliderModule } from 'primeng/slider';
import { Popover, PopoverModule } from 'primeng/popover';
import { DatePicker } from 'primeng/datepicker';
import { Fluid } from 'primeng/fluid';

// PrimeNG Modules - Dados e seleção
import { TableModule } from 'primeng/table';
import { PickListModule } from 'primeng/picklist';
import { SelectModule } from 'primeng/select';

// PrimeNG Services
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ToastSeverityService } from '../shared/toast-severity/toast-severity.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule,
    // Inputs e UI
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    InputNumber,
    TextareaModule,
    InputGroupModule,
    InputGroupAddonModule,
    DatePicker,
    Fluid,

    // Componentes visuais
    TooltipModule,
    Dialog,
    ConfirmDialog,
    ToastModule,
    ButtonModule,
    ToolbarModule,
    SpeedDial,
    SliderModule,
    PopoverModule,
    Popover,

    // Dados
    TableModule,
    PickListModule,
    SelectModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    AccordionModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    InputNumber,
    TextareaModule,
    InputGroupModule,
    InputGroupAddonModule,
    DatePicker,
    Fluid,

    TooltipModule,
    Dialog,
    ConfirmDialog,
    ToastModule,
    ButtonModule,
    ToolbarModule,
    SpeedDial,
    SliderModule,
    PopoverModule,
    Popover,

    TableModule,
    PickListModule,
    SelectModule,
  ],
})
export class PageModule {}
