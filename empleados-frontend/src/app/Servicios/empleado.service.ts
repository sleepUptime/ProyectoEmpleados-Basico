import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../Models/empleadoModel';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  readonly API_URL = "http://localhost:8080/empleados"
  
  // Cache simple
  private empleados: Empleado[] | null = null;

  constructor(private http: HttpClient) { 
  }

  getEmpleado(): Observable<Empleado[]> {
    // Si ya tengo los datos, los devuelvo sin hacer nueva llamada
    if (this.empleados) {
      return of(this.empleados);
    }
    
    // Si no tengo datos, hago la llamada y los guardo
    return this.http.get<Empleado[]>(this.API_URL).pipe(
      tap(empleados => this.empleados = empleados)
    );
  }

  postEmpleado(empleado: Empleado) {
    return this.http.post<Empleado>(this.API_URL, empleado).pipe(
      tap(() => this.empleados = null) // Limpio cache para recargar datos
    );
  }

  deleteEmpleado(id: number) {
    return this.http.delete<any>(`${this.API_URL}/${id}`).pipe(
      tap(() => this.empleados = null) // Limpio cache
    );
  }

  getEmpleadoById(id: number) {
    return this.http.get<Empleado>(`${this.API_URL}/${id}`);
  }

  putEmpleado(id: number, empleado: Empleado) {
    return this.http.put<Empleado>(`${this.API_URL}/${id}`, empleado).pipe(
      tap(() => this.empleados = null) // Limpio cache
    );
  }
}