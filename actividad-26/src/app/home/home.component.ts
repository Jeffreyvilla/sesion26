import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listUsers: Array<any> = [];
  displayedColumns: string[] = ['name', 'username', 'email'];

  constructor( private login: RegistroService) { }

  ngOnInit(): void {
    this.login.traerUsuarios().subscribe((resp) => {
      this.listUsers = resp;
    })
  }

}
