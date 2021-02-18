package nl.elsenschede.nl.backend.model;



import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public abstract class Artpiece {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int idArtpiece;
    @Column
    private String description;
    @Column
    private String imagePath;
    @ManyToOne
    private Portfolio portfolio;
    @ElementCollection
    private List<Theme> themes = new ArrayList();
    @ElementCollection
    private List<Color> colors = new ArrayList();

    public Artpiece() {
    }

    public Artpiece(String description, String imagePath, List<Theme> themes, List<Color> colors) {
        this.description = description;
        this.imagePath = imagePath;
        this.themes = themes;
        this.colors = colors;
    }

    public Artpiece(String description, String imagePath, Portfolio portfolio, List<Theme> themes, List<Color> colors) {
        this.description = description;
        this.imagePath = imagePath;
        this.portfolio = portfolio;
        this.themes = themes;
        this.colors = colors;
    }

    public Artpiece(int idArtpiece, String description, String imagePath, Portfolio portfolio, List<Theme> themes, List<Color> colors) {
        this.idArtpiece = idArtpiece;
        this.description = description;
        this.imagePath = imagePath;
        this.portfolio = portfolio;
        this.themes = themes;
        this.colors = colors;
    }

    public int getIdArtpiece() {
        return this.idArtpiece;
    }

    public void setIdArtpiece(int idArtpiece) {
        this.idArtpiece = idArtpiece;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImagePath() {
        return this.imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public Portfolio getPortfolio() {
        return this.portfolio;
    }

    public void setPortfolio(Portfolio portfolio) {
        this.portfolio = portfolio;
    }

    public List<Theme> getThemes() {
        return this.themes;
    }

    public void setThemes(List<Theme> themes) {
        this.themes = themes;
    }

    public List<Color> getColors() {
        return this.colors;
    }

    public void setColors(List<Color> colors) {
        this.colors = colors;
    }
}
