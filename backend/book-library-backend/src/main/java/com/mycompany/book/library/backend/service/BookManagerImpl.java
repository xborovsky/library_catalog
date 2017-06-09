package com.mycompany.book.library.backend.service;

import com.mycompany.book.library.backend.Book;
import com.mycompany.book.library.backend.BookNotFoundException;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.Stateless;

@Stateless
public class BookManagerImpl implements BookManager {

    private final List<Book> books = new ArrayList<>();

    @PostConstruct
    public void init() {
        books.add(new Book("Book 1", 124, "978-1-4028-9462-6", false));
        books.add(new Book("Book 2", 657, "123-2-9874-4652-1", false));
        books.add(new Book("Book 3", 361, "456-0-1482-1669-2", false));
    }

    @Override
    public void addBook(Book book) {
        books.add(book);
    }

    @Override
    public List<Book> getAllBooks() {
        return books;
    }

    @Override
    public Book findByISBN(String isbn) throws BookNotFoundException {
        for (Book book : books) {
            if (book.getIsbn().equals(isbn)) {
                return book;
            }
        }
        throw new BookNotFoundException(MessageFormat.format("Book with ISBN {0} not found!", isbn));
    }

    @Override
    public void deleteBook(Book book) {
        
    }

}
