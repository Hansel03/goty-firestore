import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Game } from "../interfaces/interfaces";
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GameService {
  private juegos: Game[] = [];
  constructor(private http: HttpClient) {}

  public getNominados() {
    if (this.juegos.length > 0) {
      return of(this.juegos);
    }
    return this.http
      .get<Game[]>(`${environment.url}/api/goty`)
      .pipe(tap(response => (this.juegos = response)));
  }

  public votarJuego(id: string) {
    return this.http.post(`${environment.url}/api/goty/${id}`, {}).pipe(
      catchError(err => {
        return of(err.error);
      })
    );
  }
}
