import {Component, OnInit} from "@angular/core";

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DropdownModel} from "../../../../model/dropdown.model";
import {Comentario} from "../../../../model/comentario.model";
import {ComentarioService} from "../../../../service/comentario.service";


@Component({
  selector: 'app-comenntarioAtualizar',
  templateUrl: './comentario-atualizar.component.html',
  styleUrls: ['./comentario-atualizar.component.css']
})
export class ComentarioAtualizarComponent implements OnInit {


  comentarios: DropdownModel[] = [];

  form: FormGroup;
  comentario: Comentario = {
    descricao: "",
    id: '',
    data: ''
  }

  id = new FormControl(1, [Validators.minLength(1)]);
  //id: number = 13;


  descricao = new FormControl('', [Validators.minLength(4)]);

  idParam : null

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private service: ComentarioService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.carregarDados();
   // this.findAll();
   // this.form = this.buildForm();
  }
  carregarDados(){
    return this.service.findAllDropDown().subscribe((comentarioData)=> {
      this.comentarios = comentarioData;
              
      }, (error) => {
        alert("Erro na requisição.");
      })
    
  }
 

  cancel(): void {
    this.router.navigate(['comentario'])
  }

  buildForm() {
    return this.formBuilder.group({
      id: [null, [Validators.required]],
    }, {updateOn: 'change'});
  }

  update(): void {
    // console.log(this.id.value);

    console.log(this['id'].value)
    this.service.update(this.comentario, this['id'].value).subscribe((resposta) => {
      this.router.navigate(['comentario'])
      this.service.message('Comentario atualizado com sucesso!')
    })
  }



  errorValidDescricao() {
    if (this.descricao.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

}

