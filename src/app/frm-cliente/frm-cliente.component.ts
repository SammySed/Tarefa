import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';


@Component({
  selector: 'app-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrls: ['./frm-cliente.component.css']
})
export class FrmClienteComponent implements OnInit {

  constructor(private route: Router) { }

  model: Cliente = new Cliente();


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model);
  }

}
