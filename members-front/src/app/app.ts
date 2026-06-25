import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet]
})
export class App {
  protected title = 'members-front';

  selected_member = {id: -1, name: '', surname: '', phone: '', email: '', address:''};

  members = [
    { id: -1, name: '', surname: '', phone: '', email: '', address: ''},
  ];

  constructor(private api:ApiService, private router  : Router) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe({
      next: data => {
        this.members = data;
      },
      error: error => {
        console.log("Aconteceu um erro ao carregar os membros: ", error.message);
      }
    });
  };

  memberClicked = (member: { id: number }) => {
    this.router.navigate(['member-detail', member.id]);
  }

  newMember() {
    this.router.navigate(['new-member']);
  }
}
