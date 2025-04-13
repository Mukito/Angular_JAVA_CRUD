
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
})
export class CadastroComponent {
  contatos: any[] = [];
  // Inicializando a lista de contatos e o objeto para o novo contato
  novoContato = {
    nome: '',
    email: '',
    telefone: ''
  };

  editando: boolean = false;
  contatoEditandoIndex: number = -1;
  page: number = 1;

  onSubmit() {
    if (this.editando) {
      this.contatos[this.contatoEditandoIndex] = { ...this.novoContato };
      this.editando = false;
      this.contatoEditandoIndex = -1;
    } else {
      this.contatos.push({ ...this.novoContato });
    }
    this.novoContato = { nome: '', email: '', telefone: '' };
  }

  editarContato(index: number) {
    this.novoContato = { ...this.contatos[index] };
    this.contatoEditandoIndex = index;
    this.editando = true;
  }

  removerContato(index: number) {
    this.contatos.splice(index, 1);
  }

}



