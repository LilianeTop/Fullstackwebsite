package nl.elsenschede.nl.backend.controllers;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;

import java.util.ArrayList;
import java.util.List;

public class PhotoFormParameters {
    public Adaptation specials;
    public String description;
    public String selectedFile;
    public List<Theme> themes = new ArrayList();
    public List<Color> colors = new ArrayList();

    public Adaptation getAdaptation() {
        return specials;
    }

    public void setAdaptation(Adaptation adaptation) {
        this.specials = adaptation;
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
}
