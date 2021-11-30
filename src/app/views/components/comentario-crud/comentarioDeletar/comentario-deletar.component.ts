import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DropdownModel} from "../../../../model/dropdown.model";
import {ComentarioService} from "../../../../service/comentario.service";


@Component({
  selector: 'app-comentarioDeletar',
  templateUrl: './comentario-deletar.component.html',
  styleUrls: ['./comentario-deletar.component.css']
})
export class ComentarioDeletarComponent implements OnInit {


  comentarios : DropdownModel[] = [];

  form : FormGroup;


  constructor(
    private router: Router,
    private service: ComentarioService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.findAll();
    this.form = this.buildForm();
  }

  findAll(){
    this.service.findAllDropDown().subscribe((response)=>{
      this.comentarios = response;
    }, (error)=>{
      alert("Erro na requisição.");

    })
  }

  deletar(): void {
    console.log(this.form.controls['id'].value)
    this.service.deletar(this.form.controls['id'].value).subscribe((resposta) => {
      this.router.navigate(['comentario'])
      this.service.message('Comentario excluído com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(['comentario'])
  }

  buildForm(){
    return this.formBuilder.group({
      id: [null,[Validators.required]],
    }, {updateOn: 'change'});
  }


}
