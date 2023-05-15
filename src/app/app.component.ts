import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Portolio Lucrecia Khoury';
  curso: string = '#ArgentinaPrograma';
  estudiante: string = 'Lucrecia Khoury';

   onDragStart(event: DragEvent) {
    // lógica de inicio de arrastre aquí
  }

  onDragOver(event: DragEvent) {
    // lógica de arrastre aquí
  }

  onDragLeave(event: DragEvent) {
    // lógica de salida de arrastre aquí
  }

  onDrop(event: DragEvent): void {
    // lógica de soltar aquí
  }
}
