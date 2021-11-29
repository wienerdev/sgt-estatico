import {Component, OnInit} from "@angular/core";


import {FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Tarefa} from "../../../../model/tarefa.model";
import {TarefaService} from "../../../../service/tarefa.service";
import {DropdownModel} from "../../../../model/dropdown.model";
import {TipoTarefaService} from "../../../../service/tipoTarefa.service";
import {ResponsavelService} from "../../../../service/responsavel.service";
import validate = WebAssembly.validate;


@Component({
  selector: 'app-tarefa-crud',
  templateUrl: './tarefa-atualizar.component.html',
  styleUrls: [ './tarefa-atualizar.component.css']
})
export class TarefaAtualizarComponent implements OnInit {

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

  idParam : null

  constructor(private actRoute: ActivatedRoute,
              private router: Router,
              private service: TarefaService,
              private tipoTarefaService: TipoTarefaService,
              private tipoResponsaveisService: ResponsavelService){

    this.idParam = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.carregarDados();


  }

  carregarDados(){
    return this.tipoTarefaService.findAllDropDown().subscribe((tiposTarefaData)=> {
      this.tiposTarefa = tiposTarefaData;
      this.tipoResponsaveisService.findAllDropDown().subscribe((resposaveisData) => {
        this.resposaveis = resposaveisData;
        console.log('bunda'+this.idParam);
        this.service.encontrarPorId(this.idParam).subscribe(tarefaData => {
          this.tarefa = tarefaData;
        })
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
      this.service.message('Tarefa atualizada com sucesso!')
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
