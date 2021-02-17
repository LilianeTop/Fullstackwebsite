package nl.elsenschede.nl.backend.backingbeans;

public class LoginForm {
    private String username;
    private String password;
    private String usernameError;
    private String passwordError;

    public LoginForm() {
        this("", "");
    }

    public LoginForm(String username, String password) {
        this(username, password, "", "");
    }

    public LoginForm(String username, String password, String usernameError, String passwordError) {
        this.username = username;
        this.password = password;
        this.usernameError = usernameError;
        this.passwordError = passwordError;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsernameError() {
        return this.usernameError;
    }

    public void setUsernameError(String usernameError) {
        this.usernameError = usernameError;
    }

    public String getPasswordError() {
        return this.passwordError;
    }

    public void setPasswordError(String passwordError) {
        this.passwordError = passwordError;
    }
}
