package nl.elsenschede.nl.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

//@RequestMapping(value = "/path", method = RequestMethod.GET)
//public void handleGet(HttpServletResponse response) {
//    response.setHeader("Location", "localhost:3000/MainPage");
//    response.setStatus(302);
//}
@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins="https://els-enschede.herokuapp.com/")
public class HomePageController {

    @Autowired
    public HomePageController() {
        super();
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public void homepageHandle(HttpServletResponse response) {
    response.setHeader("Location", "https://els-enschede.herokuapp.com/");
    response.setStatus(302);
    }
}

