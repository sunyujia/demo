package com.jiandanlicai.xianlifedemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import com.jiandanlicai.yzhlibrary.YzhActivity;

public class UpdateShopActivity extends FragmentActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_update_shop);
        TextView textView = (TextView) findViewById(R.id.tv_title);
        textView.setText("免费升级店铺");
        ImageView imageView = (ImageView) findViewById(R.id.iv_content_update_shop);
        imageView.setOnClickListener(this);
        ImageButton ibBack = (ImageButton) findViewById(R.id.ib_back);
        ibBack.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.ib_back:
                finish();
                break;
            case R.id.iv_content_update_shop:
                Intent intent = new Intent(this, YzhActivity.class);
                intent.putExtra("from", 1);
                startActivity(intent);
                break;
        }
    }
}
