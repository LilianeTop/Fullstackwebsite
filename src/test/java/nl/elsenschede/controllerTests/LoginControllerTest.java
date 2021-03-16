package nl.elsenschede.controllerTests;


import nl.elsenschede.nl.backend.dao.UserDao;
import nl.elsenschede.nl.backend.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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

        boolean userNameExists = userDao.existsUserByUsername(user.getUsername());
        User user2 = userDao.findByUsername(user.getUsername());
        assertTrue(userNameExists);
        assertEquals(user2. getUsername(), "Lili");
        assertEquals(user2.getPassword(), "Top");
        assertNotNull(user.getIdUser());
        assertFalse(user2.getIdUser() == 5);
        assertTrue(userDao.existsUserByUsername("Els"));
        assertEquals(userDao.findByUsername("Els").getPassword(), "5");

    }
}
