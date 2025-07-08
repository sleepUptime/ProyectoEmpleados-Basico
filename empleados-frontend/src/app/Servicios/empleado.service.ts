  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Empleado } from '../Models/empleadoModel';

  @Injectable({
    providedIn: 'root'
  })
  export class EmpleadoService {
    readonly  API_URL = "http://localhost:8080/empleados"

    

    constructor(private http :HttpClient) { 
    }

    getEmpleado(){
      return this.http.get<Empleado[]>(this.API_URL)
    }


    postEmpleado(empleado : Empleado){
      return this.http.post<Empleado>(this.API_URL, empleado)
    }

    deleteEmpleado(id: number){
      return this.http.delete<any>(`${this.API_URL}/${id}`)
    }

    getEmpleadoById(id: number){
      return this.http.get<Empleado>(`${this.API_URL}/${id}`);
    }

    putEmpleado(id: number, empleado:Empleado){
      return this.http.put<Empleado>(`${this.API_URL}/${id}`, empleado)
    }
  }
