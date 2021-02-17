package nl.elsenschede.nl.backend.model;



import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;

import javax.persistence.Entity;
import java.util.List;

@Entity
public class Photo extends Artpiece {
    public Photo() {
    }

    public Photo(String description, String imagePath, List<Theme> themes, List<Color> colors) {
        super(description, imagePath, themes, colors);
    }

    public Photo(int idArtpiece, String description, String imagePath, Portfolio portfolio, List<Theme> themes, List<Color> colors) {
        super(idArtpiece, description, imagePath, portfolio, themes, colors);
    }
}

