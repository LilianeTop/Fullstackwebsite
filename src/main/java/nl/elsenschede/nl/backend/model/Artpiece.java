package nl.elsenschede.nl.backend.model;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Artpiece {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idArtpiece;
    @Column
    private Adaptation adaptation;
    @Column
    private String description;
    @Column
    private String imagePath;
    @ElementCollection
    private List<Theme> themes = new ArrayList();
    @ElementCollection
    private List<Color> colors = new ArrayList();

    public Artpiece() {
    }

    public Artpiece(Adaptation adaptation, String description, String imagePath, List<Theme> themes, List<Color> colors) {
        this(0, adaptation, description, imagePath, themes, colors);
    }

    public Artpiece(int idArtpiece, Adaptation adaptation, String description, String imagePath, List<Theme> themes, List<Color> colors) {
        this.idArtpiece = idArtpiece;
        this.adaptation = adaptation;
        this.description = description;
        this.imagePath = imagePath;
        this.themes = themes;
        this.colors = colors;
    }

    public int getIdArtpiece() {
        return idArtpiece;
    }

    public void setIdArtpiece(int idArtpiece) {
        this.idArtpiece = idArtpiece;
    }

    public Adaptation getAdaptation() {
        return adaptation;
    }

    public void setAdaptation(Adaptation adaptation) {
        this.adaptation = adaptation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public List<Theme> getThemes() {
        return themes;
    }

    public void setThemes(List<Theme> themes) {
        this.themes = themes;
    }

    public List<Color> getColors() {
        return colors;
    }

    public void setColors(List<Color> colors) {
        this.colors = colors;
    }

    @Override
    public String toString() {
        return "Artpiece{" +
                "idArtpiece=" + idArtpiece +
                ", adaptation=" + adaptation +
                ", description='" + description + '\'' +
                ", imagePath='" + imagePath + '\'' +
                ", themes=" + themes +
                ", colors=" + colors +
                '}';
    }
}
