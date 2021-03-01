package nl.elsenschede.nl.backend.controllers;

import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.backingbeans.Color;
import nl.elsenschede.nl.backend.backingbeans.Theme;
import nl.elsenschede.nl.backend.dao.PhotoDao;
import nl.elsenschede.nl.backend.dao.SpecialDao;
import nl.elsenschede.nl.backend.model.Photo;
import nl.elsenschede.nl.backend.model.Special;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.ArrayList;
import java.util.List;

/**In a production scenario, you more likely would store the files in a temporary location,
 * a database, or perhaps a NoSQL store (such as Mongo’s GridFS).
 * It is best to NOT load up the file system of your application with content.*/

@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins="http://localhost:3000")
public class PhotoFormController {

    private PhotoDao photoDao;
    private SpecialDao specialDao;

    @Autowired
    public PhotoFormController(PhotoDao photoDao, SpecialDao specialDao) {
        this.photoDao = photoDao;
        this.specialDao = specialDao;
    }

    @GetMapping({"/admin"})
    public String photoFormHandle() {
        return "/admin";
    }


    @GetMapping("/showPhoto")
    public List<Photo> getAllPhotos() {
        List<Photo> photos = new ArrayList<>();
        photoDao.findAll().forEach(photos::add);
        return photos;
    }


//@PostMapping("/addArtpiece")
////  "message": "Required request body is missing: public java.lang.String
////  nl.elsenschede.nl.backend.controllers.PhotoFormController.submitForm(nl.elsenschede.nl.backend.model.Special)",
//    public String submitForm(@RequestBody Artpiece artpiece){
//
//        String description = artpiece.getDescription();
//        String imagePath = artpiece.getImagePath();
//        List<Theme> themes = artpiece.getThemes();
//        List<Color> colors = artpiece.getColors();
//        Adaptation adaptation;
//
//
//    if(true){
//            Photo photo = new Photo(description, imagePath, themes, colors);
//            photoDao.save(photo);
//        } else {
//            Special piece  = new Special(description, imagePath, themes, colors, adaptation);
//            specialDao.save(piece);
//        }
//    return "redirect:/admin";
//
//}

//
    //@PostMapping("/greeting")
//  public String greetingSubmit(@ModelAttribute Greeting greeting, Model model) {
//    model.addAttribute("greeting", greeting);
//    return "result";
//  }
//FIXME: give error code 500 as the form is not connected to anything?
//    @PostMapping("/addArtpiece")
//    public String submitForm(@ModelAttribute UploadPhotoForm form, Model model) {
//        String sort = form.getSort();
//        String description = form.getDescription();
//        String imagePath = form.getImagePath();
//        List<Theme> themes = form.getThemes();
//        List<Color> colors = form.getColors();
//        Adaptation adaptation = form.getAdaptation();
//
//        if(sort.equals("photo")){
//            Photo photo = new Photo(description, imagePath, themes, colors);
//            photoDao.save(photo);
//            model.addAttribute("message", "Successful upload of photo!");
//        } else if (sort.equals( "special")){
//            Special piece  = new Special(description, imagePath, themes, colors, adaptation);
//            specialDao.save(piece);
//            model.addAttribute("message", "Successful upload of Special!");
//        }
//        return "redirect:/admin";
//    }
//@PostMapping("/employees")
//Employee newEmployee(@RequestBody Employee newEmployee) {
//    return repository.save(newEmployee);
//}
//    @RequestMapping("/addArtpiece")
    @PostMapping("/addArtpiece")
//    @GetMapping("/addArtpiece")
//    @RequestMapping(value= "/addArtpiece", method = RequestMethod.POST)
    public String submitForm(@RequestParam("sort") String type,
                             @RequestParam("specials") String special,
                             @RequestParam("description") String description,
                             @RequestParam("themes") ArrayList<Theme> themesInput,
                             @RequestParam("colors") ArrayList<Color> colorsInput,
                             @RequestParam("selectedFile") String imagePath,
                             Model model)  {

        ArrayList<Theme> themes = new ArrayList<>();
        for(Object theme: themesInput){
            Theme pickedTheme = Theme.valueOf(theme.toString().toUpperCase());
            themes.add(pickedTheme);
        }

        List<Color> colors = new ArrayList<>();
        for(Object color: colorsInput){
            Color pickedColor = Color.valueOf(color.toString().toUpperCase());
            colors.add(pickedColor);
        }

        Adaptation adaptation = Adaptation.valueOf(special.toUpperCase());

        if(type.equals("photo")){
            Photo photo = new Photo(description, imagePath, themes, colors);
            photoDao.save(photo);
            model.addAttribute("message", "Successful upload of photo!");
        } else if (type.equals( "special")){
            Special piece  = new Special(description, imagePath, themes, colors, adaptation);
            specialDao.save(piece);
            model.addAttribute("message", "Successful upload of Special!");
        }

        return "redirect:/admin";

    }


    //    @Autowired
//    public PhotoFormController(PhotoDao photoDao) {
//        this.photoDao = photoDao;
//    }
//
//    @GetMapping({"/photoForm"})
//    public ModelAndView showUploadPhotoForm() {
//        ModelAndView photoFormPage = new ModelAndView("photoForm");
//        photoFormPage.addObject("photoForm", new UploadPhotoForm());
//        return photoFormPage;
//    }
//
//    @PostMapping({"photoForm"})
//    public ModelAndView showUploadedPhoto(@ModelAttribute UploadPhotoForm form, Model model) {
//        return null;
//    }
}
