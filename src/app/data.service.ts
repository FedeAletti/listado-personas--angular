import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  cargarPersonas() {
    return this.httpClient.get<Persona[]>(
      "https://lista-personas--angular-default-rtdb.firebaseio.com/datos.json"
    );
  }

  // Guardar personas
  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        "https://lista-personas--angular-default-rtdb.firebaseio.com/datos.json",
        personas
      )
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    url =
      "https://lista-personas--angular-default-rtdb.firebaseio.com/datos/" +
      index +
      ".json";
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log("modificado"),
      (error) => console.log(error)
    );
  }

  eliminarPersona(index: number) {
    let url: string;
    url =
      "https://lista-personas--angular-default-rtdb.firebaseio.com/datos/" +
      index +
      ".json";
    this.httpClient.delete(url).subscribe(
      (response) => console.log("eliminado"),
      (error) => console.log(error)
    );
  }
}
