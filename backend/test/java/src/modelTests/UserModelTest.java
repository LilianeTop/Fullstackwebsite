package src.modelTests;

//check if only User is a singleton

import src.dao.UserDao;
import src.model.DataBaseLoader;
import src.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserModelTest {

    @Autowired
    UserDao userDao;

    @Autowired
    DataBaseLoader dbLoader;


    public UserModelTest() {
    }

    @Test
    void runTest() throws Exception {
        User anotherUser = new User("Lili", "12345");
        List<User> users = (List<User>) userDao.findAll();
        dbLoader.run("Lili", "12345");
        assertTrue(userDao.existsUserByUsername("Els"));
        assertFalse(userDao.existsUserByUsername("Lili"));
        assertFalse(userDao.existsUserByUsername(anotherUser.getUsername()));
        assertEquals(1, users.size());
    }
}
