package nl.elsenschede.nl.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    //FIXME: only Els can login and use the admin part so only one instance of User
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idUser;
    private final String USERNAME = "Els" ;
    private final String PASSWORD = ")%5lysL0M9";

    protected User() {
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getUSERNAME() {
        return USERNAME;
    }

    public String getPASSWORD() {
        return PASSWORD;
    }
}
