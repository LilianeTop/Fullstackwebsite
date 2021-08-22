package nl.elsenschede.daoTest;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.dao.ArtpieceDao;
import nl.elsenschede.nl.backend.model.Artpiece;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ArtPieceDaoTest {

    @Autowired
    ArtpieceDao artpieceDao;
    Artpiece pieceWithAllP;
    Artpiece pieceMissingP;

    public ArtPieceDaoTest() {
    }

    @BeforeEach
    void setUp() {

        pieceWithAllP = new Artpiece();

        pieceWithAllP.setAdaptation(Adaptation.FOTO);
        pieceWithAllP.setDescription("This can be the title");
        //FIXME: how to add a selectedFile as a base64String is required
        pieceWithAllP.setSelectedFile("");
        List<Theme> themes = new ArrayList<>();
        themes.add(Theme.INDUSTRIE);
        themes.add(Theme.MENSEN);
        List<Color> colors = new ArrayList<>();
        colors.add(Color.KLEURRIJK);
        pieceWithAllP.setThemes(themes);
        pieceWithAllP.setColors(colors);

        pieceMissingP = new Artpiece();

        pieceMissingP.setDescription(null);
        List<Theme> themes2 = new ArrayList<>();
        themes.add(Theme.ABSTRACT);
        themes.add(Theme.LANDSCHAP);
        themes.add(Theme.BUITEN);
        themes.add(Theme.MENSEN);
        pieceMissingP.setThemes(themes2);

    }

    @AfterEach
    void tearDown(){
        artpieceDao.deleteAll();
    }

    @Test
    void uploadPhotoTest() {
        artpieceDao.save(pieceWithAllP);
        artpieceDao.save(pieceMissingP);

        assertNotNull(artpieceDao.findById(pieceWithAllP.getIdArtpiece()));
        List<Artpiece> ListByColor = artpieceDao.findAllByColors(Color.KLEURRIJK);
        List<Artpiece> ListByTheme = artpieceDao.findAllByThemes(Theme.MENSEN);
        List<Artpiece> ListByAdaptation = artpieceDao.findAllByAdaptation(Adaptation.BOXBEELD);

        assertTrue(ListByColor.size() == 1);
        assertTrue(ListByTheme.size() == 2);
        assertFalse(ListByAdaptation.size() == 1);

    }
}
