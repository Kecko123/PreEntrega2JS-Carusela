function Articulo(tipo, nombre, precio, descripcion) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio + " Pesos";
    this.descripcion = descripcion;
}

const item1 = new Articulo("Taza", "Taza de Gryffindor", 3000, "Taza de ceramica de la casa de Harry Potter Gryffindor con capacidad de 250Ml");

const item2 = new Articulo("Taza", "Taza de Slytherin", 3000, "Taza de ceramica de la casa de Harry Potter Slytherin con capacidad de 250Ml")

const item3 = new Articulo("Taza", "Taza de Ravenclaw", 3000, "Taza de ceramica de la casa de Harry Potter Ravenclaw con capacidad de 250Ml")

const item4 = new Articulo("Taza", "Taza de Hufflepuff", 3000, "Taza de ceramica de la casa de Harry Potter Hufflepuff con capacidad de 250Ml")

const item5 = new Articulo("Ropa", "Remera de Gryffindor", 6000, "Remera 100% algodon de Gryffindor")

const item6 = new Articulo("Ropa", "Remera de Slytherin", 6000, "Remera 100% algodon de Slytherin")

const item7 = new Articulo("Ropa", "Remera de Ravenclaw", 6000, "Remera 100% algodon de Ravenclaw")

const item8 = new Articulo("Ropa", "Remera de Hufflepuff", 6000, "Remera 100% algodon de Hufflepuff")


const articulos = [item1, item2, item3, item4, item5, item6, item7, item8]

for (i=0;i<articulos.length;i+=1)

console.log(articulos[i])

const filtrarArticulos = articulos.filter((articulo) => articulo.tipo("Taza"))

console.log(filtrar)
