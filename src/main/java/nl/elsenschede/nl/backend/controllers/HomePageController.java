package nl.elsenschede.nl.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins="https://els-enschede.herokuapp.com/")
public class HomePageController {

    @Autowired
    public HomePageController() {
        super();
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String homepageHandle() {

        return "redirect:/";
    }
}

