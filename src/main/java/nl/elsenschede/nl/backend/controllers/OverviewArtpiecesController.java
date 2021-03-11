package nl.elsenschede.nl.backend.controllers;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.dao.ArtpieceDao;
import nl.elsenschede.nl.backend.model.Artpiece;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins = "http://localhost:3000")
public class OverviewArtpiecesController {
    private ArtpieceDao artpieceDao;

    @Autowired
    public OverviewArtpiecesController(ArtpieceDao artpieceDao) {
        this.artpieceDao = artpieceDao;
    }

    //FIXME: doesn't show any images just the description
    @GetMapping("/showPhoto")
    public List<Artpiece> getAllPhotos() {
        List<Artpiece> photos = new ArrayList<>();
        artpieceDao.findAllByAdaptation(Adaptation.FOTO).forEach(photos::add);
        return photos;
    }

}
