package com.example.demo.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.*;


import javax.persistence.*;
import java.io.Serializable;
import java.util.List;



@Entity
@Data
@Getter
@Setter
public class Users implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String Username;
    private String Position;
    private String LinkedinUrl;
    private String CompanyName;
    private String Country ;
    private String City ;
    private Long PostalCode ;
    private String Email;
    private  String Password ;
    private String PasswordConfirm;

/*

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "users", cascade = CascadeType.ALL)
    @JsonManagedReference(value="commentref")
    private Set<Comment> comments=new HashSet<Comment>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id", nullable =false)
    @JsonBackReference(value="roleref")
    private Role role;
*/

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "usr", cascade = CascadeType.ALL)
    @JsonManagedReference(value="usrusr")
    List<RefUsr_Role> UsrRol;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "users", cascade = CascadeType.ALL)
    @JsonManagedReference(value="commentref")
    private List<Comment> comments;



    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id", nullable =false)
    @JsonBackReference(value="roleref")
    private Role role;

    public Users(){}

    public Users(String email, String Password){
        this.Password=Password;
        this.Email=email;
    }

public Users(String id){
        this.Username=id;
}

    public Users( String Username, String Position, String LinkedinUrl, String CompanyName, String Country , String City , Long PostalCode , String Email, String Password , String PasswordConfirm, Long role_id){
        this.Username=Username;
        this.Position=Position;
        this.LinkedinUrl=LinkedinUrl;
        this.CompanyName=CompanyName;
        this.Country=Country;
        this.City=City;
        this.PostalCode=PostalCode;
        this.Email=Email;
        this.Password=Password;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        this.Username = username;
    }

    public void setPosition(String Position){
        this.Position=Position;
    }

     public String getPosition(){
        return this.Position;
     }

    public void setLinkedinUrl(String LinkUrl)
    {
        this.LinkedinUrl=LinkUrl;
    }

    public String getLinkedinUrl(){
        return this.LinkedinUrl;
    }

    public void setCompanyName(String CompanyName){
        this.CompanyName=CompanyName;
    }

    public String getCompanyName(){
        return this.CompanyName;
    }

    public void setCity(String City){
        this.City=City;
    }
    public String getCity(){
        return this.City;
    }

    public void setCountry(String Country){
        this.Country=Country;
    }
    public String getCountry(){
        return this.Country;
    }

    public void setPostalCode(Long PostCode){
        this.PostalCode=PostCode;
    }
    public Long getPostalCode(){
        return this.PostalCode;
    }

    public void setEmail(String Email){
        this.Email=Email;
    }
    public String getEmail(){
        return this.Email;
    }


    public void setPassword(String password) {
        this.Password = password;
    }

    public String getPassword() {
        return Password;
    }

    //@Transient
    public String getPasswordConfirm() {
        return PasswordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.PasswordConfirm = passwordConfirm;
    }


    public List<Comment> getComments() {
        return comments;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

}