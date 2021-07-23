
package Aereolinea.MorningStar.service;

import Aereolinea.MorningStar.modelo.DatosPersona;
import Aereolinea.MorningStar.repositorio.DatosPersonaRepositorio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatosPersonaService 
{
    @Autowired
    private DatosPersonaRepositorio repositorio;
    
    public void guardar(DatosPersona persona){
        repositorio.save(persona);
    }
    
      public void eliminar(Long id)
      {
        repositorio.deleteById(id);
      }
      
       public Optional<DatosPersona> getEntidad(Long id){
        return repositorio.findById(id);
    }
    
    public List<DatosPersona> getLista(){
        return (List<DatosPersona>) repositorio.findAll();
    }
    
}
