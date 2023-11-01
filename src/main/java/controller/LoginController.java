package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.DAO;

@WebServlet("/Login")
public class LoginController extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        DAO dao = new DAO();
        try (Connection con = dao.conectar()) {

            String sql = "SELECT * FROM registro WHERE email = ?";
            try (PreparedStatement pst = con.prepareStatement(sql)) {
                pst.setString(1, email);

                try (ResultSet rs = pst.executeQuery()) {
                    if (rs.next()) {
                        String senhaBanco = rs.getString("password");

                        if (senhaBanco.equals(password)) {
                            // Autenticação bem-sucedida, redireciona para a página inicial
                            response.sendRedirect("index.html");
                        } else {
                            // Senha incorreta, exibe mensagem de erro
                            response.setContentType("text/html");
                            PrintWriter out = response.getWriter();
                            out.println("<h1>Senha incorreta!</h1>");
                        }
                    } else {
                        // Usuário não encontrado, exibe mensagem de erro
                        response.setContentType("text/html");
                        PrintWriter out = response.getWriter();
                        out.println("<h1>Usuário não encontrado!</h1>");
                    }
                }
            }
        } catch (SQLException e) {
            // Log do erro no servidor
            e.printStackTrace();

            // Exibe uma mensagem de erro genérica para o usuário
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            out.println("<h1>Ocorreu um erro durante a autenticação!</h1>");
        }
    }
}
