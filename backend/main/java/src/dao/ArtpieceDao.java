package src.dao;

import src.backingbeans.Adaptation;
import src.backingbeans.Color;
import src.backingbeans.Theme;
import src.model.Artpiece;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ArtpieceDao extends CrudRepository<Artpiece, Integer> {
    Boolean existsArtpieceByImageHash(String imageHash);
    List<Artpiece>  findAllByThemes(Theme theme);
    List<Artpiece> findAllByColors(Color color);
    List<Artpiece> findAllByAdaptation(Adaptation adaptation);

}