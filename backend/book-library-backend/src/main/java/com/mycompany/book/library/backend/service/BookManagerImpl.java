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
        books.add(new Book(1L, "Book 1", 124, "978-1-4028-9462-6", false));
        books.add(new Book(2L, "Book 2", 657, "123-2-9874-4652-1", false));
        books.add(new Book(3L, "Book 3", 361, "456-0-1482-1669-2", false));
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
        books.remove(book);
    }

    @Override
    public boolean validateBook(Book book) {
        try {
            return findByISBN(book.getIsbn()) == null;
        } catch (BookNotFoundException e) {
            return true;
        }
    }

    @Override
    public Book findById(long id) throws BookNotFoundException {
        for (Book book : books) {
            if (book.getId() == id) {
                return book;
            }
        }

        throw new BookNotFoundException("Book with id " + id + " not found!");
    }

    @Override
    public void editBook(Book book) {
        // TODO validace??
        for (Book b : books) {
            if (b.equals(book)) {
                b.setPageCount(book.getPageCount());
                b.setTitle(book.getTitle());
                b.setIsbn(book.getIsbn());
            }
        }
    }

}
