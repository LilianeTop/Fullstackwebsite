package nl.elsenschede.nl.backend.dao;


import nl.elsenschede.nl.backend.model.Portfolio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioDao extends CrudRepository<Portfolio, Integer> {
    Portfolio findAllBy();
    Portfolio findAllByIdPortfolio(int idPortfolio);

    Portfolio findAllByNamePortfolio(String namePortfolio);
}

