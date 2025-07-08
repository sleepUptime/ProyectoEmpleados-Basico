import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../../Servicios/empleado.service';
import { Empleado } from '../../Models/empleadoModel';
import { ListarEMpleadoComponent } from '../listar-empleado/listar-empleado.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  imports: [FormsModule],
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

  constructor(public empleadoService : EmpleadoService, private  route: ActivatedRoute, private router:Router){}

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

  actualizarEmpleado(){
    this.empleadoService.putEmpleado(this.empleado.idEmpleado, this.empleado).subscribe({
      next:()=>{
        console.log("empleado actualizado");
        this.router.navigate(['/read']);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
