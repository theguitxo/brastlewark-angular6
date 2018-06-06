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
import { ListComponent } from './components/list/list.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GnomeInfoComponent } from './components/gnome-info/gnome-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MessageBoxComponent,
    OrderByPipe,
    ListTableComponent,
    SearchBoxComponent,
    GnomeInfoComponent
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
