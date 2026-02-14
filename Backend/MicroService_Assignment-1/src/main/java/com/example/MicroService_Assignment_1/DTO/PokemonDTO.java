package com.example.MicroService_Assignment_1.DTO;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PokemonDTO {
    private String name;
    private int height;
    private int weight;
    private Sprites sprites;

    private List<TypeSlot> types;
    private List<AbilitySlot> abilities;
    @Getter @Setter
    public static class Sprites {
        private String front_default;
    }

    @Getter @Setter
    public static class TypeSlot {
        private Type type;
    }

    @Getter @Setter
    public static class Type {
        private String name;
    }

    @Getter @Setter
    public static class AbilitySlot {
        private Ability ability;
    }

    @Getter @Setter
    public static class Ability {
        private String name;
    }
}