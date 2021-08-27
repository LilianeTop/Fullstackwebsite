package src.controllers;

import src.backingbeans.LoginUserParameter;
import src.dao.UserDao;
import src.model.User;
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
    public String checkLogin(@RequestBody LoginUserParameter pmUser) {
        User els;
        if(!userDao.existsUserByUsername(pmUser.getUsername())){
            return "User unknown";
        } else {
            els = userDao.findByUsername(pmUser.getUsername());
            if (!els.getPassword().equals(pmUser.getPassword()) ){
                return "Combination username password incorrect";
            } else return String.valueOf(els.getIdUser());
        }
    }


}
