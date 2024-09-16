import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/models/producto';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  producto = products

  item: any
  ngOnInit(){
    const name = this.activatedRoute.snapshot.params['name'];

    const usuariosBuscados = this.producto.filter(producto => producto.name === name);

    this.item = usuariosBuscados
    console.log(this.item)
  }
}
