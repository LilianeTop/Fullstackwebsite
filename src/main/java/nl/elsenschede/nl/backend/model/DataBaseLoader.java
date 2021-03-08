package nl.elsenschede.nl.backend.model;

import nl.elsenschede.nl.backend.dao.ArtpieceDao;
import nl.elsenschede.nl.backend.dao.UserDao;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;



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
