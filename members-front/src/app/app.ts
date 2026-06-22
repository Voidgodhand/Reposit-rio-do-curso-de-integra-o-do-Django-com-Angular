import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet]
})
export class App {
  protected title = 'members-front';

  selected_member = {id: 0, name: '', surname: '', photo: ''};

  members = [
    {name: 'Member 01', id: 1, surname: 'Ciclano', photo: 'http://minhaapp.com/photo1'},
    {name: 'Member 02', id: 2, surname: 'Beltrano', photo: 'http://minhaapp.com/photo2'},
    {name: 'Member 03', id: 3, surname: 'Fulano', photo: 'http://minhaapp.com/photo3'},
  ];

  constructor(private api:ApiService) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe({
      next: data => {
        this.members = data;
      },
      error: error => {
        console.log("Aconteceu um erro", error.message);
      }
    });
  };

  memberClicked = (member: { id: number }) => {
    this.api.getMember(member.id).subscribe({
      next: data => {
        console.log(data);
        this.selected_member = data;
      },
      error: error => {
        console.log("Aconteceu um erro", error.message);
      }
    });
  }
}
