import { Component, OnInit } from '@angular/core';
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

  constructor(private service: TodooService) { }

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


}
