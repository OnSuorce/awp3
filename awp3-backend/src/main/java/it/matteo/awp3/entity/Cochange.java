package it.matteo.awp3.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "cochanges")
public class Cochange {

    @Id
    private String id;

    private String f1;
    private String f2;
    private String when;
    @Field("is_cochange")
    private int isCochange;
    @Field("cumulative_cochanges")
    private int cumulativeCochanges;
    @Field("cumulative_cochanges_p")
    private double cumulativeCochangesP;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cochange cochange = (Cochange) o;
        return Objects.equals(f1, cochange.f1) && Objects.equals(f2, cochange.f2);
    }

    @Override
    public int hashCode() {
        return Objects.hash(f1, f2);
    }
}
