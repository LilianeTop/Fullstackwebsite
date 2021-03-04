package nl.elsenschede.nl.backend.backingbeans;


public class UploadPhotoForm {
    private String sort;
    private String special;
    private String description;
    private String[] themes;
    private String[] colors;
    private String imagePath;

    public UploadPhotoForm() {
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getSpecial() {
        return special;
    }

    public void setSpecial(String special) {
        this.special = special;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String[] getThemes() {
        return themes;
    }

    public void setThemes(String[] themes) {
        this.themes = themes;
    }

    public String[] getColors() {
        return colors;
    }

    public void setColors(String[] colors) {
        this.colors = colors;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
}
