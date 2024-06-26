package com.example.chatapp.Models.MessageEntity;


import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.Query;

import java.util.List;

@Dao
public interface MessageDao {

    @Query("SELECT * FROM message")
    List<Message> getAllMessages();

    @Insert
    void insert(Message message);

    // DELETE ALL
    @Query("DELETE FROM message")
    void deleteAll();

    // Add other necessary methods for updating, deleting, or querying messages

}
