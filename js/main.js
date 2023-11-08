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
]




function Articulo() {;
    this.tipo = prompt("Que tipo de articulo quiere publicar");
    this.nombre = prompt("Que tipo de articulo quiere publicar");
    this.precio = prompt("Que tipo de articulo quiere publicar");
    this.descripcion = prompt("Que tipo de articulo quiere publicar");
}
function agregarArticulo(){
    articulos.push()
}
agregarArticulo()
for (let i=0;i<articulos.length;i+=1)

console.log(articulos[i])
// console.log(agregarArticulo)

// let filtrarTazas = articulos.filter(articulo => articulo.tipo === "taza")

// let filtrarPrendas = articulos.filter(articulo => articulo.tipo === "prenda")



// console.log(filtrarTazas)
// console.log(filtrarPrendas)
