import { Component, OnInit } from '@angular/core';

import { Evento } from 'src/app/eventos/evento';
import { EventoService } from 'src/app/eventos/evento.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [EventoService]
})
export class HomeComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  public eventos: Evento[] = [];
  private error: any;

  ngOnInit() {
    this.getEventos();
  }

  getEventos(){
    this.eventoService.findAll().subscribe(
      res => {
        this.eventos = res;
      }, error => {
        this.error = error;
        console.log("error al traer los eventos getEventos()", error);
      });
  }
}