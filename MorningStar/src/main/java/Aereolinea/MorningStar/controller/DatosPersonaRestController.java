/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Aereolinea.MorningStar.controller;

import Aereolinea.MorningStar.modelo.DatosPersona;
import Aereolinea.MorningStar.service.DatosPersonaService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ws/personas/")
public class DatosPersonaRestController 
{
     @Autowired
    private DatosPersonaService servicio;
    
    @GetMapping("/")
    public List<DatosPersona> getListaPersonas(){
        return servicio.getLista();
    }
    
    @GetMapping("/{id}")
    public Optional<DatosPersona> getPersonaById(@PathVariable Long id){
        return servicio.getEntidad(id);
    }
    
    @PostMapping("/guardar")
    public String guardar(@RequestBody DatosPersona persona){
        servicio.guardar(persona);
        return "elemento Guardado";
    }
    
    @GetMapping("/eliminar/{id}")
    public String eliminar(@PathVariable Long id){
        servicio.eliminar(id);
        return "elemento eliminado";
    }
    
}
