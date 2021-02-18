package nl.elsenschede.nl.backend.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Portfolio {
    @Id
    @GeneratedValue
    private int idPortfolio;
    @Column
    private String namePortfolio;
    @OneToMany(
            mappedBy = "portfolio"
    )
    private List<Artpiece> subset = new ArrayList();

    public Portfolio() {
    }

    public Portfolio(int idPortfolio, String namePortfolio, List<Artpiece> subset) {
        this.idPortfolio = idPortfolio;
        this.namePortfolio = namePortfolio;
        this.subset = subset;
    }

    public int getIdPortfolio() {
        return this.idPortfolio;
    }

    public void setIdPortfolio(int idPortfolio) {
        this.idPortfolio = idPortfolio;
    }

    public String getNamePortfolio() {
        return this.namePortfolio;
    }

    public void setNamePortfolio(String namePortfolio) {
        this.namePortfolio = namePortfolio;
    }

    public List<Artpiece> getSubset() {
        return this.subset;
    }

    public void setSubset(List<Artpiece> subset) {
        this.subset = subset;
    }
}

