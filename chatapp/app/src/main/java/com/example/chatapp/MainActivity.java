package com.example.chatapp;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.app.Application;
import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;

import com.example.chatapp.databinding.ActivityMainBinding;
import com.google.android.gms.tasks.OnSuccessListener;

public class MainActivity extends Application {
    public static Context context;

    @Override
    public void onCreate() {
        super.onCreate();
        context = getApplicationContext();
    }
}