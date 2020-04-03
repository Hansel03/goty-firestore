import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-grafico-barra-horizontal",
  templateUrl: "./grafico-barra-horizontal.component.html",
  styleUrls: ["./grafico-barra-horizontal.component.scss"]
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {
  result = [
    {
      name: "Juego 1",
      value: 20
    },
    {
      name: "Juego 2",
      value: 25
    },
    {
      name: "Juego 3",
      value: 30
    },
    {
      name: "Juego 4",
      value: 40
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Juegos";
  showYAxisLabel = true;
  yAxisLabel = "Votos";

  colorScheme = "nightLights";

  // intervalo;

  constructor() {
    // this.intervalo = setInterval(() => {
    //   const newResults = [...this.result];
    //   // tslint:disable-next-line: forin
    //   for (const i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.result = [...newResults];
    // }, 1500);
  }

  ngOnInit(): void {}

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }
}
