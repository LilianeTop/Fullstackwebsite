package src.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"/api"})
@CrossOrigin(origins="http://localhost:3000")
public class HomePageController {

    @Autowired
    public HomePageController() {
        super();
    }

    @GetMapping(value = {"/"})
    public String homepageHandle() {
        return "/homepage";
    }
}

