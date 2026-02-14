package com.example.MicroService_Assignment_1.DTO;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PokemonDTOList {
    private int count;
    private String next;
    private String previous;
    private List<PokemonSummary> results;

    // This represents the smaller objects inside the "results" array
    @Getter
    @Setter
    public static class PokemonSummary {
        private String name;
        private String url;
    }
}
