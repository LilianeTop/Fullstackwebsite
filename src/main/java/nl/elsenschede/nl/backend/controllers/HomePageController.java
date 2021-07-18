package nl.elsenschede.nl.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins="https://els-enschede.herokuapp.com")
public class HomePageController {

    @Autowired
    public HomePageController() {
        super();
    }


//FIXME: how is it possible that the homepage will still run without this method?
    //this method doesn't do anything
//    @GetMapping({"/"})
//    public String homepageHandle() {
//
//        return "/";
//    }
}

