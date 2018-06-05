import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Gnome } from '../interfaces/gnome';
import { PeticionesService } from './peticiones.service';
import { GlobalsService } from './globals.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class GnomesService {

  listaGnomes: Array<Gnome> = Array();
  listaNombresId: Array<number> = Array();
  totalGnomes: number;

  private _pagina: number = 0;
  private _porPagina: number = 10;
  private _totalRegistros: number = 0;

  constructor(
      private utils:UtilsService,
      private globales:GlobalsService,
      private peticiones:PeticionesService) {

  }

  public set pagina(valor: number) {
    this._pagina = valor;
  }

  public get pagina():number {
    return this._pagina;
  }

  public set porPagina(valor: number) {
    this._porPagina = valor;
  }

  public get porPagina(): number {
    return this._porPagina;
  }

  public set totalRegistros(valor: number) {
    this._totalRegistros = valor;
  }

  public get totalRegistros(): number {
    return this._totalRegistros;
  }

  /**
   * cargarLista: función encargada de cargar la lista de gnomos alojada en el servidor
   */
  cargarLista():void {

    this.globales.errorDatos = false;
    this.globales.noDataLoaded = false;

    this.peticiones.setUrl('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');

    this.peticiones.peticion('GET')
      .subscribe(
        data => {
          console.log(this.utils.fechaHora() + 'Los datos se han recuperado correctamente');

          if(!this.utils.checkArrayHasData(data.Brastlewark)) {

            // la carga de datos no ha devuelto resultados
            console.log(this.utils.fechaHora() + 'La lista no contiene resultados');
            this.globales.errorDatos = true;
            this.globales.noDataLoaded = true;

          } else {

            for (let gnomo of data.Brastlewark) {
              // se llena la lista de gnomos que maneja el servicio y otra lista para
              // asociar los nombres de los gnomos con su id, se usará para la busqueda de amigos
              this.listaGnomes.push(gnomo);
              let idx: string = this.utils.eliminaEspaciosCadena(gnomo.name);
              this.listaNombresId[idx] = gnomo.id;
            }

            this.totalGnomes = this.listaGnomes.length;
            this.globales.primeraBusqueda = true;

          }
        },
        error => {
          console.log(this.utils.fechaHora() + 'Se ha producido un error recuperando los datos');
          this.globales.errorDatos = true;
        },
        () => {
          console.log(this.utils.fechaHora() + 'Petición lista gnomos finalizada');
        }
      )

  }

  /**
   * buscarGnomes: buscar gnomos en la lista obtenida del servidor
   * @param cadena : cadena de texto que se usará como criterio de busqueda
   * @returns: un observable al que suscribirse
   */
  buscarGnomes(cadena: string = ''): Observable<any> {

    this._totalRegistros = 0;

    return new Observable(observer => {

      let resultado: Array<Gnome> = Array();

      let inicio: number = this._pagina * this._porPagina;
      let fin: number = inicio + (this._porPagina);

      if(!cadena) {

        // si no se recibe ninguna cadena filtrar se devuelve toda la lista
        this._totalRegistros = this.listaGnomes.length;
        resultado = this.listaGnomes.slice(inicio, fin);

      } else {

        // se filtra por la cadena recibida
        let busqueda: Array<Gnome> = this.listaGnomes.filter(item => {
          return RegExp(cadena, 'i').exec(item.name);
        });
        this._totalRegistros = busqueda.length;
        resultado = busqueda.slice(inicio, fin);

      }

      observer.next(resultado);
      observer.complete();

    });

  }

  /**
   * gnomoPorNombre: devuelve los datos de un gnomo buscandolo a partir de su nombre
   * @param idx : el indice de texto de la tabla que relaciona nombres e ids
   * @returns: el gnomo relacionado con el id de texto recibido
   */
  gnomoPorNombre(idx: string): Gnome {
    let idxNumber: number = this.listaNombresId[idx];
    return this.listaGnomes[idxNumber];
  }

  /**
   * idGnomoPorNombre: devuelve el id de un gnomo buscandolo a partir de su nombre
   * @param idx : el indice de texto de la tabla que relaciona nombres e ids
   * @returns: el id del gnomo relacionado con el id de texto recibido
   */
  idGnomoPorNombre(idx: string): number {
    return this.listaNombresId[idx];
  }

  /**
   * gnomoPorId: devuelve la información de un gnomo, buscandolo a partir de su id
   * @param idx : el indice numérico del gnomo que se ha de consultar
   * @returns: el gnomo relacionado con el id recibido
   */
  gnomoPorId(idx: number): Gnome {
    return this.listaGnomes[idx];
  }

}
