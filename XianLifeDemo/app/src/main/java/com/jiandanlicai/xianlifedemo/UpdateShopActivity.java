package com.jiandanlicai.xianlifedemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

public class UpdateShopActivity extends FragmentActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_update_shop);
        TextView textView = (TextView) findViewById(R.id.tv_title);
        textView.setText("免费升级店铺");
        ImageView imageView = (ImageView) findViewById(R.id.iv_content_update_shop);
        imageView.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        startActivity(new Intent(this, YzhActivity.class));
    }
}
