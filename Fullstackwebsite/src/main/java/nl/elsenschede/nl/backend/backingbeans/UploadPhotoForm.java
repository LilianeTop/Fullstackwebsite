package nl.elsenschede.nl.backend.backingbeans;

import java.io.File;
import java.util.List;

public class UploadPhotoForm {
    private String description;
    String filePath;
    private boolean special;
    private List<Theme> themes;
    private List<Color> colors;
    private File image;



    public UploadPhotoForm() {
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public boolean isSpecial() {
        return this.special;
    }

    public void setSpecial(boolean special) {
        this.special = special;
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

    public File getImage() {
        return this.image;
    }

    public void setImage(File image) {
        this.image = image;
    }
}
