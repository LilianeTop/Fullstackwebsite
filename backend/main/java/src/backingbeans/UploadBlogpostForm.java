package src.backingbeans;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.awt.*;
import java.util.Date;

@NoArgsConstructor
@Data
public class UploadBlogpostForm {
    String title;
    Date date;
    String description;
    String story;
    Image image1;
    Image image2;
    String author;
}
