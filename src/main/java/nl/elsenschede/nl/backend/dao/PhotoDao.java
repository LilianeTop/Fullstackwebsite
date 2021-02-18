package nl.elsenschede.nl.backend.dao;


import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.model.Photo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface PhotoDao extends CrudRepository<Photo, Integer> {
    List<Photo> findAllByColors(Color color);

    List<Photo> findAllByThemes(Theme theme);

    List<Photo> findAllByColorsAndThemes(Color color, Theme theme);
}
