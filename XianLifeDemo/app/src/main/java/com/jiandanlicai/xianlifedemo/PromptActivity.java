package com.jiandanlicai.xianlifedemo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import org.w3c.dom.Text;

public class PromptActivity extends Activity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_prompt);
        TextView tvTitle = (TextView) findViewById(R.id.tv_title);
        tvTitle.setText("返佣比例");
        findViewById(R.id.ib_back).setOnClickListener(this);
        ImageView imageView = (ImageView) findViewById(R.id.iv_content_prompt);
        imageView.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.ib_back:
                finish();
                break;
            case R.id.iv_content_prompt:
                startActivity(new Intent(this, UpdateShopActivity.class));
                break;
        }
    }
}
