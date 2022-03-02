let nombreProductoA = "Latas";
let stockProductoA = 1000;
let precioProductoA = 100;
let nombreProductoAm = "latas";

let nombreProductoB = "710";
let stockProductoB = 1000;
let precioProductoB = 140;

let nombreProductoC = "Litro";
let stockProductoC = 1000;
let precioProductoC = 160;
let nombreProductoCm = "litro";

let nombreCompra = "";
let cantidadCompra;
let precioTotalVenta = 0;


alert(
    "Estos son los productos que usted puede comprar: \n" +
        nombreProductoA +
        "\n" +
        nombreProductoB +
        "\n" +
        nombreProductoC
);

let cantidadProductosCompra = parseInt(
    prompt("Que cantidad de productos distintos desea comprar")
);

function encontrarProducto() {
    for (let i = 0; i < cantidadProductosCompra; i++) {
        nombreCompra = prompt("que producto desea comprar?");

        if (
            nombreCompra == nombreProductoA ||
            nombreCompra == nombreProductoAm
        ) {
            compra(stockProductoA, precioProductoA, nombreProductoA);
        } else if (nombreCompra == nombreProductoB) {
            compra(stockProductoB, precioProductoB, nombreProductoB);
        } else if (
            nombreCompra == nombreProductoC ||
            nombreCompra == nombreProductoCm
        ) {
            compra(stockProductoC, precioProductoC, nombreProductoC);
        } else {
            alert("No contamos con ese producto");
        }
    }
}
function stockSuficiente(stock, precio, nombre) {
    stock -= cantidadCompra;
    precioTotalVenta += precio * cantidadCompra;
    console.log(`quedan ${stock} ${nombreCompra}`);
}

function compra(stock, precio, nombre) {
    cantidadCompra = parseInt(
        prompt("ingrese la cantidad de productos que desea comprar: ")
    );
    if (cantidadCompra <= stock) {
        stockSuficiente(stock, precio, nombre);
    } else if (cantidadCompra > stock) {
        stockInsuficiente(stock);
    }
}
function informeVenta() {
    alert("El precio total de su compra es de $" + precioTotalVenta);
}
function stockInsuficiente(stock) {
    alert("no hay stock");
}

encontrarProducto();
informeVenta();

/*stockProductoA = stockProductoA - cantidadCompra;

let precioTotalVenta = precioProductoA * cantidadCompra;

alert('el precio total de su compra es de $' + precioTotalVenta);
console.log('quedan ' + stockProductoA + ' latas');
*/
