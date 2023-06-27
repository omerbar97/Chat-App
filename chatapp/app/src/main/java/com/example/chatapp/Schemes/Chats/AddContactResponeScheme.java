package com.example.chatapp.Schemes.Chats;

import com.example.chatapp.Schemes.User;

public class AddContactResponeScheme {
    private int id;

    private User user;

    public AddContactResponeScheme(int id, User user) {
        this.id = id;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
