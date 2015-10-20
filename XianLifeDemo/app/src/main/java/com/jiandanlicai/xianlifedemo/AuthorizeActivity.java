package com.jiandanlicai.xianlifedemo;

import android.support.v4.app.FragmentActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class AuthorizeActivity extends FragmentActivity implements View.OnClickListener, com.jiandanlicai.yzhlibrary.OnViewClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_authorize);
        ImageView imageView = (ImageView) findViewById(R.id.iv_content_authorize);
        imageView.setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        onViewClick(v);
    }

    @Override
    public void onViewClick(View view) {
        if (view.getId() == R.id.iv_content_authorize) {
            setResult(RESULT_OK);
            finish();
        }
    }
}
