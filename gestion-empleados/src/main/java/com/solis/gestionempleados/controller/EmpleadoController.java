package com.solis.gestionempleados.controller;

import com.solis.gestionempleados.model.EmpleadosModel;
import com.solis.gestionempleados.service.EmpleadoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/empleados")
public class EmpleadoController {

    @Autowired
    EmpleadoService empleadoService;

    @GetMapping
    public List<EmpleadosModel> empleadosModels(){
        return this.empleadoService.getEmpleados();
    }

    @GetMapping(path = "/{id}")
    public Optional<EmpleadosModel> getById(@PathVariable Long id){
        return this.empleadoService.getById(id);
    }

    @PostMapping
    public EmpleadosModel saveEmpleados(@Valid @RequestBody EmpleadosModel empleado){
        return this.empleadoService.saveEmpleados(empleado);
    }

    @PutMapping(path = "/{id}")
    public EmpleadosModel updateEmpleado(@Valid @RequestBody EmpleadosModel request, @PathVariable Long id){
        return this.empleadoService.updateEmpleado(request, id);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteEmpleado(@PathVariable Long id){
        Boolean ok = empleadoService.deleteById(id);
        if (ok){
            return "El empleado se elimino correctamente";
        }else{
            throw new IllegalArgumentException("El empleado con el ID:"+id+" no se pudo eliminar correctamente");
        }
    }
}
