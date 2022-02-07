import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent {

  results: any[] = [
    {
      "name": "Juego1",
      "value": 20
    },
    {
      "name": "Juego2",
      "value": 24
    },
    {
      "name": "Juego3",
      "value": 30
    },
    {
      "name": "Juego4",
      "value": 10
    }
  ];


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

  constructor() {}

  onSelect() {
    console.log();
  }

}
