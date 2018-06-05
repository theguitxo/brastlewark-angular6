import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  /**
   * cargando: permite indicar si se estan cargando datos
   * errorDatos: indica si se ha producido un error al cargar datos
   * noDataLoaded: indica si se han obtenido datos al cargar la lista de gnomos
   * primeraBusqueda: indica si ya se ha finalizado la primera petición de listado de gnomos al servidor
   */
  public cargando: boolean;
  public errorDatos: boolean;
  public noDataLoaded: boolean;
  public primeraBusqueda: boolean;

  constructor() { }

}
