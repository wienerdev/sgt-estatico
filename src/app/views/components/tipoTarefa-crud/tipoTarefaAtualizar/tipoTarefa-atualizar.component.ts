import {Component, OnInit} from "@angular/core";
import {TipoTarefa} from '../../../../model/tipoTarefa.model';
import {TipoTarefaService} from "../../../../service/tipoTarefa.service";
import {DropdownModel} from "../../../../model/dropdown.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-tipoTarefa-crud',
    templateUrl: './tipoTarefa-atualizar.component.html',
    styleUrls: [ './tipoTarefa-atualizar.component.css']
})
export class TipoTarefaAtualizarComponent implements OnInit {

  tipoTarefas: DropdownModel[] = [];

  form: FormGroup;
  tipoTarefa: TipoTarefa = {
    id: '',
    descricao: ''
  }

  id = new FormControl(1, [Validators.minLength(1)]);
  //id: number = 13;
  descricao = new FormControl('', [Validators.minLength(4)]);

  constructor(
    private router: Router,
    private service: TipoTarefaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.findAll();
    this.form = this.buildForm();
  }

  findAll() {
    this.service.findAllDropDown().subscribe((response) => {
      console.log(response);
      this.tipoTarefas = response;
      console.log(this.tipoTarefas);
    }, (error) => {
      alert("Erro na requisição.");

    })
  }

  cancel(): void {
    this.router.navigate(['tipotarefas'])
  }

  buildForm() {
    return this.formBuilder.group({
      id: [null, [Validators.required]],
    }, {updateOn: 'change'});
  }

  update(): void {
    // console.log(this.id.value);

    console.log(this['id'].value)
    this.service.update(this.tipoTarefa, this['id'].value).subscribe((resposta) => {
      this.router.navigate(['tipotarefas'])
      this.service.message('Responsavel atualizado com sucesso!')
    })
  }


  errorValidDescricao() {
    if (this.descricao.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

}
