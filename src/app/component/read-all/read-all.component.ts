import { Component, OnInit } from '@angular/core';
import { Todoo } from 'src/app/models/todoo';
import { TodooService } from 'src/app/services/todoo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Todoo[] = []

  constructor(private service: TodooService) { }

  ngOnInit(): void {
    this.findAll();
      
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }

}
