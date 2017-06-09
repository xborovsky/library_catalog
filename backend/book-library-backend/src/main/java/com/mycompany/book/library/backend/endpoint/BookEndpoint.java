package com.mycompany.book.library.backend.endpoint;

import com.mycompany.book.library.backend.Book;
import com.mycompany.book.library.backend.BookNotFoundException;
import com.mycompany.book.library.backend.service.BookManager;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.BeanParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

@Path("book")
@Stateless
public class BookEndpoint {

    @EJB
    private BookManager bookManager;

    @Path("add")
    @POST
    public Response addBook(@BeanParam Book book) {
        bookManager.addBook(book);
        return Response.ok().build();
    }

    @Path("delete")
    @POST
    public Response deleteBook(@PathParam("isbn") String isbn) throws BookNotFoundException {
        Book book = bookManager.findByISBN(isbn);
        bookManager.deleteBook(book);
        return Response.ok().build();
    }

    @Path("list-all")
    @GET
    public List<Book> listAllBooks() {
        return bookManager.getAllBooks();
    }

}
