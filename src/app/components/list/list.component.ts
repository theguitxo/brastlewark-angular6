import { Component, OnInit, DoCheck } from '@angular/core';
import { GlobalsService } from '../../services/globals.service';
import { GnomesService } from '../../services/gnomes.service';
import { UtilsService } from '../../services/utils.service';
import { Gnome } from '../../interfaces/gnome';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, DoCheck {

  cadenaBuscar: string = '';
  listado: Array<Gnome> = Array();

  // valores para la paginación
  pagina: number;
  totalRegistros: number;
  numeroPaginas: number;
  paginacionElipse: boolean;
  paginacionInicioFin: boolean;

  // valores para la tabla de resultados
  columnasListado: Array<any>;
  tituloTabla: string;
  campoOrden: string;
  accionesListado: Array<string>;

  // valores para la caja de busqueda
  placeHolder: string;
  mostrarReset: boolean;

  // valores para la ficha de gnomo
  mostrarFichaGnomo: boolean;
  gnomoFicha: Gnome;

  constructor(private globales:GlobalsService,
              private gnomes:GnomesService,
              private utils:UtilsService,
              private scrollToService:ScrollToService) {
  }

  ngOnInit() {

    this.iniciarValores();
    this.iniciarValoresPaginacion();
    this.iniciarValoresTabla();
    this.iniciarValoresBusqueda();
    this.iniciarValoresFichaGnomo();

  }

  ngDoCheck() {

    if(this.globales.primeraBusqueda) {
      this.globales.primeraBusqueda = false;
      this.buscar();
    }

  }

  /**
   * iniciarValoresFichaGnomo: inicia los valores necesarios para el manejo de la ficha de datos de gnomos
   */
  private iniciarValoresFichaGnomo(): void {
    this.mostrarFichaGnomo = false;
  }

  /**
   * iniciarValoresBusqueda: inicia los valores necesarios para la caja de busqueda
   */
  private iniciarValoresBusqueda(): void {
    this.placeHolder = 'Enter text to search';
    this.mostrarReset = false;
  }

  /**
   * iniciarValoresTabla: inicia los valores necesarios para mostrar la tabla con el listado de gnomos
   */
  private iniciarValoresTabla(): void {

    this.columnasListado = [
      {
        titulo: 'Photo',
        campo: 'thumbnail',
        alineacion: 'centro',
        tipo: 'icono'
      },
      {
        titulo: 'Name',
        campo: 'name',
        alineacion: 'izquierda',
        tipo: 'texto'
      }
    ];
    this.tituloTabla = '';
    this.campoOrden = 'name';
    this.accionesListado = ['Show'];
  }

  /**
   * iniciarValoresPaginacion: inicia los valores necesario para el componente de paginación del listado
   */
  private iniciarValoresPaginacion(): void {

    this.numeroPaginas = 5;
    this.paginacionElipse = false;
    this.paginacionInicioFin = true;

  }

  /**
   * iniciarValores: inicia los valores de paginación necesarios para ejecutar una busqueda
   */
  private iniciarValores(): void {

    this.pagina = 1;
    this.totalRegistros = 0;

  }

  /**
   * iniciarBusqueda: se ejecuta al pulsar el botón 'Buscar', ejecuta una nueva busqueda de gnomos
   * @param texto: texto que se usará como criterio de busqueda
   */
  iniciarBusqueda(texto: string): void {

    this.mostrarFichaGnomo = false;
    this.gnomoFicha = null;

    this.cadenaBuscar = texto;
    this.mostrarReset = false;

    this.iniciarValores();
    this.buscar();

  }

  /**
   * buscar: ejecuta una busqueda de gnomos a partir de texto introducido en la caja de busqueda
   * usando para la tarea el servicio de gnomos.
   */
  buscar():void {

    // se indica, mediante variable global, que se estan cargando datos
    this.globales.cargando = true;

    // se inicializa el array para contener el listado
    this.listado = Array();

    // se llama al método buscarGnomes del servicio
    this.gnomes.buscarGnomes(this.cadenaBuscar)
      .subscribe(
        data => {

          console.log(this.utils.fechaHora() + 'Busqueda de gnomos');
          console.log(this.utils.fechaHora() + 'Total gnomos encontrados: ' + this.gnomes.totalRegistros);
          console.log(data);

          if(this.gnomes.totalRegistros) {
            // existen registros, se comprueba si el número de gnomos de la busqueda es diferente
            // que el total de gnomos (si estan todos no es necesario resetear), para mostrar el botón de reset.
            if (this.gnomes.totalGnomes != this.gnomes.totalRegistros) {
              this.mostrarReset = true;
            }
            this.totalRegistros = this.gnomes.totalRegistros;
            this.listado = data;
          } else {
            // en caso de no recibir resultados se muestra el botón de reset para poder volver a mostrar todo el listado
            this.mostrarReset = true;
          }

        },
        error => {
          console.log('Error buscando gnomos');
        },
        () => {
          // al final el proceso se indica que ya no se estan cargando datos para esconder el gráfico de carga
          this.globales.cargando = false;
        }
      );

  };

  /**
   * mostrarError: función para determinar si se muestra o no la caja de mensajes de error
   * @returns: true, en caso de que exista error y ha de mostrar la caja, false en caso contrario
   */
  mostrarError(): boolean {
    return (!this.globales.cargando && this.globales.errorDatos);
  }

  /**
   * mensajeError: devuelve un texto de error según el tipo de error que se haya producido
   * @returns: un mensaje de error
   */
  mensajeError(): string {

    let mensaje: string = '';

    if(this.globales.errorDatos) {
      mensaje = 'An error was produced when loading data';
    } else if(this.globales.noDataLoaded) {
      mensaje = 'Data not found';
    } else if(!this.totalRegistros) {
      mensaje = 'Data not found according to search criteria';
    }

    return mensaje;

  }

  /**
   * cambiaPagina: navega hacia una página determinada del listado de gnomos
   * actualiza el número de pagina del servicio de gnomos y ejecuta una busqueda
   * @param pagina pagina del listado que se ha de mostrar
   */
  public cambiaPagina(pagina: number): void {
    this.gnomes.pagina = (pagina - 1);
    this.buscar();
  }

  /**
   * mostrarNoResultados: indica si se ha de mostrar o no el
   * mensaje indicando que no se han obtenido resultados en la busqueda
   * @returns: true en caso que no existan registros en el resultado de la busqueda, false en caso contrario
   */
  mostrarNoResultados(): boolean {
    return (!this.globales.cargando && !this.totalRegistros);
  }

  /**
   * mostrarFicha: abre una ficha que muestra la información de un gnomo
   * @param gnomo: un objeto de tipo Gnome con la información de un gnomo
   */
  mostrarFicha(gnomo: Gnome): void {

    this.gnomoFicha = gnomo;
    this.mostrarFichaGnomo = true;

    // retrasamos un poco (un clico de digest) el movimiento del scroll
    // para que la ficha ya exista en el DOM y el movimiento sea correcto
    // si no, al no 'existir' todavía la ficha, el movimiento se ve brusco.
    setTimeout(() => {
      const config: ScrollToConfigOptions = {
        target: 'fichaGnomo'
      };

      this.scrollToService.scrollTo(config);
    }, 0);

  }

  /**
   * cerrarFicha: cierra la ficha de datos de gnomo
   */
  cerrarFicha(): void {
    this.gnomoFicha = null;
    this.mostrarFichaGnomo = false;
  }

}
