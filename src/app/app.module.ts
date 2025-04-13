import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Para usar ngModel no formulário
import { NgxPaginationModule } from 'ngx-pagination';  // Para paginação

import { AppComponent } from './app.component';  // Componente principal
import { CadastroComponent } from './cadastro/cadastro.component';  // Importando o CadastroComponent

@NgModule({
  declarations: [
      // Declarando o CadastroComponent aqui
  ],
  imports: [
    BrowserModule,     // Para rodar a aplicação no navegador
    FormsModule,       // Para usar ngModel nos formulários
    NgxPaginationModule,  // Para habilitar a paginação
    AppComponent,      // Componente principal
    CadastroComponent

  ],
  providers: [],
  bootstrap: [AppComponent]  // Componente inicial da aplicação
})
export class AppModule { }
