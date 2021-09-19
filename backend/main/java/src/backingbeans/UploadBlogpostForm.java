package src.backingbeans;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.awt.*;
import java.util.Date;

@NoArgsConstructor
@Data
public class UploadBlogpostForm {
    private String title;
    private Date date;
    private String description;
    private String story;
    private Image image1;
    private Image image2;
    private String author;
}
