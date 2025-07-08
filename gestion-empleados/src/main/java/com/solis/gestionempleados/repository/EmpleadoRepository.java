package com.solis.gestionempleados.repository;

import com.solis.gestionempleados.model.EmpleadosModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository<EmpleadosModel, Long> {
}
