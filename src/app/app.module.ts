import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { BannerComponent } from './Components/banner/banner.component';
import { ViewsComponent } from './Components/views/views.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DetailsComponent } from './Components/details/details.component';
import { CarritoComponent } from './Components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BannerComponent,
    ViewsComponent,
    FooterComponent,
    DetailsComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
