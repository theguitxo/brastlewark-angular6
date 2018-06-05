import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULOS EXTERNOS
import { LoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// SERVICIOS
import { GlobalsService } from './services/globals.service';
import { UtilsService } from './services/utils.service';

// LOCALE PARA ES
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

// PIPES
import { OrderByPipe } from './pipes/order.pipe';

// COMPONENTES
import { ListadoComponent } from './components/listado/listado.component';
import { CajaMensajesComponent } from './components/caja-mensajes/caja-mensajes.component';
import { TablaListadoComponent } from './components/tabla-listado/tabla-listado.component';
import { CajaBusquedaComponent } from './components/caja-busqueda/caja-busqueda.component';
import { FichaGnomoComponent } from './components/ficha-gnomo/ficha-gnomo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    CajaMensajesComponent,
    OrderByPipe,
    TablaListadoComponent,
    CajaBusquedaComponent,
    FichaGnomoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoadingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    GlobalsService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
