package com.musicserver.rest.model;

import org.springframework.data.annotation.Id;

/**
 * Created by Bikash on 2/28/2016.
 */
public class Music {

    @Id
    private String id;
    private String name;
    private String genre;
    private String rating;
    private Double price;

    public Music() {

    }
    public Music(String id, String name, String genre, String rating, Double price) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.rating = rating;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Music{" +
                "name='" + name + '\'' +
                ", genre='" + genre + '\'' +
                ", rating='" + rating + '\'' +
                ", price=" + price +
                '}';
    }
}
