import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todoo } from '../models/todoo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodooService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todoo[]> {
    return this.http.get<Todoo[]>(this.baseUrl);
  }
}
