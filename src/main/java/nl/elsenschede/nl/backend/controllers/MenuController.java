package nl.elsenschede.nl.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    public MenuController() {
    }

    @GetMapping({"/menu"})
    public String showMenu() {
        return "/menu";
    }
}
