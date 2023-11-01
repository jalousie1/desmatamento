package model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class DAO {

    public Connection conectar() {
        Connection con;
        try {
            String driver = "com.mysql.cj.jdbc.Driver";
            Class.forName(driver);
            String url = "jdbc:mysql://127.0.0.1:3306/impactos?useTimezone=true&serverTimezone=UTC";
            String user = "root";
            String password = "1234";
            con = DriverManager.getConnection(url, user, password);
            return con;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    public void inserirUsuario(JavaBeans usuario) {
        String create = "INSERT INTO registro (user, email, password) VALUES (?,?,?)";
        try {
            Connection con = conectar();
            PreparedStatement pst = con.prepareStatement(create);
            pst.setString(1, usuario.getUser());
            pst.setString(2, usuario.getEmail());
            pst.setString(3, usuario.getPassword());
            pst.execute();
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}