import { NgModule } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  exports: [
    ButtonModule,
    RippleModule,
    MenuModule,
    MenubarModule,
    TooltipModule
  ]
})
export class PrimeNgModule { }
