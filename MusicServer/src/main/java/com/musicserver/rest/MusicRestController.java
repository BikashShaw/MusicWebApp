package com.musicserver.rest;

import com.musicserver.rest.interceptor.MusicRestInterceptor;
import com.musicserver.rest.model.Music;
import com.musicserver.rest.repo.MusicRepository;
import com.musicserver.simulator.NetworkLatencySimulator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Bikash on 2/28/2016.
 */
@RestController
public class MusicRestController {

    @Autowired
    private MusicRepository musicRepository;


    @RequestMapping("/list")
    public List<Music> list() {
            return musicRepository.findAll();
    }

    @RequestMapping(value = "/add" , method = RequestMethod.POST)
    public void add(@RequestBody Music music) {
        music.setId(null);
        musicRepository.insert(music);
    }


    @RequestMapping(value = "/byId/{id}", method=RequestMethod.GET)
    public Music getById(@PathVariable  String id) {
        Music music = musicRepository.findOne(id);
        return music;
    }

    @RequestMapping(value = "/update" , method = RequestMethod.POST)
    public void update(@RequestBody Music music) {
        musicRepository.save(music);
    }

    @RequestMapping(value = "/delete/{id}", method=RequestMethod.DELETE)
    public void delete(@PathVariable  String id) {
        musicRepository.delete(id);
    }
}
