package src.controllers;

import src.backingbeans.Adaptation;
import src.dao.ArtpieceDao;
import src.model.Artpiece;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins = "http://localhost:3000")
public class OverviewArtpiecesController {
    private final ArtpieceDao artpieceDao;

    @Autowired
    public OverviewArtpiecesController(ArtpieceDao artpieceDao) {
        this.artpieceDao = artpieceDao;
    }

    @GetMapping("/showPhoto")
    public List<Artpiece> getAllPhotos() {
        return artpieceDao.findAllByAdaptation(Adaptation.FOTO);
    }

}
