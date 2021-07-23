
package Aereolinea.MorningStar.modelo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity

public class DatosPersona 
{
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private int niños;
    private int adultos;
    private int jovenes;
    private String origen;
    private String destino;
    private String fechaSalida;
    private String fechaRegreso;
    private String totalP;
    
    
    
}
