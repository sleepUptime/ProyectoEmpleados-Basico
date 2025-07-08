package com.solis.gestionempleados.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class EmpleadosModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEmpleado;

    @Column(nullable = false)
    @NotBlank(message = "El Campo Nombre no puede estar Vacio")
    private String nombreEmpleado;

    @Column(nullable = false)
    @NotBlank(message = "El Campo Apellido no puede estar Vacio")
    private String apellidoEmpleado;

    @Column(nullable = false)
    @NotBlank(message = "El Campo Direccion no puede estar Vacio")
    private String direccionEmpleado;

    @Column(nullable = false)
    @NotBlank(message = "El Campo Cargo no puede estar Vacio")
    private String cargoEmpleado;

    @Column(nullable = false)
    @Size(min = 8, max = 8, message = "El DNI debe tener 8 dígitos")
    @NotBlank(message = "El Campo DNI no puede estar Vacio")
    private String dniEmpleado;

    public Long getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(Long idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public String getNombreEmpleado() {
        return nombreEmpleado;
    }

    public void setNombreEmpleado(String nombreEmpleado) {
        this.nombreEmpleado = nombreEmpleado;
    }

    public String getApellidoEmpleado() {
        return apellidoEmpleado;
    }

    public void setApellidoEmpleado(String apellidoEmpleado) {
        this.apellidoEmpleado = apellidoEmpleado;
    }

    public String getDireccionEmpleado() {
        return direccionEmpleado;
    }

    public void setDireccionEmpleado(String direccionEmpleado) {
        this.direccionEmpleado = direccionEmpleado;
    }

    public String getCargoEmpleado() {
        return cargoEmpleado;
    }

    public void setCargoEmpleado(String cargoEmpleado) {
        this.cargoEmpleado = cargoEmpleado;
    }

    public String getDniEmpleado() {
        return dniEmpleado;
    }

    public void setDniEmpleado(String dniEmpleado) {
        this.dniEmpleado = dniEmpleado;
    }
}
