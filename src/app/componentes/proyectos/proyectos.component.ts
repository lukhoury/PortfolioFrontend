import { Component } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  
})
export class ProyectosComponent {

    isLoggedIn = true;

  constructor() { }

  // Función para manejar el evento de arrastrar
  drag(event: any) {
    if (event.target) {
      event.dataTransfer.setData('text', (event.target as HTMLElement).id);
    }
  }

  // Función para manejar el evento de permitir el soltar
  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  // Función para manejar el evento de soltar
  drop(event: DragEvent) {
    event.preventDefault();
    var data = '';
    if (event.dataTransfer && event.dataTransfer.getData) {
      data = event.dataTransfer.getData('text');
    }
    var target = event.target as HTMLElement;
    if (target && target.appendChild) {
      var el = document.getElementById(data);
      if (el) {
        target.appendChild(el);
      }
    }
  }
  
}

