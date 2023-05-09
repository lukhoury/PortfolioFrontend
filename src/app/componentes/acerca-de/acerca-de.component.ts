import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

   isLoggedIn = false;

  @ViewChild('miContenedor', { static: true }) miContenedor!: ElementRef;
  @ViewChild('nuevoTexto', { static: true }) nuevoTexto!: ElementRef<HTMLInputElement>;

  constructor() { }

  cambiarTexto() {
      const nuevoTexto = (document.getElementById('nuevoTexto') as HTMLInputElement).value;
  const contenedor = this.miContenedor.nativeElement;
  contenedor.innerHTML = `<h1><br>${nuevoTexto}<br></h1>`;
  }
  
  drop(event: DragEvent) {
  event.preventDefault();
  if (event.dataTransfer) {
    const data = event.dataTransfer.getData('text') ?? '';
    const targetElement = event.target as HTMLElement;
    const elementToMove = document.getElementById(data);
    if (elementToMove !== null) {
      targetElement.appendChild(elementToMove);
    }
  }
}

  drag(event: any) {
    event.dataTransfer.setData('text', (event.target as HTMLElement).id) ;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  

 
}


