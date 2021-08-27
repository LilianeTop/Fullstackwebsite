package src.backingbeans;

import lombok.Data;

import java.util.List;

@Data
public class PhotoFormParameters {
    public Adaptation specials;
    public String description;
    public String selectedFile;
    public List<Theme> themes;
    public List<Color> colors;
}
