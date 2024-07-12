import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { PagoService } from '../../services/pago.service';
import { NovedadService } from '../../services/novedad.service';
import { Pago } from '../../models/pago';
import { AlquilerService } from '../../services/alquiler.service';
import { Alquiler } from '../../models/alquiler';
import { Local } from '../../models/local';
import { Novedad } from '../../models/novedad';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estadistica',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule, FormsModule],
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit{
  seleccion:number = 0; 
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Gráfico de Líneas de Pagos'
    },
    subtitle: {
      text: 'Monto de Pagos por Mes'
    },
    xAxis: {
      categories: [] // Se llenará dinámicamente con nombres de meses
    },
    yAxis: {
      title: {
        text: 'Monto'
      }
    },
    series: [{
      type: 'line',
      name: 'Monto de Pagos',
      data: [] // Se llenará dinámicamente con datos de pagos
    }]
  };

  Highcharts2: typeof Highcharts = Highcharts;
  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Cantidad de Alquileres por Local'
    },
    xAxis: {
      categories: [], // Aquí se llenarán dinámicamente los nombres de los locales
      title: {
        text: 'Locales'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Cantidad de Alquileres'
      }
    },
    series: [{
      type: 'bar', // Asegúrate de definir el tipo de gráfico aquí
      name: 'Alquileres',
      data: [] // Se llenará dinámicamente con la cantidad de alquileres por local
    }]
  };

  Highcharts3: typeof Highcharts = Highcharts;
  chartOptions3: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Porcentaje de Novedades'
    },
    series: [{
      type: 'pie',
      name: 'Porcentaje',
      data: [] // Se llenará dinámicamente con los datos de novedades
    }]
  };

  constructor(
    private pagoService: PagoService, 
    private alquilerService: AlquilerService,
    private novedadService: NovedadService
  ) { }

  ngOnInit(): void {
    this.obtenerPagos(2024);
    this.obtenerAlquileresPorLocal();
    this.obtenerNovedades();
  }

  obtenerPagos(year:number): void {
    this.pagoService.getPagos().subscribe(
      (data: Pago[]) => {
        let seriesData: Array<number> = [];
        let categories: string[] = [];
        // Procesar datos de pagos para Highcharts
        data.forEach(pago => {
          let comparacion:number = new Date(pago.fecha).getFullYear();
          if(pago.estado == "Pagado" && comparacion === year){
            let month = new Date(pago.fecha).getMonth(); // Obtener el número de mes (0-11)
            let amount = pago.monto;
            seriesData.push(amount);
            categories.push(this.getNombreMes(month)); // Agregar nombre del mes a las categorías del eje X
          }
        });

        // Actualizar chartOptions con los datos obtenidos
        this.chartOptions = {
          title: {
            text: 'Gráfico de Líneas de Pagos'
          },
          subtitle: {
            text: 'Monto de Pagos por Mes'
          },
          xAxis: {
            categories: categories
          },
          yAxis: {
            title: {
              text: 'Monto'
            }
          },
          series: [{
            type: 'line',
            name: 'Monto de Pagos',
            data: seriesData
          }]
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerAlquileresPorLocal(): void {
    this.alquilerService.getAlquileres().subscribe(
      (data: Alquiler[]) => {
        const locales: Local[] = []; // Lista de locales con sus alquileres
        const alquileresPorLocal: Map<string, number> = new Map();

        // Agrupar alquileres por local y contar la cantidad de alquileres por local
        data.forEach(alquiler => {
          const localNombre = alquiler.local.nombre;
          if (alquileresPorLocal.has(localNombre)) {
            alquileresPorLocal.set(localNombre, alquileresPorLocal.get(localNombre)! + 1);
          } else {
            alquileresPorLocal.set(localNombre, 1);
            locales.push(alquiler.local); // Agregar el local si es la primera vez que se encuentra
          }
        });

        // Preparar datos para Highcharts
        const categories = locales.map(local => local.nombre);
        const dataSeries = categories.map(localNombre => alquileresPorLocal.get(localNombre)!);

        // Actualizar chartOptions2 con los datos obtenidos
        this.chartOptions2.xAxis! = {
          categories: categories,
        };
        this.chartOptions2.series = [{
          type: 'bar',
          name: 'Alquileres',
          data: dataSeries
        }];

        // Actualizar el gráfico
        if (this.chartOptions2 && this.chartOptions2.series) {
          this.Highcharts2.chart('chartContainer2', this.chartOptions2);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerNovedades(): void {
    this.novedadService.getNovedades().subscribe(
      (data: Novedad[]) => {
        let realizadoCount = 0;
        let pendienteCount = 0;

        // Contar las novedades por estado
        data.forEach(novedad => {
          if (novedad.estado === 'Realizado') {
            realizadoCount++;
          } else if (novedad.estado === 'Pendiente') {
            pendienteCount++;
          }
        });

        const totalNovedades = realizadoCount + pendienteCount;
        const realizadoPercentage = (realizadoCount / totalNovedades) * 100;
        const pendientePercentage = (pendienteCount / totalNovedades) * 100;

        // Actualizar chartOptions3 con los datos obtenidos
        this.chartOptions3.series = [{
          type: 'pie',
          name: 'Porcentaje',
          data: [
            { name: 'Realizado', y: realizadoPercentage },
            { name: 'Pendiente', y: pendientePercentage }
          ]
        }];

        // Actualizar el gráfico
        if (this.chartOptions3 && this.chartOptions3.series) {
          this.Highcharts3.chart('chartContainer3', this.chartOptions3);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getNombreMes(month: number): string {
    const meses = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];
    return meses[month];
  }

}