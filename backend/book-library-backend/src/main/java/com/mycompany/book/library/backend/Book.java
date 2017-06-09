package com.mycompany.book.library.backend;

import javax.ws.rs.QueryParam;

public class Book {

    @QueryParam("title")
    private String title;
    @QueryParam("pageCount")
    private int pageCount;
    @QueryParam("isbn")
    private String isbn;
    private boolean checkedOut;

    public Book() {}

    public Book(String title, int pageCount, String isbn, boolean checkedOut) {
        this.title = title;
        this.pageCount = pageCount;
        this.isbn = isbn;
        this.checkedOut = checkedOut;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public boolean isCheckedOut() {
        return checkedOut;
    }

    public void setCheckedOut(boolean checkedOut) {
        this.checkedOut = checkedOut;
    }

}
