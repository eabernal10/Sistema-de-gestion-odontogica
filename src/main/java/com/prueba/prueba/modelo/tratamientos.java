package com.prueba.prueba.modelo;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class tratamientos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idtratamiento")
    private int idtratamiento;

    @Column(name = "fecha")
    private Date fecha;

    @Column(name = "tratamiento")
    private String tratamiento;

    @Column(name = "diagnostico")
    private String diagnostico;

    @Column(name = "idpaciente")
    private int idpaciente;

    public int getIdpaciente() {
        return idpaciente;
    }
    public void setIdpaciente(int idpaciente) {
        this.idpaciente = idpaciente;
    }
    public int getIdtipo() {
        return idtipo;
    }
    public void setIdtipo(int idtipo) {
        this.idtipo = idtipo;
    }
    @Column(name = "idtipo")
    private int idtipo;
    /*@ManyToOne
    @JoinColumn(name = "idpaciente", nullable = false)
    private pacientes paciente;

    @ManyToOne
    @JoinColumn(name = "idtipo", nullable = false)
    private tipostratamiento tipoTratamiento;*/

    public tratamientos(Date fecha, String tratamiento, String diagnostico) {
        this.fecha = fecha;
        this.tratamiento = tratamiento;
        this.diagnostico = diagnostico;
    }
    public tratamientos() {
        
    }

    

    public int getIdtratamiento() {
        return idtratamiento;
    }
    public void setIdtratamiento(int idtratamiento) {
        this.idtratamiento = idtratamiento;
    }
    public Date getFecha() {
        return fecha;
    }
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    public String getTratamiento() {
        return tratamiento;
    }
    public void setTratamiento(String tratamiento) {
        this.tratamiento = tratamiento;
    }
    public String getDiagnostico() {
        return diagnostico;
    }
    public void setDiagnostico(String diagnostico) {
        this.diagnostico = diagnostico;
    }
  /*  public pacientes getPaciente() {
        return paciente;
    }
    public void setPaciente(pacientes paciente) {
        this.paciente = paciente;
    }
    public tipostratamiento getTipoTratamiento() {
        return tipoTratamiento;
    }
    public void setTipoTratamiento(tipostratamiento tipoTratamiento) {
        this.tipoTratamiento = tipoTratamiento;
    }*/
    @Override
    public String toString() {
        return "tratamientos [idtratamiento=" + idtratamiento + ", fecha=" + fecha + ", tratamiento=" + tratamiento
                + ", diagnostico=" + diagnostico + "]";
    }
    
    

}
