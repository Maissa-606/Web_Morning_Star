
package Aereolinea.MorningStar.controller;

import Aereolinea.MorningStar.modelo.DatosPersona;
import Aereolinea.MorningStar.service.DatosPersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Maissa
 */
@Controller
public class DatosPersonaController 
{
    @Autowired
    private DatosPersonaService servicio;
    
    @RequestMapping("/")
    public String index (Model model)
    {
        model.addAttribute("lista", servicio.getLista());
        return "index";
    }
    
    @GetMapping("/crear")
    public String abrirFormularioCrearPersona(Model model)
    {
        model.addAttribute("persona", new DatosPersona());
        return "Aereolinea";
    }
    
    @GetMapping("/actualizar/{id}")
    public String abrirFormularioActualizarPersona(@PathVariable Long id,Model model)
    {
        model.addAttribute("persona", servicio.getEntidad(id));
        return "Compra";
    }
    
    @PostMapping("/guardar")
    public String guardarFormularioPersona(DatosPersona persona,Model model){
        servicio.guardar(persona);
        return "redirect:/";
    }

  
    
    @GetMapping("/eliminar/{id}")
    public String eliminarPersona(@PathVariable Long id,Model model){
        servicio.eliminar(id);
        return "redirect:/";
    }
   

    @RequestMapping("/abrirAereolinea")
    public String abrirAereo (Model model)
    {
        return "Aereolinea";
    }
    
    @RequestMapping("/abrirIndex")
    public String abrirIndex (Model model)
    {
        return "index";
    }
    @RequestMapping("/abrirAcercaDe")
    public String abrirAC (Model model)
    {
        return "AcercaDe";
    }
    @RequestMapping("/abrirQuienesSomos")
    public String abrirQS (Model model)
    {
        return "QuienesSomos";
    }
    @RequestMapping("/abrirCompra")
    public String abrirC (Model model)
    {
        return "Compra";
    }

}
