package src.controllers;

import src.backingbeans.Adaptation;
import src.backingbeans.Color;
import src.backingbeans.PhotoFormParameters;
import src.backingbeans.Theme;
import src.dao.ArtpieceDao;
import src.model.Artpiece;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
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
    private final ArtpieceDao artpieceDao;

    @Autowired
    public PhotoFormController(ArtpieceDao artpieceDao) {
        this.artpieceDao = artpieceDao;
    }

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

    //TODO: refactor to service
    private boolean ImageExists(String imageHash) {
        return artpieceDao.existsArtpieceByImageHash(imageHash);
    }
    //TODO: refactor to service
    private String CalculateHash(String selectedFile) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] fileBytes = md.digest(selectedFile.getBytes(StandardCharsets.UTF_8));
        return Arrays.toString(fileBytes);
    }

}
