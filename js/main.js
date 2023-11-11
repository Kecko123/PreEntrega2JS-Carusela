const articulos = [
    {
        tipo: "taza",
        nombre: "Taza De Gryffindor",
        precio: 3000,
        descripcion: "Taza de ceramica de la casa de Harry Potter Gryffindor con capacidad de 250Ml"
    },
    {
        tipo: "taza",
        nombre: "Taza De Slytherin",
        precio: 3000,
        descripcion: "Taza de ceramica de la casa de Harry Potter Slytherin con capacidad de 250Ml"
    },
    {
        tipo: "taza",
        nombre: "Taza De Hufflepuff",
        precio: 3000,
        descripcion: "Taza de ceramica de la casa de Harry Potter Hufflepuff con capacidad de 250Ml"
    },
    {
        tipo: "taza",
        nombre: "Taza De Ravenclaw",
        precio: 3000,
        descripcion: "Taza de ceramica de la casa de Harry Potter Ravenclaw con capacidad de 250Ml"
    },
    {
        tipo: "prenda",
        nombre: "Remera de Gryffindor",
        precio: 7000,
        descripcion: "Remera hecha 100% de algodon con el logo de Gryffindor",
    },
    {
        tipo: "prenda",
        nombre: "Remera de Slytherin",
        precio: 7000,
        descripcion: "Remera hecha 100% de algodon con el logo de Slytherin",
    },
    {
        tipo: "prenda",
        nombre: "Remera de Hufflepuff",
        precio: 7000,
        descripcion: "Remera hecha 100% de algodon con el logo de Hufflepuff",
    },
    {
        tipo: "prenda",
        nombre: "Remera de Ravenclaw",
        precio: 7000,
        descripcion: "Remera hecha 100% de algodon con el logo de Ravenclaw",
    },
    {
        tipo: "decoración",
        nombre: "Snitch Dorada",
        precio: 2300,
        descripcion: "Una snitch dorada de harry potter de 15cm de longitud, perfecta para decoración"
    },
    {
        tipo: "varita",
        nombre: "Varita de Saúco",
        precio: 4500,
        descripcion: "Varita de sauco, tambien llamada la varita mas poderosa del mundo, perteneció a Dumbledor, y es una de las 3 reliquias de la muerte"
    },
    {
        tipo: "accesorio",
        nombre: "Colgante de las reliquias de la muerte",
        precio: 2500,
        descripcion: "Un colgante con el simbolo de las reliquias de la muerte"
    },
    {
        tipo: "accesorio",
        nombre: "Pendientes de las reliquias de la muerte",
        precio: 1500,
        descripcion: "Dos pendientes con el simbolo de las reliquias de la muerte"
    },
]


function crearArticulo() {
    this.tipo = prompt('Ingrese el tipo del producto:');
    this.nombre = prompt('Ingrese el nombre del producto:');
    const precioString = prompt('Ingrese el precio del producto:');
    this.precio = parseFloat(precioString);
    this.descripcion = prompt('Ingrese la descripción del producto:');
    const nuevoArticulo = {
        tipo,
        nombre,
        precio,
        descripcion,
    };

    if (isNaN(this.precio)) {
        console.log('Ingresar un precio numerico porfavor');
        return;
    } else {
        articulos.push(nuevoArticulo);
    }

}


function verCatalogo() {
    for (let i = 0; i < articulos.length; i += 1)
        console.log(articulos[i])
}

function filtrarProductos() {
    const item = prompt("Ingrese que tipo de articulo desea")

    const articulosFiltrados = articulos.filter(articulo => articulo.tipo === item)

    console.log('Los productos que coinciden con su busqueda son:', articulosFiltrados);
}

function filtrarPrecio() {
    const precioMaximo = parseFloat(prompt('Ingrese el precio máximo:'));

    if (isNaN(precioMaximo)) {
        console.log('Por favor, ingrese un número válido.');
        return;
    }

    const preciosFiltrados = articulos.filter(producto => producto.precio <= precioMaximo);

    console.log('Productos con precio igual o inferior a $' + precioMaximo + ':', preciosFiltrados);
}

// filtrarProductos()
// crearArticulo();
// filtrarPrecio()
// verCatalogo()
// console.log(filtrarTazas)
// console.log(filtrarPrendas)
