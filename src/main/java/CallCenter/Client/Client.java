package CallCenter.Client;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

    @Entity

    @Data
    public class Client {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String name;

        private String lastName;

        private Date dateOfBirth;

        private String phone;


        @CreationTimestamp
        private Date createdAt;

        @UpdateTimestamp
        private Date updatedAt;
    }

