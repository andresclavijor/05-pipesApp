import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss'],
})
export class BasicsPageComponent {
  public nameLower: string = 'andrés';
  public nameUpper: string = 'ANDRÉS';
  public fullName: string = 'AnDres ClavIjO';

  customDate: Date = new Date();
}
