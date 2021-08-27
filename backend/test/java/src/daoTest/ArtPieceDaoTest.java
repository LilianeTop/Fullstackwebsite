package src.daoTest;

import src.backingbeans.Adaptation;
import src.backingbeans.Color;
import src.backingbeans.Theme;
import src.dao.ArtpieceDao;
import src.model.Artpiece;
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

        assertEquals(1,ListByColor.size());
        assertEquals(2,ListByTheme.size());
        assertNotEquals(1,ListByAdaptation.size());
    }
}
