import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Iharry } from '../interfaces/Iharry';
const http = '';
@Injectable({
  providedIn: 'root'
})
export class PotterService {
  //Injecting HttpClient is a dependacny
  //HttpClient is a class that allows us to preform Http requests (GET PST)
  http = inject(HttpClient)

  getWizzard() {
    return this.http.get<Iharry>(`https://potterhead-api.vercel.app/`)
  }
}



