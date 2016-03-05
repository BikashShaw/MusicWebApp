package com.musicserver.rest.repo;

import com.musicserver.rest.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by Bikash on 2/28/2016.
 */
public interface  MusicRepository extends MongoRepository<Music, String> {

}
