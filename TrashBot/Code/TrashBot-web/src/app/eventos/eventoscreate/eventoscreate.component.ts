import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Evento } from '../evento';
import { EventoService } from '../evento.service'

@Component({
  selector: 'app-eventoscreate',
  templateUrl: './eventoscreate.component.html',
  styleUrls: ['./eventoscreate.component.scss'],
  providers: [EventoService]
})
export class EventoscreateComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  private evento: Evento = new Evento();
  private error: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventoService: EventoService) 
  { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      lugar: ['', Validators.required],
      descripcion : ['', Validators.required],
      fecha : ['', Validators.required]
    });

  }


  onSubmit(){
    debugger;
    this.evento.nombre = this.form.controls['nombre'].value;
    this.evento.descripcion = this.form.controls['descripcion'].value;
    this.evento.lugar = this.form.controls['lugar'].value;
    this.evento.fecha = this.form.controls['fecha'].value;

    this.eventoService.saveEvento(this.evento).subscribe(
      res => {
        console.log("Evento creado");
        this.onReload();
      }, error => {
        this.error = error;
        console.log("error login", error);
      }
    );

  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  
  onReload() {
    debugger;
    this.router.navigate(['inicio']);
    location.reload();
  }

}
