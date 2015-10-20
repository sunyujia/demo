package com.jiandanlicai.xianlifedemo;

import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.ImageView;

public class AboutShelfActivity extends FragmentActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about_shelf);
        ImageView imageView = (ImageView) findViewById(R.id.iv_content_about_shelf);
        imageView.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        finish();
    }
}
