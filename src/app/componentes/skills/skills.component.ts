import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html', 
  styleUrls: ['./skills.component.css'],
  template: `
    <button (click)="showSpinner()">Mostrar círculo de progreso</button>
  `,
})
export class SkillsComponent {

    constructor(private spinner: NgxSpinnerService) {}

  showSpinner() {
    this.spinner.show(); // mostrar el círculo de progreso
    setTimeout(() => {
      this.spinner.hide(); // ocultar el círculo de progreso después de 3 segundos
    }, 3000);
  }
}
