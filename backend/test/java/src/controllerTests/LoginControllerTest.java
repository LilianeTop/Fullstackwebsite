package src.controllerTests;


import src.dao.UserDao;
import src.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class LoginControllerTest {
    @Autowired
    UserDao userDao;
    User user;

    public LoginControllerTest() {
    }

    @BeforeEach
    void setUp() {
        user = new User();
        user.setUsername("Lili");
        user.setPassword("Top");

    }

    @Test
    void checkLoginTest() {
        userDao.save(user);
        List<User> users = (List<User>) userDao.findAll();
        boolean userNameExists = userDao.existsUserByUsername(user.getUsername());
        assertTrue(userNameExists);
        assertEquals(user. getUsername(), "Lili");
        assertEquals(user.getPassword(), "Top");
        assertEquals(2, user.getIdUser());
        assertEquals("Lili", userDao.findById(2).get().getUsername());
        assertTrue(userDao.existsUserByUsername("Els"));
        assertEquals(userDao.findByUsername("Els").getPassword(), "5");

//        assertEquals(1, users.size()); FIXME: can't be 2

    }
}
