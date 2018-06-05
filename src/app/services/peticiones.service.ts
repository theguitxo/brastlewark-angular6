import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { GlobalsService } from './globals.service'
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { retry, finalize } from 'rxjs/operators';
import { DatosPeticiones } from '../interfaces/datos-peticiones';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private url: string;
  private datos: any = {};
  private error: boolean;

  private datosPeticion: Array<DatosPeticiones> = [];

  constructor(
    private globales: GlobalsService,
    private http: HttpClient) {

  }

  /**
   * iniciarPropiedades
   */
  private iniciarPropiedades(): void {
    this.datos = {};
    this.error = false;
  }

  /**
   * setDatosPeticion
   * @param datos
   */
  setDatosPeticion(datos: Array<DatosPeticiones>) {
    this.datosPeticion = datos;
  }

  /**
   * addDatosPeticion
   * @param item
   */
  addDatosPeticion(item: DatosPeticiones) {
    this.datosPeticion.push(item);
  }

  /**
   * setUrl
   * @param valor
   */
  setUrl(valor: string): void {
    this.url = valor;
  }

  /**
   * getDatos
   */
  getDatos(): any {
    return this.datos;
  }

  /**
   * getError
   */
  getError(): boolean {
    return this.error;
  }

  /**
   * accionesIniciales
   */
  private accionesIniciales(): void {

    this.iniciarPropiedades();

    setTimeout(() => {
      this.globales.cargando = true;
    }, 0);

  }

  /**
   * accionesFinales
   * @param observer
   */
  private accionesFinales(observer: any): void {

    this.datosPeticion = [];

    observer.next(this.datos);
    observer.complete();

    this.globales.cargando = false;

  }

  /**
   * parametros
   */
  private montaParametros(): HttpParams {

    let params = new HttpParams();

    for (let i of this.datosPeticion) {
      params = params.append(i.variable, i.valor);
    }

    return params;

  }

  /**
   * get
   */
  peticion(tipo: string): Observable<any> {

    this.accionesIniciales();

    let request: any;
    let params = this.montaParametros();
    let httpOptions: any;
    let headers = new HttpHeaders();

    if (tipo === 'post') {

      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      httpOptions = {
        headers: headers
      };

    }

    return new Observable(observer => {

      if (tipo === 'post') {
        request = this.http.post(this.url, params, httpOptions);
      } else {
        request = this.http.get(this.url, { params: params });
      }

      request
        .pipe(
          finalize(() => {
            this.accionesFinales(observer);
          })
        )
        .subscribe(
          (data) => {
            this.datos = data;
          },
          (error: HttpErrorResponse) => {
            if (error.error instanceof Error) {
              console.error('An error occurred: ', error.error.message);
            } else {
              console.error('Backend error - ', error.message);
            }
            this.error = true;
          }
        );

    });

  }

}
