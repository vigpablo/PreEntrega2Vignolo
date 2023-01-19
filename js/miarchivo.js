
class Producto {
    constructor(tipo, marca, precio ) {
        this.tipo  = tipo;
        this.marca = marca.toLowerCase ();
        this.precio  = parseFloat(precio);
    }

    descuento () {
        this.precio = this.precio - (this.precio * 0.25)  
    }
}

const productosConDescuento = [];

productosConDescuento.push(new Producto(prompt ("Ingresar tipo de producto en oferta (ej. zapatilla, remera etc.)"), 
                                        prompt ("Ingresar marca"), prompt ("Ingresar precio")  ));
productosConDescuento.push(new Producto(prompt ("Ingresar otro tipo de producto en oferta (ej. zapatilla, remera etc.)"), 
                                        prompt ("Ingresar otra marca"), prompt ("Ingresar precio")));


// aplicación del descuento: 

for (const producto of productosConDescuento) producto.descuento ()

console.log ("---Lista productos con descuento:", productosConDescuento)


const productosSinDescuento = [{tipo: 'zapatillas', marca: 'nike', precio: 20000},
                               {tipo: 'joggin', marca: 'adidas', precio: 15000}];

// unión de arrays:   

const totalProductos = productosConDescuento.concat (productosSinDescuento)

console.log ("---Lista total de productos en stock:", totalProductos)

cantidad = totalProductos.length

alert ("Cantidad total de productos en stock: " + cantidad)


//mostrar lista de tipos de producto:

console.log ("---Tipos de productos disponibles:")
for (const lista of totalProductos){
    console.log (lista.tipo) //usando alert me muestra uno por uno en vez de una lista
}

// crear array con lista de precios: 

const precios = totalProductos.map ((el) => el.precio)

console.log ("---Lista de precios:", precios)
alert ("Lista de precios: "+ ("\n") + precios.join("\n"))

//sumar los precios y mostrar total:

let ingresoTotal = 0

const acumular = (num) => {
    ingresoTotal += num
}

precios.forEach (acumular)

alert ("Ingreso total bruto estimado: " + ingresoTotal)

//buscador por marca:

marcaBuscada = prompt ("Ingrese marca a buscar")

const resultado = totalProductos.filter((el) => el.marca == marcaBuscada.toLowerCase ())

console.log (resultado)







