package nl.elsenschede.nl.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;

//@RequestMapping("/")
//public ModelAndView welcome() {
//        ModelAndView modelAndView = new ModelAndView();
//        modelAndView.setViewName("bakara");
//        return modelAndView;
//        }
@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins="https://els-enschede.herokuapp.com/")
public class HomePageController {

    @Autowired
    public HomePageController() {
        super();
    }

    @RequestMapping(value = "/")
    public ModelAndView homepageHandle() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/");
        return modelAndView;
    }
}

