function cambiar_parrafo() {
  document.getElementById("editar-parrafo").style.display = "block";
  let text = document.getElementById("editar-texto").innerText;
  console.log(text);
};

function myFuncion2(valor) {
  document.getElementById("editar-texto").innerText = valor;
};

//controla sis e presiona enter
let textarea = document.getElementById("editar-parrafo")
textarea.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    document.getElementById("editar-parrafo").style.display = "none";
  }

});
  

function showFile(input) {
  let file = input.files[0];	
  alert(`File name: ${file.lastModified}`);
  alert(`File size: ${file.lastModified}`);

  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    console.log(reader.result);
    document.getElementById("editar-texto").innerText = reader.result;
  };
  reader.onerror = function () {
    console.log(reader.error);
  };
}

/*Drag and drop */

document.addEventListener('DOMContentLoaded', (event) => {

  function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

   function handleDrop(e) {
    e.stopPropagation();
     
     
     if (dragSrcEl !== this) {
       dragSrcEl.innerHTML = this.innerHTML;
       this.innerHTML = e.dataTransfer.getData('text/html');
     }
     
     return false;
  }

  let items = document.querySelectorAll('.contenedorDraggable .resume-box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });


});


/* Modificar imagen*/

document.getElementById('imagenPerfil').src = 'ne'