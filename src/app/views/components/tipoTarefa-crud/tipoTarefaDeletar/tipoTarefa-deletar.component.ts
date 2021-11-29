import {Component, OnInit} from "@angular/core";
import {DropdownModel} from "../../../../model/dropdown.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TipoTarefaService} from "../../../../service/tipoTarefa.service";


@Component({
    selector: 'app-tipoTarefa-crud',
    templateUrl: './tipoTarefa-deletar.component.html',
    styleUrls: [ './tipoTarefa-deletar.component.css']
})
export class TipoTarefaDeletarComponent implements OnInit {

  tipoTarefas : DropdownModel[] = [];

  form : FormGroup;


  constructor(
    private router: Router,
    private service: TipoTarefaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.findAll();
    this.form = this.buildForm();
  }

  findAll(){
    this.service.findAllDropDown().subscribe((response)=>{
      alert("Buscou todos.");
      this.tipoTarefas = response;
    }, (error)=>{
      alert("Erro na requisição.");

    })
  }

  deletar(): void {
    console.log(this.form.controls['id'].value)
    this.service.deletar(this.form.controls['id'].value).subscribe((resposta) => {
      this.router.navigate(['tipotarefas'])
      this.service.message('Tipo de Tarefa excluído com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(['tipotarefas'])
  }

  buildForm(){
    return this.formBuilder.group({
      id: [null,[Validators.required]],
    }, {updateOn: 'change'});
  }


}
