const apiKey ='AIzaSyB_etOfj-AxKXFYXThjEj5MGHOcZ8X_FxE'
const spreadsheetId ='1q4xvTk9R2fEBU7P9Se978xnKs0ppKbphcdY_yse54nk'

function validarCantidad() {
    let cantidad = document.getElementById("cantidadEmpacada").value;
    if (cantidad < 1) {
        alert("Por favor, ingrese un número mayor a 0.");
    } else {
        alert("Cantidad válida: " + cantidad);
    }
}

const rangePresentacion = 'Catalogos!A2:A';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangePresentacion}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('Presentacion');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));

const rangeUnidadMaquila = 'Catalogos!I2:I';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeUnidadMaquila}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('unidadMaquila');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));

const rangeFruta = 'Catalogos!J2:J';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeFruta}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('Fruta');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));
