package nl.elsenschede.nl.backend.dao;



import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.model.Artpiece;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ArtpieceDao extends CrudRepository<Artpiece, Integer> {
    List<Artpiece>  findAllByThemes(Theme theme);
    List<Artpiece> findAllByColors(Color color);
    List<Artpiece> findAllByAdaptation(Adaptation adaptation);

}