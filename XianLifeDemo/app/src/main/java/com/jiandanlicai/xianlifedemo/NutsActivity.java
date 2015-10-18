package com.jiandanlicai.xianlifedemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.jiandanlicai.yzhlibrary.YzhActivity;

public class NutsActivity extends FragmentActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_nuts);
        TextView textView = (TextView) findViewById(R.id.tv_title);
        textView.setText("免费领好礼");
        ImageView imageView = (ImageView) findViewById(R.id.iv_content_nuts);
        imageView.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        startActivity(new Intent(this, YzhActivity.class));
    }
}
