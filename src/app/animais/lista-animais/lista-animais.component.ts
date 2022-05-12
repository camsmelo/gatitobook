import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais; //vou instanciar no ngOnInit

  constructor(
    private activedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(param => {
      this.animais = this.activedRoute.snapshot.data['animais']
    })
  }
}
