import { Component, OnInit } from "@angular/core";
import { GameService } from "../../services/game.service";
import { Game } from "../../interfaces/interfaces";
import Swal from "sweetalert2";

@Component({
  selector: "app-goty",
  templateUrl: "./goty.component.html",
  styleUrls: ["./goty.component.scss"]
})
export class GotyComponent implements OnInit {
  juegos: Game[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getNominados().subscribe(resp => {
      this.juegos = resp;
    });
  }

  public votarJuego(id: string) {
    this.gameService.votarJuego(id).subscribe((resp: any) => {
      console.log(resp);
      if (resp.ok) {
        Swal.fire("Gracias", resp.mensaje, "success");
      } else {
        Swal.fire("Oops", resp.mensaje, "error");
      }
    });
  }
}
