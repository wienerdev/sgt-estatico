import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Responsavel} from "../model/responsavel.model";
import { environment } from 'src/environments/environment';
import {MatSnackBar} from "@angular/material/snack-bar";
import {DropdownModel} from "../model/dropdown.model";

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) {
  }


  encontrarPorId(id:any): Observable<Responsavel> {
    const url = '${this.baseUrl}/api/responsavel/${id}';
    return this.http.get<Responsavel>(url);
  }


  listar(): Observable<Responsavel[]> {
    const url = this.baseUrl + "/api/responsavel";
    return this.http.get<Responsavel[]>(url);
  }

  salvar(responsavel: Responsavel): Observable<Responsavel> {
    const url = this.baseUrl + "/api/responsavel";
    return this.http.post<Responsavel>(url, responsavel);
  }
  update(responsavel: Responsavel, id : any): Observable<Responsavel> {
    const url = this.baseUrl + "/api/responsavel/"+ id;
    return this.http.put<Responsavel>(url, responsavel);
  }

  deletar(id: any):Observable<void> {
    const url =`${this.baseUrl}/api/responsavel/${id}`;
    return this.http.delete<void>(url);
  }

  findAllDropDown():Observable<DropdownModel[]>{
    return this.http.get<DropdownModel[]>(`${this.baseUrl}/api/responsavel/select`);
  }


  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
