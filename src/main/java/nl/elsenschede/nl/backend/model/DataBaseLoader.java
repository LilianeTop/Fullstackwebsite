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
        userDao.save(new User("Els", "5"));
    }
}
