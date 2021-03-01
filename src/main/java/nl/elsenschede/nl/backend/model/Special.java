package nl.elsenschede.nl.backend.model;


import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.List;


@Entity
public class Special extends Artpiece {
    @Column
    Adaptation adaptation;

    public Special() {
    }

    public Special(Adaptation adaptation) {
        this.adaptation = adaptation;
    }


    public Special(String description, String imagePath,  List<Theme> themes, List<Color> colors, Adaptation adaptation) {
        super(description, imagePath, themes, colors);
        this.adaptation = adaptation;
    }

    public Special(int idArtpiece, String description, String imagePath, List<Theme> themes, List<Color> colors, Adaptation adaptation) {
        super(idArtpiece, description, imagePath, themes, colors);
        this.adaptation = adaptation;
    }

    public Adaptation getAdaptation() {
        return this.adaptation;
    }

    public void setAdaptation(Adaptation adaptation) {
        this.adaptation = adaptation;
    }

}