function validarCantidad() {
    let cantidad = document.getElementById("cantidadEmpacada").value;
    if (cantidad < 1) {
        alert("Por favor, ingrese un número mayor a 0.");
    } else {
        alert("Cantidad válida: " + cantidad);
    }
}
