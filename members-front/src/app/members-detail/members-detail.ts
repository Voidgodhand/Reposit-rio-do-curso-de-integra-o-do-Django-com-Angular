import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api';

@Component({
  selector: 'app-members-detail',
  imports: [],
  templateUrl: './members-detail.html',
  styleUrl: './members-detail.css',
})
export class MembersDetailComponent {

  constructor(private route: ActivatedRoute, private api:ApiService) { }
  selected_member = {name: '', surname: ''};

  ngOnInit() {
    this.loadMember();
  }

  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.api.getMember(+id).subscribe({
      next: data => {
        console.log(data);
        this.selected_member = data;
      },
      error: error => {
        console.log("Aconteceu um erro", error.message);
      }
    });
    }
    else {
      console.log("ID não encontrado na rota");
    }
  }

}
