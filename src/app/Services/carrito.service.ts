import { Injectable } from '@angular/core';
import { cart } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  cartlist = cart


  obtenerProductos() {
    return this.cartlist;
  }

  eliminarProducto(producto: any) {
    this.cartlist = this.cartlist.filter(p => p !== producto);
  }

  guardarDatos() {
   // sessionStorage.setItem('cartlist', JSON.stringify(this.cartlist));
//    const usuario = { id: 1, nombre: 'Juan' };
//    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    //console.log('Datos guardados');

  }
  cargarProductos() {
    const productosGuardados = sessionStorage.getItem('cartlist');
    if (productosGuardados) {
        this.cartlist = JSON.parse(productosGuardados);
        console.log("cargado",this.cartlist)
    }
}

/*
function agregarProducto(producto) {
    // Agregar el producto al array
    productos.push(producto);
    // Guardar el array actualizado en sessionStorage
    sessionStorage.setItem('productos', JSON.stringify(productos));
}
*/
  agregarProducto(producto: any) {
    this.cargarProductos()
    this.cartlist.push(producto);
    sessionStorage.setItem('carlist', JSON.stringify(this.cartlist));
    return this.cartlist
  }
}

