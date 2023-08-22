import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todoo } from 'src/app/models/todoo';
import { TodooService } from 'src/app/services/todoo.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit{
  
  listfinished: Todoo[] = [];

  constructor(private service: TodooService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(todoo => {
        if(todoo.finalizado) {
          this.listfinished.push(todoo);
        }
      })
    })
  }

  Voltar(): void {
    this.router.navigate([''])

  }
}
