package nl.elsenschede.nl.backend.controllers;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.PhotoFormParameters;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.dao.ArtpieceDao;
import nl.elsenschede.nl.backend.model.Artpiece;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
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



    @PostMapping("/addArtpiece")
    public String uploadPhoto(@RequestBody PhotoFormParameters photoFormParameters) throws NoSuchAlgorithmException {
        Adaptation specials = photoFormParameters.getAdaptation();
        String selectedFile = photoFormParameters.getSelectedFile();
        String description = photoFormParameters.getDescription();
        List<Theme> themes = photoFormParameters.getThemes();
        List<Color> colors = photoFormParameters.getColors();

        String imageHash = CalculateHash(selectedFile);
        if (ImageExists(imageHash)) {
            return "exists";
        }

        Artpiece piece = new Artpiece(specials, description, selectedFile, imageHash, themes, colors);
        artpieceDao.save(piece);

        return "/addArtpiece";
    }

    private boolean ImageExists(String imageHash) {
        return artpieceDao.existsArtpieceByImageHash(imageHash);
    }

    private String CalculateHash(String selectedFile) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] fileBytes = md.digest(selectedFile.getBytes(StandardCharsets.UTF_8));
        String hash = Arrays.toString(fileBytes);
        return hash;
    }


}
