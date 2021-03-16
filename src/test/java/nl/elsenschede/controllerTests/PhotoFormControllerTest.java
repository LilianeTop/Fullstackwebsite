package nl.elsenschede.controllerTests;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.PhotoFormParameters;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.controllers.PhotoFormController;
import nl.elsenschede.nl.backend.dao.ArtpieceDao;
import nl.elsenschede.nl.backend.model.Artpiece;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.ArrayList;
import java.util.List;


@SpringBootTest
public class PhotoFormControllerTest {
    @Autowired
    ArtpieceDao artpieceDao;

    @Autowired
    PhotoFormController photoFormController;


    PhotoFormParameters photoFormParameters;
    Artpiece artpiece;

    public PhotoFormControllerTest() {
    }

    @BeforeEach
    void setUp() {
        artpiece = new Artpiece();
        List<Theme> themes = new ArrayList<>();
        themes.add(Theme.INDUSTRIE);
        themes.add(Theme.MENSEN);
        List<Color> colors = new ArrayList<>();
        colors.add(Color.KLEURRIJK);
        artpiece.setAdaptation(Adaptation.FOTO);
        artpiece.setDescription("This is the test");
        artpiece.setSelectedFile("This is a fake base64String");
        artpiece.setThemes(themes);
        artpiece.setColors(colors);
    }

    @AfterEach
    public void tearDown() {
        artpieceDao.delete(artpiece);
    }


    @Test
    void testUploadPhoto() throws Exception {
        photoFormParameters = new PhotoFormParameters();
        photoFormParameters.setAdaptation(artpiece.getAdaptation());
        photoFormParameters.setSelectedFile(artpiece.getSelectedFile());
        photoFormParameters.setThemes(artpiece.getThemes());
        photoFormParameters.setColors(artpiece.getColors());
        photoFormParameters.setDescription(artpiece.getDescription());

        String result = photoFormController.uploadPhoto(photoFormParameters);
        assertEquals("/addArtpiece", result);
        String result2 = photoFormController.uploadPhoto(photoFormParameters);
        assertEquals("exists", result2);
    }


}
