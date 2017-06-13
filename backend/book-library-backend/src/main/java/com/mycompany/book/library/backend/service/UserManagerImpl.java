package com.mycompany.book.library.backend.service;

import com.mycompany.book.library.backend.InvalidCredentialsException;
import com.mycompany.book.library.backend.User;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.PostConstruct;
import javax.ejb.Stateless;

@Stateless
public class UserManagerImpl implements UserManager {

    private final Map<String, String> loginInfo = new HashMap<>();

    @PostConstruct
    public void initLoginInfo() {
        loginInfo.put("test", "test");
    }

    @Override
    public boolean login(User user) throws InvalidCredentialsException {
        if (loginInfo.containsKey(user.getUsername()) && loginInfo.get(user.getUsername()).equals(user.getPassword())) {
            return true;
        }

        throw new InvalidCredentialsException("Invalid credentials!");
    }

}
