package com.jiandanlicai.xianlifedemo;

import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

public class OrderActivity extends FragmentActivity implements OnViewClickListener, View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_good_detail);
        ImageButton button = (ImageButton) findViewById(R.id.ib_back);
        button.setOnClickListener(this);
        TextView mTvTitle = (TextView) findViewById(R.id.tv_title);
        mTvTitle.setText("订单确定");
        getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, OrderFragment.newInstance()).commit();
    }

    @Override
    public void onViewClick(int id) {
        switch (id) {
            case R.id.ib_back:
                finish();
                break;
            case R.id.confirm_order:
                //确认订单点击
                Toast.makeText(this, "点击确认订单", Toast.LENGTH_SHORT).show();
                break;
        }
    }

    @Override
    public void onClick(View v) {
        onViewClick(v.getId());
    }
}
