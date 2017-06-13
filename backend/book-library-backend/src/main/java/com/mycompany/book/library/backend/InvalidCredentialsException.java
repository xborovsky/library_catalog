package com.mycompany.book.library.backend;

public class InvalidCredentialsException extends Exception  {
    private static final long serialVersionUID = 6109239115346573144L;

    public InvalidCredentialsException(String message) {
        super(message);
    }

    public InvalidCredentialsException(String message, Throwable t) {
        super(message, t);
    }

}
