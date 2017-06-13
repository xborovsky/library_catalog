package com.mycompany.book.library.backend.service;

import com.mycompany.book.library.backend.Book;
import com.mycompany.book.library.backend.BookNotFoundException;
import java.util.List;

public interface BookManager {

    void addBook(Book book);

    List<Book> getAllBooks();

    Book findByISBN(String isbn) throws BookNotFoundException;

    void deleteBook(Book book);

    boolean validateBook(Book book);

    Book findById(long id) throws BookNotFoundException;

    void editBook(Book book);

}
