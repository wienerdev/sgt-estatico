import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DropdownModel} from "../model/dropdown.model";
import {TipoTarefa} from "../model/tipoTarefa.model";
import {Tarefa} from "../model/tarefa.model";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {


  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) {
  }


  encontrarPorId(id: any): Observable<Tarefa> {
    const url =  this.baseUrl +"/api/tarefas/" + id;
    return this.http.get<Tarefa>(url);
  }


  listar(): Observable<Tarefa[]> {
    const url = this.baseUrl + "/api/tarefas";
    return this.http.get<Tarefa[]>(url);
  }

  salvar(tarefa: Tarefa): Observable<Tarefa> {
    const url = this.baseUrl + "/api/tarefas";
    return this.http.post<Tarefa>(url, tarefa);
  }

  update(tarefa: Tarefa, id: any): Observable<Tarefa> {
    const url = this.baseUrl + "/api/tarefas/" + id;
    return this.http.put<Tarefa>(url, tarefa);
  }

  deletar(id: any): Observable<void> {
    const url = `${this.baseUrl}/api/tarefas/${id}`;
    return this.http.delete<void>(url);
  }

  findAllDropDown(): Observable<DropdownModel[]> {
    return this.http.get<DropdownModel[]>(`${this.baseUrl}/api/tarefas/select`);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}

