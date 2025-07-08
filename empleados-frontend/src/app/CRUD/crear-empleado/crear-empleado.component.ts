import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EmpleadoService } from '../../Servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-empleado.component.html',
  styleUrl: './crear-empleado.component.scss'
})
export class CrearEmpleadoComponent {

  empleadoForm : FormGroup



  constructor (private formBuilder:FormBuilder, private empleadoService: EmpleadoService){
    
  
    this.empleadoForm = this.formBuilder.group({
    nombreEmpleado:[''],
    apellidoEmpleado:[''],
    direccionEmpleado:[''],
    cargoEmpleado:[''],
    dniEmpleado:['']
  });
  }

    limpiar(){
    this.empleadoForm.patchValue({
    nombreEmpleado:'',
    apellidoEmpleado:'',
    direccionEmpleado:'',
    cargoEmpleado:'',
    dniEmpleado:''
    });
  }


  guardar(){
    console.log(this.empleadoForm.value)

    this.empleadoService.postEmpleado(this.empleadoForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.limpiar();
      },
      error: (e) => {
        console.log(e);
      }
    })
  }






}
