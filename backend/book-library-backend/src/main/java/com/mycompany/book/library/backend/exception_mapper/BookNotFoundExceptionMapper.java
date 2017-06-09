package com.mycompany.book.library.backend.exception_mapper;

import com.mycompany.book.library.backend.BookNotFoundException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;

public class BookNotFoundExceptionMapper implements ExceptionMapper<BookNotFoundException> {

    @Override
    public Response toResponse(BookNotFoundException exception) {
        return Response.status(Response.Status.NOT_FOUND).build();
    }

}
