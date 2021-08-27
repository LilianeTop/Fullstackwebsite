package src.model;

import src.dao.UserDao;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DataBaseLoader implements CommandLineRunner {
    private final UserDao userDao;


    public DataBaseLoader(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void run(String... args) throws Exception {
        //TODO if user exists don't create another
        if (!userDao.existsUserByUsername("Els")) {
            userDao.save(new User("Els", "5"));
        }
    }
}
