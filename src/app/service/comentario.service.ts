import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Comentario} from "../model/comentario.model";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../environments/environment";
import {DropdownModel} from "../model/dropdown.model";


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) {
  }

  encontrarPorId(id:any): Observable<Comentario> {
    const url = '${this.baseUrl}/api/comentario/${id}';
    return this.http.get<Comentario>(url);
  }


  listar(): Observable<Comentario[]> {
    const url = this.baseUrl + "/api/comentario";
    return this.http.get<Comentario[]>(url);
  }

  salvar(comentario: Comentario): Observable<Comentario> {
    const url = this.baseUrl + "/api/comentario";
    return this.http.post<Comentario>(url, comentario);
  }
  update(comentario: Comentario, id : any): Observable<Comentario> {
    const url = this.baseUrl + "/api/comentario/"+ id;
    return this.http.put<Comentario>(url, comentario);
  }

  deletar(id: any):Observable<void> {
    const url =`${this.baseUrl}/api/comentario/${id}`;
    return this.http.delete<void>(url);
  }

  findAllDropDown():Observable<DropdownModel[]>{
    return this.http.get<DropdownModel[]>(`${this.baseUrl}/api/comentario/select`);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
