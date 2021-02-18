package nl.elsenschede.nl.backend.controllers;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.dao.PhotoDao;
import nl.elsenschede.nl.backend.dao.SpecialDao;
import nl.elsenschede.nl.backend.model.Photo;
import nl.elsenschede.nl.backend.model.Special;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**In a production scenario, you more likely would store the files in a temporary location,
 * a database, or perhaps a NoSQL store (such as Mongo’s GridFS).
 * It is best to NOT load up the file system of your application with content.*/

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins="http://localhost:3000")
public class PhotoFormController {

    private PhotoDao photoDao;
    private SpecialDao specialDao;

    @Autowired
    public PhotoFormController(PhotoDao photoDao) {
        this.photoDao = photoDao;
    }

    @GetMapping("/showPhotoForm")
    public List<Photo> getAllPhotos() {
        List<Photo> photos = new ArrayList<>();
        photoDao.findAll().forEach(photos::add);
        return photos;
    }

    //TODO: where to connect with /addArtpiece?
    @RequestMapping("/addArtpiece")
    public String submitForm( @RequestParam("type") String type,
                              @RequestParam("special") String special,
                             @RequestParam("beschrijving") String description,
                             @RequestParam("theme") String theme,
                             @RequestParam("color") String color,
                             @RequestParam("picture") File file,
                             Model model) {
        List<Theme> themes = new ArrayList<>();
        Theme pickedTheme = Theme.valueOf(theme);
        themes.add(pickedTheme);

        List<Color> colors = new ArrayList<>();
        Color pickedColor = Color.valueOf(color);
        colors.add(pickedColor);

        Adaptation adaptation = Adaptation.valueOf("special");

        if(type == "photo"){
            Photo photo = new Photo(description, file.getPath(), themes, colors);
            photoDao.save(photo);
            model.addAttribute("message", "Successful upload!");
        } else if (type == "special"){
            Special piece  = new Special(description, file.getPath(), themes, colors, adaptation);
            specialDao.save(piece);
        }


        return "redirect:/admin";

    }


    //    @Autowired
//    public PhotoFormController(PhotoDao photoDao) {
//        this.photoDao = photoDao;
//    }
//
//    @GetMapping({"/photoForm"})
//    public ModelAndView showUploadPhotoForm() {
//        ModelAndView photoFormPage = new ModelAndView("photoForm");
//        photoFormPage.addObject("photoForm", new UploadPhotoForm());
//        return photoFormPage;
//    }
//
//    @PostMapping({"photoForm"})
//    public ModelAndView showUploadedPhoto(@ModelAttribute UploadPhotoForm form, Model model) {
//        return null;
//    }
}
