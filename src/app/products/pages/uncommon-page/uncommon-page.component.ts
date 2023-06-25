import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss'],
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Andres';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.gender === 'male') {
      this.name = 'Johanna';
      this.gender = 'female';
    } else {
      this.name = 'Andres';
      this.gender = 'male';
    }
  }

  //i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  public deleteClient() {
    this.clients.shift();
  }

  //key value pipe
  public person = {
    name: 'fernando',
    age: 36,
    address: 'Otawa Canada',
  };

  //Async pipe
  public myObservableTimer = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}
