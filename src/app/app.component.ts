import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluguel } from 'src/model/AluguelDto';
import { Linke } from 'src/model/Linke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  ngOnInit(): void {
    this.get_products();

    this.alugueis;

  }
  alugueis : Aluguel = [];
  links: Linke[] = [{"nomeLink":"Google","address":"www.google.com.br"},{"nomeLink":"Youtube","address":"www.youtube.com.br"},
                    {"nomeLink":"Hotmail","address":"www.hotmail.com.br"},{"nomeLink":"Kabum","address":"www.kabum.com.br"}];

  constructor(private httpClient: HttpClient) {}

    get_products() :void {
    this.httpClient.get('http://localhost:8090/emprestimos').subscribe(x => {
      this.alugueis = x  
    },y => console.log(y));
  }
}
