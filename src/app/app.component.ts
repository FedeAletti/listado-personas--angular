import { Component, OnInit } from "@angular/core";
import firebase from "@firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  titulo = "Listado de Personas";

  constructor() {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCGtekTlz4noAhDp1I6Tku3DBALHOkJYcY",
      authDomain: "lista-personas--angular.firebaseapp.com",
    });
  }
}
