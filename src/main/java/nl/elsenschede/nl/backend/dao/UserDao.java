package nl.elsenschede.nl.backend.dao;

import nl.elsenschede.nl.backend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, Integer> {
    User findByUSERNAME(String username);
}
