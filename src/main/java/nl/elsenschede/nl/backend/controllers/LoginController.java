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


    @PostMapping("/login")
    public String checkLogin(@RequestBody User user){
       User els = userDao.findByUsername(user.getUsername());
       String password = els.getPassword();
       if(!user.getPassword().equals(password)){
           return "/loginFailed";
       }
       return "/menu";
    }

}
