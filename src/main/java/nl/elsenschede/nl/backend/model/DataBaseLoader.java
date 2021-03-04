package nl.elsenschede.nl.backend.model;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.dao.ArtpieceDao;
import nl.elsenschede.nl.backend.dao.UserDao;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static nl.elsenschede.nl.backend.backingbeans.Adaptation.FOTO;

@Component
public class DataBaseLoader implements CommandLineRunner  {
    private UserDao userDao;
    private ArtpieceDao artpieceDao;

    public DataBaseLoader(ArtpieceDao artpieceDao, UserDao userDao) {
        this.userDao = userDao;
        this.artpieceDao = artpieceDao;
    }

    @Override
    public void run(String... args) throws Exception {
        userDao.save(new User("Els", "5lysL0M9"));


        Adaptation special = FOTO;
        String description = "3 men on bench drunk";
        String imagePath = "https://cdn-images.welcometothejungle.com/2cr8rhEPdGSJBlriVbpKtDtzDjgYkW1LljASEmfyUME/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcnRpY2xlL2ltYWdlLzk1NTcvMTU3NzEwL2hhbmdvdmVyLTEuanBn";
        List<Theme> themes = new ArrayList<>();
        List<Color> colors = new ArrayList<>();
        themes.add(Theme.MENSEN);
        themes.add(Theme.BUITEN);
        colors.add(Color.KLEURRIJK);
        artpieceDao.save(new Artpiece(special, description, imagePath, themes, colors));
        special = FOTO;
        description = "pauw with blue and green";
        imagePath = "https://blog.computercreatief.nl/wp-content/uploads/2020/05/4C346227-180E-4D1A-A7E6-F6B289A77C26-672x372.jpeg";
        List<Theme> themes2 = new ArrayList<>();
        List<Color> colors2= new ArrayList<>();
        themes2.add(Theme.MENSEN);
        themes2.add(Theme.BUITEN);
        colors2.add(Color.BLAUW);
        colors2.add(Color.GROEN);
        artpieceDao.save(new Artpiece(special,description, imagePath, themes2, colors2));



    }
}
