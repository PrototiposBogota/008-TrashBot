export class Pais {

  idPais: number;
  nombre: string;
  sigla: string;
  codMarcacion: number;
  tipoGrupoTer: string;

  constructor(idPais: number, nombre: string, sigla: string, codMarcacion: number, tipoGrupoTer: string) {
      this.idPais = idPais;
      this.nombre = nombre;
      this.sigla = sigla;
      this.codMarcacion = codMarcacion;
      this.tipoGrupoTer = tipoGrupoTer;
  }

}
