import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Comentario} from "../../../../model/comentario.model";
import {ComentarioService} from "../../../../service/comentario.service";

@Component({
  selector: 'app-comentarioListar',
  templateUrl: './comentario-listar.component.html',
  styleUrls: ['./comentario-listar.component.css']
})


export class ComentarioListarComponent implements AfterViewInit {

  comentario: Comentario [] = [];


  displayedColumns: string[] = ['id', 'data','descricao', 'action'];
  dataSource = new MatTableDataSource<Comentario>(this.comentario);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ComentarioService, private router : Router)  { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listar();
  }

  listar(): void {
    this.service.listar().subscribe((resposta) => {
      this.comentario = resposta;
      console.log(this.comentario)
      this.dataSource = new MatTableDataSource<Comentario>(this.comentario);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToSalvar():void{
    this.router.navigate(['comentario/salvar'])
  }

  navigateToDeletar() {
    this.router.navigate(['comentario/delete'])
  }

  navigateToUpdate() {
    this.router.navigate(['comentario/update'])
  }

}



