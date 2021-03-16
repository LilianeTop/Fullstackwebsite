package nl.elsenschede.controllerTests;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.dao.ArtpieceDao;
import nl.elsenschede.nl.backend.model.Artpiece;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class OverviewControllerTest {
    @Autowired
    ArtpieceDao artpieceDao;

    public OverviewControllerTest() {

    }

    @Test
    void getAllPhotos() {
        List<Artpiece> photos = new ArrayList<>();
        artpieceDao.findAllByAdaptation(Adaptation.FOTO).forEach(photos::add);


    }
}
