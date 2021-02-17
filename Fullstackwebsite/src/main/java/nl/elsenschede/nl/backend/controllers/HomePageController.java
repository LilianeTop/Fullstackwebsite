package nl.elsenschede.nl.backend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePageController {
    public HomePageController() {
    }

    @GetMapping({"/Home"})
    public String homepageHandel() {
        return "Home";
    }
}

