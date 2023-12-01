package controller;

import java.io.IOException;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.DAO;
import model.JavaBeans;

@WebServlet("/Controller")
public class RegistroController extends HttpServlet {
    private static final long serialVersionUID = 1L;
    JavaBeans usuario = new JavaBeans();
    DAO dao = new DAO();

    public RegistroController() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // ...
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Coleta os dados inseridos no formulário
        String user = request.getParameter("user");
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // Atribui os dados ao objeto usuário
        usuario.setUser(user);
        usuario.setEmail(email);
        usuario.setPassword(password);

        // Insere o novo usuário no banco de dados
        dao.inserirUsuario(usuario);

        // Redireciona o usuário para a página inicial após o cadastro
        response.sendRedirect("index.html");
    }
}
