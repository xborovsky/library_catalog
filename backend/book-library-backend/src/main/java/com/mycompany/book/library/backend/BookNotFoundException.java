package com.mycompany.book.library.backend;

public class BookNotFoundException extends Exception {

    private static final long serialVersionUID = 6423643319936972273L;

    public BookNotFoundException(String message) {
        super(message);
    }

    public BookNotFoundException(String message, Throwable t) {
        super(message, t);
    }

}
