package com.solis.gestionempleados.service;

import com.solis.gestionempleados.model.EmpleadosModel;
import com.solis.gestionempleados.repository.EmpleadoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class EmpleadoService {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(EmpleadoService.class);


    @Autowired
    EmpleadoRepository empleadoRepository;

    //METODO GET
    public List<EmpleadosModel> getEmpleados(){
        try{
            return (List<EmpleadosModel>) empleadoRepository.findAll();
        } catch (Exception e) {
            throw new IllegalArgumentException("No se encontro la Lista de Empleados"+e);
        }
    }

    //METODO GET BY ID
    public Optional<EmpleadosModel> getById(Long id){
        Optional<EmpleadosModel> empleado=empleadoRepository.findById(id);
        if (empleado.isPresent()){
            return empleado;
        }else{
            throw new IllegalArgumentException("No se encontro al empleado con el "+ id);
        }
    }

    //METODO POST
    public EmpleadosModel saveEmpleados(EmpleadosModel empleado){
        try{
            return empleadoRepository.save(empleado);
        } catch (Exception e) {
            throw new IllegalArgumentException("No se pudo Guardar al Empleado correctamente "+e);
        }

    }

    //METODO PUT
    public EmpleadosModel updateEmpleado(EmpleadosModel request, Long id){
        EmpleadosModel empleados=empleadoRepository.findById(id).
                orElseThrow(()->new IllegalArgumentException("No se encontro el empleado con el id"+id));

        try{
            empleados.setNombreEmpleado(request.getNombreEmpleado());
            empleados.setApellidoEmpleado(request.getApellidoEmpleado());
            empleados.setDireccionEmpleado(request.getDireccionEmpleado());
            empleados.setCargoEmpleado(request.getCargoEmpleado());
            empleados.setDniEmpleado(request.getDniEmpleado());

            empleadoRepository.save(empleados);

            return empleados;
        } catch (Exception e) {
            throw new IllegalArgumentException("No se puedo Actualizar Correctamente al empleado con el ID: "+id);
        }
    }

    //METODO DELETE
    public Boolean deleteById(Long id){
        try {
            empleadoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            log.error("No se pudo eliminar al empleado");
            return false;
        }
    }
}
