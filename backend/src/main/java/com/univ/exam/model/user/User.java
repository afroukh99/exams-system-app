package com.univ.exam.model.user;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @Column(nullable = false, unique = true , updatable = false)
    private String userID;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Transient
    private String confirmPassword;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles;

    // --- Builder Pattern ---
    public static UserBuilder builder() {
        return new UserBuilder();
    }

    public static class UserBuilder {
        private final User user = new User();

        public UserBuilder userID() {
            String id = UUID.randomUUID().toString();
            user.setUserID(id);
            return this;
        }

        public UserBuilder firstName(String firstName) {
            user.setFirstName(firstName);
            return this;
        }

        public UserBuilder lastName(String lastName) {
            user.setLastName(lastName);
            return this;
        }

        public UserBuilder email(String email) {
            user.setEmail(email);
            return this;
        }

        public UserBuilder password(String password) {
            user.setPassword(password);
            return this;
        }

        public UserBuilder roles(List<Role> roles) {
            user.setRoles(roles);
            return this;
        }

        public UserBuilder addRole(Role role) {
            user.getRoles().add(role);
            return this;
        }

        public User build() {
            return user;
        }
    }
}
