package com.mycompany.book.library.backend.endpoint;

import com.mycompany.book.library.backend.Book;
import com.mycompany.book.library.backend.BookNotFoundException;
import com.mycompany.book.library.backend.service.BookManager;
import java.text.MessageFormat;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("book")
@Stateless
public class BookEndpoint {

    @EJB
    private BookManager bookManager;

    @Path("add")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addBook(Book book) {
        if (!bookManager.validateBook(book)) {
            return Response.status(Response.Status.CONFLICT)
                .entity(MessageFormat.format("Book with ISBN {0} already exists!", book.getIsbn()))
                .build();
        }
        bookManager.addBook(book);
        return Response.ok().build();
    }

    @Path("delete")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteBook(long id) throws BookNotFoundException {
        Book book = bookManager.findById(id);
        bookManager.deleteBook(book);
        return Response.ok().build();
    }

    @Path("list-all")
    @GET
    public List<Book> listAllBooks() {
        return bookManager.getAllBooks();
    }

    @Path("{id}")
    @GET
    public Book findBookById(@PathParam("id") long id) throws BookNotFoundException {
        return bookManager.findById(id);
    }

    @Path("edit")
    @POST
    public Response editBook(@BeanParam Book book) {
        bookManager.editBook(book);
        return Response.ok().build();
    }

}
