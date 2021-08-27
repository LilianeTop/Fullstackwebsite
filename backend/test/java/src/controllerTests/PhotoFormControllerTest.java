package src.controllerTests;

import src.backingbeans.Adaptation;
import src.backingbeans.Color;
import src.backingbeans.PhotoFormParameters;
import src.backingbeans.Theme;
import src.controllers.PhotoFormController;
import src.dao.ArtpieceDao;
import src.model.Artpiece;
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
