import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PaisService} from '../pais.service';
import {Pais} from '../pais';
import {ActivatedRoute, Router} from '@angular/router';
import { ObjetctError } from '../../objectError';

@Component({
    selector: 'app-pais-create',
    templateUrl: './pais-create.component.html',
    styleUrls: ['./pais-create.component.css'],
    providers: [PaisService]
})
export class PaisCreateComponent implements OnInit {

    idPais: number;
    pais: Pais;

    paisForm: FormGroup;
    private sub: any;
    private objectError: ObjetctError = new ObjetctError();

    msgNombreRequerido: string;
    msgSiglaRequerido: string;
    msgSiglaLength: string;
    msgSiglaTexto: string;
    msgCodigoRequerido: string;
    msgCodigoLength: string;
    msgCodigoNumerico: string;
    msgTipoGrupoRequerido: string;
    objetoResponse: any;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private paisService: PaisService) {
            localStorage.setItem('TitleScreen', 'Paises');
            localStorage.setItem('SubTitleScreen', 'Creación Paises');

    }

    ngOnInit() {
        this.initValidateForm();
        this.sub = this.route.params.subscribe(params => {
            this.idPais = params['idPais'];
        });

        this.paisForm = new FormGroup({
            nombre: new FormControl('', Validators.required),
            sigla: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')])),
            codMarcacion: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2), Validators.pattern('^[0-9]+$')])),
            tipoGrupoTer: new FormControl('', Validators.required)
        });

        if (this.idPais) {
            this.paisService.findById(this.idPais).subscribe(
                pais => {
                    this.idPais = pais.idPais;
                    this.paisForm.patchValue({
                        nombre: pais.nombre,
                        sigla: pais.sigla,
                        codMarcacion: pais.codMarcacion,
                        tipoGrupoTer: pais.tipoGrupoTer,
                    });
                }, error => {
                    console.log(error);
                }, () => {
                    this.jqueryFunctionEdit();
                 }
            );
        }
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onSubmit() {

        if (this.paisForm.valid) {

            if (this.idPais) {
                let pais: Pais = new Pais(this.idPais,
                    this.paisForm.controls['nombre'].value,
                    this.paisForm.controls['sigla'].value,
                    this.paisForm.controls['codMarcacion'].value,
                    this.paisForm.controls['tipoGrupoTer'].value);
                    pais.nombre = pais.nombre.toUpperCase();
                this.paisService.updatePais(pais).subscribe(res => {
                    debugger;
                  this.objetoResponse = res;
                }
                , error => this.objectError = error);
            } else {
                let pais: Pais = new Pais(null,
                    this.paisForm.controls['nombre'].value,
                    this.paisForm.controls['sigla'].value,
                    this.paisForm.controls['codMarcacion'].value,
                    this.paisForm.controls['tipoGrupoTer'].value);
                pais.nombre = pais.nombre.toUpperCase();
                this.paisService.savePais(pais).subscribe(res => {

                  this.objetoResponse = res;

                }, error => {
                this.objectError = error;
                    console.log(error);
                });
            }
        }
    }

    onReload() {
      this.router.navigate(['/pais/pais-list']);
      location.reload();
    }
    redirectPaisPage() {
        this.router.navigate(['/pais/pais-list']);

    }
    initValidateForm() {
        this.msgNombreRequerido = "nombre requerido";
        this.msgSiglaRequerido = "sigla requerida";
        this.msgSiglaLength = "Longitud debe ser entre 2 y 3 caracteres";
        this.msgSiglaTexto = "No pueden existir números";
        this.msgCodigoRequerido = "codigo requerido";
        this.msgCodigoLength = "Longitud debe ser 2 caracteres";
        this.msgCodigoNumerico = "No pueden existir caracteres no numéricos";
        this.msgTipoGrupoRequerido = "tipo de grupo requerido";
    }

    jqueryFunctionEdit() {
        $('document').ready(function () {
            $('.einput').each(function(){
                     if ($(this).val() != ''){
                       jQuery(this).siblings('label').addClass('floter');
                       jQuery(this).addClass('ebord');
                     }
             });
         });
    }
}
