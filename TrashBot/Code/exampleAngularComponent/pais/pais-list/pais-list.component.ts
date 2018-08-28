import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais';
import { Router } from '@angular/router';
import { ObjetctError } from '../../objectError';
import {Facultad} from '../../facultades/facultad';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'],
  providers: [PaisService]
})
export class PaisListComponent implements OnInit {

  private paises: Pais[];
  private pais: Pais;
  public nombrePais: string= "";
  private objectError: ObjetctError = new ObjetctError();
  public facultades: Facultad[] = [];
  private mapConfigXPerfil = new Map();
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router,
      private paisService: PaisService) {

        localStorage.setItem('TitleScreen', 'Pais');
        localStorage.setItem('SubTitleScreen', 'Lista de Paises');
       }

  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10
      };
      this.confXFacultad();
      this.getAllPaises();
  }

  confXFacultad() {
    this.facultades = JSON.parse(localStorage.getItem('facultadesLS'));

        for (let conf of this.facultades) {
            if (conf.path) {
                this.mapConfigXPerfil.set(conf.path, true);
            }
        }

   }

  getAllPaises() {
      this.paisService.findAll().subscribe(
          paises => {
              debugger;
              this.paises = paises;
              this.paises.sort(function(a, b) {
                    var nameA = a.nombre.toUpperCase();
                    var nameB = b.nombre.toUpperCase();
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    return 0;
                });
                this.dtTrigger.next();
          },
          err => {
              console.log(err);
          }

      );

  }

  redirectNewPaisPage() {
      this.router.navigate(['/pais-create']);
      location.reload();
  }

  editPaisPage(pais: Pais) {
      if (pais) {
            this.router.navigate(['/pais/edit', pais.idPais]);
      }
  }

  openDialog(pais: Pais){
      this.pais=pais;
      this.nombrePais=pais.nombre;
  }


  deletePais() {
      if (this.pais) {
          this.paisService.deletePaisById(this.pais.idPais).subscribe(
              res => {
                  this.getAllPaises();
                  this.router.navigate(['/pais/pais-list']);
                  location.reload();
                  console.log(res);
              },
              error => this.objectError = error
          );
          //location.reload();
      }
  }

  getNombrePais(): string{
      return this.nombrePais;
  }

  editFestivoXPais(pais: Pais) {
      if (pais) {
            this.router.navigate(['/festivo/festivo-create', pais.idPais]);
      }
  }

}
