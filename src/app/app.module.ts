import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";

import {HeaderComponent} from "./views/components/template/header/header.component";

import {FooterComponent} from "./views/components/template/footer/footer.component";

import {HomeComponent} from "./views/components/template/home/home.component";

import {NavComponent} from "./views/components/template/nav/nav.component";

import {ResponsavelListarComponent} from "./views/components/responsavel-crud/responsavelListar/responsavel-listar.component";
import {ResponsavelSalvarComponent} from "./views/components/responsavel-crud/responsavelSalvar/responsavel-salvar.component";
import {ResponsavelDeletarComponent} from "./views/components/responsavel-crud/responsavelDeletar/responsavel-deletar.component";
import {ResponsavelAtualizarComponent} from "./views/components/responsavel-crud/responsavelAtualizar/responsavel-atualizar.component";

import {TipoTarefaListarComponent} from "./views/components/tipoTarefa-crud/tipoTarefaListar/tipoTarefa-listar.component";
import {TipoTarefaSalvarComponent} from "./views/components/tipoTarefa-crud/tipoTarefaSalvar/tipoTarefa-salvar.component";
import {TipoTarefaDeletarComponent} from "./views/components/tipoTarefa-crud/tipoTarefaDeletar/tipoTarefa-deletar.component";
import {ComentarioListarComponent} from "./views/components/comentario-crud/comentarioListar/comentario-listar.component";

import {ComentarioDeletarComponent} from "./views/components/comentario-crud/comentarioDeletar/comentario-deletar.component";
import {ComentarioAtualizarComponent} from "./views/components/comentario-crud/comentarioAtualizar/comentario-atualizar.component";
import {ComentarioSalvarComponent} from "./views/components/comentario-crud/comentarioSalvar/comentario-salvar.component";
import {TipoTarefaAtualizarComponent} from "./views/components/tipoTarefa-crud/tipoTarefaAtualizar/tipoTarefa-atualizar.component"

import {TarefaSalvarComponent} from "./views/components/tarefa-crud/tarefaSalvar/tarefa-salvar.component";
import {TarefaListarComponent} from "./views/components/tarefa-crud/tarefaListar/tarefa-listar.component";
import {TarefaDeletarComponent} from "./views/components/tarefa-crud/tarefaDeletar/tarefa-deletar.component";
import {TarefaAtualizarComponent} from "./views/components/tarefa-crud/tarefaAtualizar/tarefa-atualizar.component";

import {HomeDialogComponent} from './views/components/template/home-dialog/home-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';
import {ComentarioData} from "./views/components/comentario-crud/ComentarioData/comentario-data";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,

    ResponsavelListarComponent,
    ResponsavelSalvarComponent,
    ResponsavelAtualizarComponent,
    ResponsavelDeletarComponent,

    ComentarioListarComponent,
    ComentarioSalvarComponent,
    ComentarioAtualizarComponent,
    ComentarioDeletarComponent,

    TarefaListarComponent,
    TarefaSalvarComponent,
    TarefaAtualizarComponent,
    TarefaDeletarComponent,

    TipoTarefaListarComponent,
    TipoTarefaSalvarComponent,
    TipoTarefaAtualizarComponent,
    TipoTarefaDeletarComponent,
    HomeDialogComponent,
    ComentarioData,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
