class Producto{
  constructor(nombreValor, stockValor, precioValor){
      this.nombre = nombreValor;
      this.stock = stockValor;
      this.precio = precioValor;
      
  }
  venta(cantidadComprada){
      this.stock -= cantidadComprada
      console.log("El stock remanente es de: " + this.stock + " " + this.nombre);
  }
} 
const producto1 = new Producto("cerveza Lata", 1000, 100);
const producto2 = new Producto("cerveza 710", 1000, 140);
const producto3 = new Producto("cerveza Litro", 1000, 160);
const producto4 = new Producto("cerveza Negra", 1000, 180);

//array
const productos = [producto1, producto2, producto3, producto4];

//funciones orden superior
const producto5 = new Producto("cerveza Roja", 1000, 180);
const producto6 = new Producto("cerveza Oktoberfest", 1000, 180);

productos.push(producto5)
productos.push(producto6)


let contador = 0;
let cantidad = 0;
let listadoProductos = "Estos son nuestros productos: ";

//recorrer array
for (const producto of productos){
  contador++
  listadoProductos += "\n" + contador + "- " + producto.nombre
}

function mostrarProductos (){
  let respuesta = prompt (`Que productos desea comprar ? \n ${listadoProductos} \n Seleccione el numero de producto: `);
  
  if(respuesta == 1){
      cantidad = prompt(`el producto seleccionado es ${producto1.nombre} cuantas unidades desea comprar: ` )
      comprar(producto1.precio);
  }

  else if (respuesta == 2){
    cantidad = prompt(`el producto seleccionado es ${producto2.nombre} cuantas unidades desea comprar: ` )
    comprar(producto2.precio);
  }
  else if (respuesta == 3){
    cantidad = prompt(`el producto seleccionado es ${producto3.nombre} cuantas unidades desea comprar: ` )
    comprar(producto3.precio);
  }
  else if (respuesta == 4){
    cantidad = prompt(`el producto seleccionado es ${producto4.nombre} cuantas unidades desea comprar: ` )
    comprar(producto4.precio);
  }
  else if (respuesta == 5){
    cantidad = prompt(`el producto seleccionado es ${producto5.nombre} cuantas unidades desea comprar: ` )
    comprar(producto5.precio);
  }
  else if (respuesta == 6){
    cantidad = prompt(`el producto seleccionado es ${producto6.nombre} cuantas unidades desea comprar: ` )
    comprar(producto6.precio);
  }
  else {
    alert("ingrese un valor valido");
    mostrarProductos();
  }

}
  function comprar(precio){
    let total = precio * cantidad;
    confirm(`usted a decidido comprar ${cantidad} productos y el total de su compra es de: ${total}`);


  }




mostrarProductos();