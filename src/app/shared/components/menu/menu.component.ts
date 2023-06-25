import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Textos Y Fechas',
            icon: 'pi pi-fw pi-align-left',
            routerLink: ['/'],
            tooltip:"Textos Y Fechas"
          },
          {
            label: 'Números',
            icon: 'pi pi-fw pi-dollar',
            routerLink: ['/numbers'],
            tooltip:"Textos Y Fechas",
          },
          {
            label: 'No comunes',
            icon: 'pi pi-fw pi-globe',
            routerLink: ['/uncommon'],
            tooltip:"Textos Y Fechas"
          },
        ],
      },
      {
        label: 'Pipes Perzonalizados',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Otro Elemento',
            icon: 'pi pi-fw pi-cog',
          },
        ],
      },
    ];
  }
}
