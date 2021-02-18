package nl.elsenschede.nl.backend.dao;


import nl.elsenschede.nl.backend.backingbeans.Adaptation;
import nl.elsenschede.nl.backend.model.Special;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SpecialDao extends CrudRepository<Special, Integer> {
    List<Special> findAllByAdaptation(Adaptation adaptation);
}

