package nl.elsenschede.nl.backend.backingbeans;

import java.awt.*;
import java.util.Date;

public class UploadBlogpostForm {
    String title;
    Date date;
    String description;
    String story;
    Image image1;
    Image image2;
    String author;

    public UploadBlogpostForm() {
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStory() {
        return this.story;
    }

    public void setStory(String story) {
        this.story = story;
    }

    public Image getImage1() {
        return this.image1;
    }

    public void setImage1(Image image1) {
        this.image1 = image1;
    }

    public Image getImage2() {
        return this.image2;
    }

    public void setImage2(Image image2) {
        this.image2 = image2;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
