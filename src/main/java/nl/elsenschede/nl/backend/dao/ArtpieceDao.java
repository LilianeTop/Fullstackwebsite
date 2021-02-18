package nl.elsenschede.nl.backend.dao;



import nl.elsenschede.nl.backend.model.Artpiece;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ArtpieceDao extends CrudRepository<Artpiece, Integer> {
}