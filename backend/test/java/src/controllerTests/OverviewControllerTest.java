package src.controllerTests;

import src.backingbeans.Adaptation;
import src.dao.ArtpieceDao;
import src.model.Artpiece;
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
        artpieceDao.findAllByAdaptation(Adaptation.FOTO)
                .addAll(photos);
//                .forEach(photos::add);
    }
}
