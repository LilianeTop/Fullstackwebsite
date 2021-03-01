package nl.elsenschede.nl.backend.controllers;

import nl.elsenschede.nl.backend.dao.UserDao;
import nl.elsenschede.nl.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    private UserDao userDao;

    @Autowired
    public LoginController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping({"/admin"})
    public String showLoginForm() {
        return "/admin";
    }

    @RequestMapping({"/login"})
    public String checkLogin(@RequestParam("username") String usernameInput,
                             @RequestParam("password") String passwordInput) {
        User user = userDao.findByUsername(usernameInput);
        System.out.println(usernameInput + " " + passwordInput);
        String password = user.getPassword();
    if(!passwordInput.equals(password)){
        return "/loginFailed";
    }
        return "/menu";
    }




}
