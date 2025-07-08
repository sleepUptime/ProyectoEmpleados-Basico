import { Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './CRUD/actualizar-empleado/actualizar-empleado.component';
import { CrearEmpleadoComponent } from './CRUD/crear-empleado/crear-empleado.component';
import { EliminarEmpleadoComponent } from './CRUD/eliminar-empleado/eliminar-empleado.component';
import { ListarEMpleadoComponent } from './CRUD/listar-empleado/listar-empleado.component';



export const routes: Routes = [
    {
        path:"create",
        component:CrearEmpleadoComponent
    },
    {
        path:"read",
        component:ListarEMpleadoComponent,
    },
    {
        path:'editar/:id',
        component:ActualizarEmpleadoComponent
    },
    {
        path:"update",
        component:ActualizarEmpleadoComponent
    },
    {
        path:"delete",
        component:EliminarEmpleadoComponent
    }
];
