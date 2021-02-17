package nl.elsenschede.nl.backend.controllers;


import nl.elsenschede.nl.backend.dao.PortfolioDao;
import nl.elsenschede.nl.backend.model.Artpiece;
import nl.elsenschede.nl.backend.model.Portfolio;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class PortfolioController {
    private PortfolioDao portfolioDao;

    public PortfolioController(PortfolioDao portfolioDao) {
        this.portfolioDao = portfolioDao;
    }

    @GetMapping("/portfolio")
    Collection<Artpiece> portfolio() {
        return (Collection<Artpiece>)  portfolioDao.findAllBy();
    }

    @PostMapping("/portfolio")
    ResponseEntity<Portfolio> createPortfolio(@Valid @RequestBody Portfolio portfolio) throws URISyntaxException {
        Portfolio result = portfolioDao.save(portfolio);
                return ResponseEntity.ok().body(result);
    }
}
