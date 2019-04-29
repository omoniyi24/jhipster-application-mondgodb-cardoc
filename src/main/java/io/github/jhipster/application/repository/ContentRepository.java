package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Content;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data MongoDB repository for the Content entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContentRepository extends MongoRepository<Content, String> {

}
