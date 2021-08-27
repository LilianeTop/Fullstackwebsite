package src.model;

import src.backingbeans.Adaptation;
import src.backingbeans.Color;
import src.backingbeans.Theme;
import javax.persistence.*;
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
    @Column(columnDefinition = "LONGTEXT")
    private String selectedFile;
    @Column
    private String imageHash;
    @ElementCollection
    private List<Theme> themes;
    @ElementCollection
    private List<Color> colors;


    public Artpiece() {
    }

    public Artpiece(Adaptation adaptation, String description, String selectedFile, String imageHash, List<Theme> themes, List<Color> colors) {
       this(0, adaptation, description, selectedFile, imageHash, themes, colors);
    }

    public Artpiece(int idArtpiece, Adaptation adaptation, String description, String selectedFile, String imageHash, List<Theme> themes, List<Color> colors) {
        this.idArtpiece = idArtpiece;
        this.adaptation = adaptation;
        this.description = description;
        this.selectedFile = selectedFile;
        this.imageHash = imageHash;
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

    public String getSelectedFile() {
        return selectedFile;
    }

    public void setSelectedFile(String selectedFile) {
        this.selectedFile = selectedFile;
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

    public String getImageHash() {
        return imageHash;
    }

    public void setImageHash(String imageHash) {
        this.imageHash = imageHash;
    }

    @Override
    public String toString() {
        return "Artpiece{" +
                "idArtpiece=" + idArtpiece +
                ", adaptation=" + adaptation +
                ", description='" + description + '\'' +
                ", image=" + selectedFile +
                ", themes=" + themes +
                ", colors=" + colors +
                '}';
    }
}
