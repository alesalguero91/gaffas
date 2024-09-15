import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  private productos: any[] = [];

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos;
  }

  eliminarProducto(producto: any) {
    this.productos = this.productos.filter(p => p !== producto);
  }
}
