import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todoo } from 'src/app/models/todoo';
import { TodooService } from 'src/app/services/todoo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  closed = 0;

  list: Todoo[] = [];
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
        } else {
          this.list.push(todoo);
        }
      })
      this.closed = this.listfinished.length
    })
  }

  delete(id: any):void {
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null) {
        this.service.message('Task deletada com sucesso!');
        this.list = this.list.filter(todoo => todoo.id !== id);
      }
    })
  }

  navegarParaFinalizados(): void {
    this.router.navigate(['finalizados'])
  }
}
