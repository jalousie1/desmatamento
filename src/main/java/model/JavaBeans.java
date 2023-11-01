package model;

public class JavaBeans {

    private String user;

    private String email;

    private String password;


    public JavaBeans() {
    }

    public JavaBeans(String user, String email, String password) {
        this.user = user;
        this.email = email;
        this.password = password;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "JavaBeans{" +
                "user='" + user + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    public boolean isValid() {
        return password != null && password.trim().length() > 0;
    }
}
