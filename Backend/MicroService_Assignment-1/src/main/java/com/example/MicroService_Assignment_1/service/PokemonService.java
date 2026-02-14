package com.example.MicroService_Assignment_1.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.example.MicroService_Assignment_1.DTO.PokemonDTO;
import com.example.MicroService_Assignment_1.DTO.PokemonDTOList;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PokemonService {

    public PokemonDTO getPokemon(String name){
        String url = "https://pokeapi.co/api/v2/pokemon/"+ name.toLowerCase();
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, PokemonDTO.class);
    }

    public List<PokemonDTOList> getAllPokemon(){
        String url = "https://pokeapi.co/api/v2/pokemon/";
        RestTemplate restTemplate = new RestTemplate();
        return Collections.singletonList(restTemplate.getForObject(url, PokemonDTOList.class));
    }
}
