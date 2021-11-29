import {Component, OnInit} from "@angular/core";

import {FormControl, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {Comentario} from "../../../../model/comentario.model";
import {ComentarioService} from "../../../../service/comentario.service";


@Component({
  selector: 'app-comentarioSalvar',
  templateUrl: './comentario-salvar.component.html',
  styleUrls: ['./comentario-salvar.component.css']
})
export class ComentarioSalvarComponent implements OnInit {

  comentario: Comentario = {
    id: '',
    data: '',
    descricao: ''
  }

  id = new FormControl('', [Validators.minLength(1)]);
  data = new FormControl('', [Validators.minLength(4)]);
  descricao = new FormControl('', [Validators.minLength(4)]);
  constructor(private router: Router, private service: ComentarioService) {
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['comentario'])
  }


  salvar(): void {
    this.service.salvar(this.comentario).subscribe((res) => {
      this.router.navigate(['comentario'])
      this.service.message('Comentario criado com sucesso!')
    }, erro => {
      if (erro.error.error.match('já cadastrado')) {
        this.service.message(erro.error.error)
      }
    })
  }

  errorValidData() {
    if (this.data.invalid) {
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
}
