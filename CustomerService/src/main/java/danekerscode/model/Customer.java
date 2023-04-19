package danekerscode.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @Builder
@AllArgsConstructor @NoArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String surname;
    private Integer age;

    @Enumerated(EnumType.STRING)
    private Gender gender;
}
