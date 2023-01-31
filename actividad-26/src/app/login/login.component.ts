import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  submitted = false;
  resultado = '';
  listUsers: any;
  constructor(private formBuilder: FormBuilder,
    private login: RegistroService,
    private router: Router) {
    this.inicializarFormulario()
  }
  ngOnInit(): void {
    this.login.traerUsuarios().subscribe((resp) => {
      this.listUsers = resp;
      console.log(resp, 'resp')
    })
  }


  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.submitted = true;
    const username = this.listUsers.filter((users: any) => users.username === this.formulario.controls.username.value);
    const password = this.listUsers.filter((users: any) => users.email === this.formulario.controls.password.value);

    if (username.length > 0 && password.length > 0) {
      localStorage.setItem('logged', 'true')
      this.router.navigate(["/home"]);
    }
  }

}
