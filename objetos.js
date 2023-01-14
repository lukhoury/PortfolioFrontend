var porfolio = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["", ""]
};
//A esto despues tengo que agregar el ID en el div en el que vaya el nombre
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
//A esto despues tengo que agregar el ID en el div en el que vaya el apellido
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
    return porfolio.Apellido = apellido;
}
//en el de Acerca de se vuelve a repetir el de apellido
//A esto despues tengo que agregar el ID en el div en el que vaya el apellido
function GetAcercade(acercade) {
    var a = document.getElementById("Acercade");
    a.textContent = acercade;
    return porfolio.Acercade = acercade;
}
//A esto despues tengo que agregar el ID en el div en el que vaya el titulo
function GetTitulos(titulo1, titulo2) {
    var a = document.getElementById("Titulos");
    a.textContent = titulo1, titulo2;
    return porfolio.Titulos[0] = titulo1, porfolio.Titulos[1] = titulo2;
}
//esta funcion abre el archivo y lo lee. LLama a las funciones para completar el ciclo de ejecucion y escribir en los divs. Esto es de forma dinamica. 
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var s = reader.result.toString();
        console.log(s);
        var arr = s.split('\n');
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3], arr[4]);
    };
}
