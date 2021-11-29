import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {Router} from "@angular/router";
import {Tarefa} from "../../../../model/tarefa.model";
import {TarefaService} from "../../../../service/tarefa.service";


@Component({
  selector: 'app-tarefaListar',
  templateUrl: './tarefa-listar.component.html',
  styleUrls: ['./tarefa-listar.component.css']
})


export class TarefaListarComponent implements AfterViewInit {

  tarefa: Tarefa [] = [];


  displayedColumns: string[] = ['id', 'titulo','descricao','status','action'];
  dataSource = new MatTableDataSource<Tarefa>(this.tarefa);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: TarefaService, private router : Router)  { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listar();
  }

  listar(): void {
    this.service.listar().subscribe((resposta) => {
      this.tarefa = resposta;
      console.log(this.tarefa)
      this.dataSource = new MatTableDataSource<Tarefa>(this.tarefa);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToSalvar():void{
    this.router.navigate(['tarefas/salvar'])
  }

  navigateToDeletar() {
    this.router.navigate(['tarefas/delete'])
  }

  navigateToUpdate() {
    this.router.navigate(['tarefas/update'])
  }

}



