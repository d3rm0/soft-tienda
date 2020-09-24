function guardar(){
   
    var _nom = document.getElementById("nomb").value;
    var _cant = document.getElementById("cant").value;
    var _precio = document.getElementById("precio").value;

    var fila="<tr><td>"+_nom+"</td><td>"+_cant+"</td><td>"+_precio+"</td><td class='subtotal'>"+_cant*_precio+"</td><td><input type='button' class='borrar' value='Eliminar' /></td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}

function limpiar() {
    document.getElementById("nomb").value = "";
    document.getElementById("cant").value = "";
    document.getElementById("precio").value = "";
}

function limpiar3() {
    var Table = document.getElementById("tablita"); 
    Table.innerHTML = "";
}

$(function () {
    $(document).on('click', '.borrar', function (event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });
});
