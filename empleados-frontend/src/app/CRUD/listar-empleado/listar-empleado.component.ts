import { Component, OnInit, Signal } from '@angular/core';
import { EmpleadoService } from '../../Servicios/empleado.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';
import { Empleado } from '../../Models/empleadoModel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-empleado',
  imports: [RouterLink, RouterOutlet, ],
  templateUrl: './listar-empleado.component.html',
  styleUrl: './listar-empleado.component.scss'
})
export class ListarEMpleadoComponent implements OnInit{

  empleados : Empleado [] = [];

  constructor(public empleadoService : EmpleadoService){}

  ngOnInit(): void {
      this.getEmpleados()
  }

  getEmpleados(){
    this.empleadoService.getEmpleado().subscribe({
      next: (data) => {
        this.empleados =data;
        this.getEmpleados();
      },
      error: (e) => {
        console.log("Error al obtener datos"+e);
      }
    })
  }

  deleteEmpleado(id: number){
    this.empleadoService.deleteEmpleado(id).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }


  
}
