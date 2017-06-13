package com.mycompany.book.library.backend.exception_mapper;

import com.mycompany.book.library.backend.InvalidCredentialsException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class InvalidCredentialsExceptionMapper implements ExceptionMapper<InvalidCredentialsException> {

    @Override
    public Response toResponse(InvalidCredentialsException exception) {
        return Response
                .status(Response.Status.UNAUTHORIZED)
                .entity(exception.getMessage())
                .build();
    }

}
