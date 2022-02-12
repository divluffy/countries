import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  exports: [
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ScrollTopModule,
    ProgressSpinnerModule,
    ImageModule,
    DialogModule,
    ToggleButtonModule,
  ],
})
export class MaterialModule {}
