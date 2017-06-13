package com.mycompany.book.library.backend.endpoint;

import com.mycompany.book.library.backend.InvalidCredentialsException;
import com.mycompany.book.library.backend.User;
import com.mycompany.book.library.backend.service.UserManager;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("login")
@Stateless
public class LoginEndpoint {

    @EJB
    private UserManager userManager;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(@Context HttpServletRequest request, User user) throws InvalidCredentialsException {
        userManager.login(user);

        HttpSession session = request.getSession();
        session.invalidate();
        session = request.getSession(true);

        return Response.ok(session.getId()).build();
    }

}
