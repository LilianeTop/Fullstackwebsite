package nl.elsenschede.nl.backend.controllers;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.backingbeans.UploadPhotoForm;
import nl.elsenschede.nl.backend.dao.PhotoDao;
import nl.elsenschede.nl.backend.dao.SpecialDao;
import nl.elsenschede.nl.backend.model.Photo;
import nl.elsenschede.nl.backend.model.Special;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.ArrayList;
import java.util.List;

/**
 * In a production scenario, you more likely would store the files in a temporary location,
 * a database, or perhaps a NoSQL store (such as Mongo’s GridFS).
 * It is best to NOT load up the file system of your application with content.
 */

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins = "http://localhost:3000")
public class PhotoFormController {
    private PhotoDao photoDao;
    private SpecialDao specialDao;


    @Autowired
    public PhotoFormController(PhotoDao photoDao, SpecialDao specialDao) {
        this.photoDao = photoDao;
        this.specialDao = specialDao;
    }

    @GetMapping({"/photoForm"})
    public String photoFormHandle() {
        return "/photoForm";
    }


    @GetMapping("/showPhoto")
    public List<Photo> getAllPhotos() {
        List<Photo> photos = new ArrayList<>();
        photoDao.findAll().forEach(photos::add);
        return photos;
    }


@PostMapping("/addArtpiece")
    public String uploadPhoto(@RequestBody UploadPhotoForm uploadPhotoForm){
        String sort = uploadPhotoForm.getSort();
        String special = uploadPhotoForm.getSpecial();
        String description = uploadPhotoForm.getDescription();
        String[] chosenThemes = uploadPhotoForm.getThemes();
        ArrayList<Theme> themes = new ArrayList<>();
        for(String theme : chosenThemes){
            Theme chosen = Theme.valueOf(theme.toUpperCase());
            themes.add(chosen);
        }
        String[] chosenColors = uploadPhotoForm.getColors();
        ArrayList<Color> colors = new ArrayList<>();
        for(String color : chosenColors){
            Color chosen = Color.valueOf(color.toUpperCase());
            colors.add(chosen);
        }
        String imagePath = uploadPhotoForm.getImagePath();
        Adaptation adaptation = Adaptation.valueOf(special.toUpperCase());

    if(sort.equals("photo")){
            Photo photo = new Photo(description, imagePath, themes, colors);
            photoDao.save(photo);
        System.out.println("Photo uploaded");
        } else {
            Special piece  = new Special(description, imagePath, themes, colors, adaptation);
            specialDao.save(piece);
        System.out.println("Special uploaded");
        }
    return "redirect:/menu";

}



}
