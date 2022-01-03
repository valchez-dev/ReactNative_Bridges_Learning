package com.bridges;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ToastModule extends ReactContextBaseJavaModule {

    //constructor
    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    //Mandatory function getName that specifies the module name
    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }

    //Custom function that we are going to export to JS
    @ReactMethod
    public void showToast(String message){
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
    }
}
