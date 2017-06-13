package com.mycompany.book.library.backend.service;

import com.mycompany.book.library.backend.InvalidCredentialsException;
import com.mycompany.book.library.backend.User;

public interface UserManager {

    boolean login(User user) throws InvalidCredentialsException;

}
