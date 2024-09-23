import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cart } from 'src/app/models/carrito';
import { Product } from 'src/app/models/product';
import { products } from 'src/app/models/producto';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carritoServ: CarritoService) { }

  quan:number=1
  valu!:number
  payment:number=1

  bandera=false
  producto = products
  valCuotas!:number

  tasa=0.078

  vf = 0


  carti = cart
  item: any
  carta: any
  ngOnInit(){
    const name = this.activatedRoute.snapshot.params['name'];

    const usuariosBuscados = this.producto.filter(producto => producto.name === name);

    this.item = usuariosBuscados[0]
/*
    console.log(this.carritoServ.obtenerProductos())

    this.carritoServ.cargarProductos()
    this.carta = this.carritoServ.cargarProductos()
    console.log("Carta", this.carta)
*/
    console.log("item", this.item)
  }

  save(prod:any){

    this.carritoServ.cargarProductos()
    this.carritoServ.agregarProducto(prod)
    this.carritoServ.cargarProductos()
  }

//Empezamos aqui
  addToCart(product: Product) {
    product.quantity=this.quan
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProduct = cart.find((item: Product) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += this.quan; // Incrementa la cantidad si ya está en el carrito
    } else {
      cart.push({ ...product, quantity: this.quan, payment:this.payment, value: this.valu }); // Añade el nuevo producto con cantidad 1
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(cart)
    alert("Agregado")

    this.router.navigate([''])

  }

  calcularPago(tasa: number, nper: number, va: number, vf: number = 0) {
    if(nper > 6){
      const factor = Math.pow(1 + tasa, nper);
    this.valCuotas=((tasa === 0) ? -(va + vf) / nper : -(va * tasa * factor / (factor - 1) + vf / factor)) * -1;
    console.log(this.valCuotas)
    this.cambBand2()
    }
    else{
      alert("Deben ser mas de 6 cuotas")
    }

  }


  ///composicion d multipl clh+

  lista: string[] = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
  seleccionados: string[] = [];

  cambiarBandera(){
    if(this.bandera == false){
      this.bandera = true
    }
  }

  variante!: number


  cancelar(){
    this.valu = this.item.price
  }

  sixPay(){
    this.payment=6
    this.valu= this.item.price/6
  }

  specPay(){
    this.payment= this.variante
    this.valu= this.valCuotas
  }

  bandera2=false

  cambBand2(){
    this.bandera2=true
  }
}

