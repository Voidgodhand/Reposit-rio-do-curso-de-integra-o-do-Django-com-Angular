import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api';
import { FormsModule } from '@angular/forms';
import { App } from '../app';

@Component({
  selector: 'app-members-detail',
  imports: [FormsModule],
  templateUrl: './members-detail.html',
  styleUrl: './members-detail.css',
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
  private api:ApiService,
  private router  : Router,
  private app: App) { }
  selected_member = {id: 0, name: '', surname: '', phone: '', photo: ''};
  selected_id: number = 0;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '0', 10);
      this.selected_id = id;
      this.loadMember(id);
    });
  }

  loadMember(id: number) {
    if (id) {
      this.api.getMember(+id).subscribe({
      next: data => {
        this.selected_member = data;
      },
      error: error => {
        console.log("Aconteceu um erro ao carregar o membro: ", error.message);
      }
    });
    }
    else {
      console.log("Não foi encontrado membro com o id fornecido");
    }
  }

  update() {
    if (this.selected_member) {
      this.api.updateMember(this.selected_member).subscribe({
        next: data => {
          this.selected_member = data;
        },
        error: error => {
          console.log("Aconteceu um erro ao atualizar o membro: ", error.message);
        }
      });
    }
    else {
      console.log("Nenhum membro selecionado para atualizar");
    }
  }

  delete() {
    if (this.selected_member) {
      this.api.deleteMember(this.selected_id).subscribe({
        next: (data: any) => {
          if (this.app.members.length > 0) {
            let index: number = -1;
            this.app.members.forEach((e, i) => {
              if (e.id === this.selected_id)
                index = i;
            });
            this.app.members.splice(index, 1);
          }
          else {
            console.log("Não existem membros cadastrados");
          }
        },
        error: (error: any) => {
          console.log("Aconteceu um erro ao excluir o membro: ", error.message);
        }
      });
    }
    else {
      console.log("Nenhum membro selecionado para excluir");
    }
  }
}
