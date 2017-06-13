package com.mycompany.book.library.backend;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Book {

    private long id;
    private String title;
    private int pageCount;
    @JsonProperty("ISBN")
    private String isbn;
    private boolean checkedOut;

    public Book() {}

    public Book(long id, String title, int pageCount, String isbn, boolean checkedOut) {
        this.id = id;
        this.title = title;
        this.pageCount = pageCount;
        this.isbn = isbn;
        this.checkedOut = checkedOut;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "Book{" + "title=" + title + ", pageCount=" + pageCount + ", isbn=" + isbn + ", checkedOut=" + checkedOut + '}';
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 59 * hash + (int) (this.id ^ (this.id >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Book other = (Book) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

}
