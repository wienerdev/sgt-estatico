import {Component, OnInit} from "@angular/core";
import {Responsavel} from "../../../../model/responsavel.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ResponsavelService} from "../../../../service/responsavel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DropdownModel} from "../../../../model/dropdown.model";


@Component({
  selector: 'app-reponsavelAtualizar',
  templateUrl: './responsavel-atualizar.component.html',
  styleUrls: ['./responsavel-atualizar.component.css']
})
export class ResponsavelAtualizarComponent implements OnInit {


  responsaveis: DropdownModel[] = [];

  form: FormGroup;
  responsavel: Responsavel = {
    id: '',
    setor: ''
  }

  id = new FormControl(1, [Validators.minLength(1)]);
  //id: number = 13;
  setor = new FormControl('', [Validators.minLength(4)]);

  idParam : null
  ResponsavelService: any;

  constructor(private actRoute: ActivatedRoute,
    private router: Router,
    private service: ResponsavelService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {

    //this.findAll();
    //this.form = this.buildForm();

    this.carregarDados();
  }

 // findAll() {
  //  this.service.findAllDropDown().subscribe((response) => {
  //    alert("Buscou todos.");
  ///    console.log(response);
  ///    this.responsaveis = response;
  //    console.log(this.responsaveis);
  //  }, (error) => {
    //  alert("Erro na requisição.");

 //   })
//  }

carregarDados(){
  return this.ResponsavelService.findAllDropDown().subscribe((resposaveisData) => {
      this.responsaveis = resposaveisData;
       this.service.encontrarPorId(this.idParam).subscribe(responsaveisData => {
        this.responsavel = responsaveisData;
      })
    }, (error) => {
      alert("Erro na requisição.");
    })
  
}



  cancel(): void {
    this.router.navigate(['responsavel'])
  }

 // buildForm() {
   // return this.formBuilder.group({
     // id: [null, [Validators.required]],
   // }, {updateOn: 'change'});
 // }

  update(): void {
  // console.log(this.id.value);

    console.log(this['id'].value)
    this.service.update(this.responsavel, this['id'].value).subscribe((resposta) => {
      this.router.navigate(['responsavel'])
      this.service.message('Responsavel atualizado com sucesso!')
    })
  }


  errorValidSetor() {
    if (this.setor.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

}
