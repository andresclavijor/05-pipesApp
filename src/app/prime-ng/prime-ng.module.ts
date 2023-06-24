import { NgModule } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@NgModule({
  exports: [
    ButtonModule,
    RippleModule,
    MenuModule
  ]
})
export class PrimeNgModule { }
