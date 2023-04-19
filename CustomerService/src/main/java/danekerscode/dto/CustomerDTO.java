package danekerscode.dto;

import danekerscode.model.Gender;

public record CustomerDTO(String name,
                          String surname,
                          Integer age,
                          Gender gender) {
}
