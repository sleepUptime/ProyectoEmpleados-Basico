import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../../Servicios/empleado.service';
import { Empleado } from '../../Models/empleadoModel';

@Component({
  selector: 'app-actualizar-empleado',
  imports: [],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.scss'
})
export class ActualizarEmpleadoComponent {

  empleado : Empleado = {
    idEmpleado: 0,
    nombreEmpleado : '',
    apellidoEmpleado : '',
    direccionEmpleado: '',
    cargoEmpleado: '',
    dniEmpleado: 0
  }

  constructor(public empleadoService : EmpleadoService, private  route: ActivatedRoute){}

    ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
      if(id){
        this.empleadoService.getEmpleadoById(id).subscribe({
          next: (data) =>{
            this.empleado = data;
          },
          error: (err)=>{
            console.log(err)
          }
        })
      }
  }

}
