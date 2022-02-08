import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent {

  @Input() results: any[] = [];
  // results: any[] = [
  //   {
  //     "name": "Juego1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego2",
  //     "value": 24
  //   },
  //   {
  //     "name": "Juego3",
  //     "value": 30
  //   },
  //   {
  //     "name": "Juego4",
  //     "value": 10
  //   }
  // ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // interval;

  constructor() {

    // this.interval = setInterval( () => {

    //   const newResults = [...this.results];

    //   for( let i in newResults ) {
    //     newResults[0].value = Math.round(Math.random()*500);
    //   }
    //   this.results = [...newResults];
    //   }, 1500);
  }
  
  onSelect() {
    console.log();
  }
}
