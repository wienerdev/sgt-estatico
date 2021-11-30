import {Component, OnInit} from "@angular/core";


import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Tarefa} from "../../../../model/tarefa.model";
import {TarefaService} from "../../../../service/tarefa.service";
import {DropdownModel} from "../../../../model/dropdown.model";
import {TipoTarefaService} from "../../../../service/tipoTarefa.service";
import {ResponsavelService} from "../../../../service/responsavel.service";
import validate = WebAssembly.validate;


@Component({
  selector: 'app-tarefaSalvar',
  templateUrl: './tarefa-salvar.component.html',
  styleUrls: [ './tarefa-salvar.component.css']
})
export class TarefaSalvarComponent implements OnInit {

  tiposTarefa : DropdownModel[] = [];
  resposaveis : DropdownModel[] = [];

  tarefa: Tarefa = {
    id: '',
    descricao: '',
    status:'',
    titulo: '',
    tipoTarefa :  {
      id:'',
      descricao:''

    } ,
    responsavel:  {
      id:'',
      setor:''
    }
  }

  id = new FormControl('', [Validators.minLength(1)]);
  descricao = new FormControl('', [Validators.minLength(4),Validators.max(20)]);
  status = new FormControl('', [Validators.minLength(4),Validators.max(20)]);
  titulo = new FormControl('', [Validators.minLength(4),Validators.max(20)]);
  tipoTarefa = new FormControl('',[Validators.minLength(4),Validators.max(20)]);
  responsavel = new FormControl('', [Validators.minLength(4),Validators.max(20)]);

  constructor(private router: Router, private service: TarefaService, private tipoTarefaService: TipoTarefaService, private tipoResponsaveisService: ResponsavelService){
  }

  ngOnInit(): void {
    this.findAll();


  }

  findAll(){
    this.tipoTarefaService.findAllDropDown().subscribe((response)=> {
      this.tipoResponsaveisService.findAllDropDown().subscribe((responsavel) => {
        this.tiposTarefa = response;
        this.resposaveis = responsavel;
      }, (error) => {
        alert("Erro na requisição.");
      })
    })
  }


  cancel(): void {
    this.router.navigate(['tarefas'])
  }


  salvar(): void {


    this.service.salvar(this.tarefa).subscribe((res) => {
      this.router.navigate(['tarefas'])
      this.service.message('Tarefa criada com sucesso!')
    }, erro => {
      if (erro.error.error.match('já cadastrada')) {
        this.service.message(erro.error.error)
      }
    })
  }

  errorValidTitulo() {
    if (this.titulo.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }
  errorValidDescricao() {
    if (this.descricao.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }
  errorValidStatus() {
    if (this.status.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

}
