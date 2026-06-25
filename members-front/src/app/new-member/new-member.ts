import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { FormsModule } from '@angular/forms';
import { App } from '../app';

@Component({
  selector: 'app-new-member',
  imports: [FormsModule],
  templateUrl: './new-member.html',
  styleUrl: './new-member.css',
})
export class NewMemberComponent implements OnInit {

  member = { name: '', surname: '', phone: '' , email: '', address: ''}; 

  constructor(private api:ApiService,
  private app: App
  ) {}
  
  ngOnInit() { }

  save() {
    this.api.saveNewMember(this.member).subscribe({
      next: (data: any) => {
        this.app.members.push(data);
      },
      error: (error: any) => {
        console.log("Aconteceu um erro ao cadastrar o novo membro: ", error.message);
      }
    });
  }
}
