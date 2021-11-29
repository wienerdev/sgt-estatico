import {Component, OnInit} from "@angular/core";
import {DropdownModel} from "../../../../model/dropdown.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TarefaService} from "../../../../service/tarefa.service";


@Component({
  selector: 'app-tarefa-crud',
  templateUrl: './tarefa-deletar.component.html',
  styleUrls: [ './tarefa-deletar.component.css']
})
export class TarefaDeletarComponent implements OnInit {



  form : FormGroup;

  idParam : null

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private service: TarefaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.idParam = this.actRoute.snapshot.params.id;
  }


  ngOnInit(): void {
    this.form = this.buildForm();
  }


  deletar(): void {
    this.service.deletar(this.idParam).subscribe((resposta) => {
      this.router.navigate(['tarefas'])
      this.service.message('Tarefa excluído com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(['tarefas'])
  }

  buildForm(){
    return this.formBuilder.group({});
  }


}
