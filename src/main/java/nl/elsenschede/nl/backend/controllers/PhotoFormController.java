package nl.elsenschede.nl.backend.controllers;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.dao.ArtpieceDao;
import nl.elsenschede.nl.backend.model.Artpiece;
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
    private ArtpieceDao artpieceDao;

    @Autowired
    public PhotoFormController(ArtpieceDao artpieceDao) {
        this.artpieceDao = artpieceDao;
    }

//    @GetMapping({"/photoForm"})
//    public String photoFormHandle() {
//        return "/photoForm";
//    }

//FIXME: doesn't show any images just the description
    @GetMapping("/showPhoto")
    public List<Artpiece> getAllPhotos() {
        List<Artpiece> photos = new ArrayList<>();
        artpieceDao.findAllByAdaptation(Adaptation.FOTO).forEach(photos::add);
        for(Artpiece photo : photos){
            System.out.println(photo.getDescription());//returns empty[]
        }
        return photos;
    }

    @PostMapping("/addArtpiece")
    public String uploadPhoto(@RequestBody PhotoFormParameters photoFormParameters) {
        Adaptation specials = photoFormParameters.getAdaptation();
        String selectedFile = photoFormParameters.getSelectedFile();
        String description = photoFormParameters.getDescription();
        List<Theme> themes = photoFormParameters.getThemes();
        List<Color> colors = photoFormParameters.getColors();

        Artpiece piece = new Artpiece(specials, description, selectedFile, themes, colors);
        artpieceDao.save(piece);

        return "redirect:/menu";

    }


}
