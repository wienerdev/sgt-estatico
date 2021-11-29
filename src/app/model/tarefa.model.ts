import {Responsavel} from "./responsavel.model";
import {TipoTarefa} from "./tipoTarefa.model";

export class Tarefa {
  id?: any;
  titulo: string;
  descricao: string;
  status: string;
  responsavel:Responsavel;
  tipoTarefa:TipoTarefa;
}
