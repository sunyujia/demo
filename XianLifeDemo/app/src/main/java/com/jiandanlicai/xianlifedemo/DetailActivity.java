package com.jiandanlicai.xianlifedemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

public class DetailActivity extends FragmentActivity implements OnViewClickListener, View.OnClickListener {

    private TextView mTvTitle;

    private View mTitleLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_good_detail);
        mTitleLayout = findViewById(R.id.title_layout);
        ImageButton button = (ImageButton) findViewById(R.id.ib_back);
        button.setOnClickListener(this);
        mTvTitle = (TextView) findViewById(R.id.tv_title);
        mTvTitle.setText("商品详情");
        getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, GoodDetailFragment.newInstance()).commit();
    }

    @Override
    public void onViewClick(int id) {
        switch (id) {
            case R.id.ib_back:
                finish();
                break;
            case R.id.iv_content:
                mTvTitle.setText("商品详情");
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, GoodDetailFragment.newInstance()).commit();
                break;
            case R.id.stock:
                //进入云账户页面
                startActivity(new Intent(this, NutsActivity.class));
                break;
            case R.id.ib_go_buy:
                mTitleLayout.setVisibility(View.GONE);
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, CartFragment.newInstance()).commit();
                //进入购物车页面
                break;
            case R.id.iv_cart_content:
                //进入订单页面
                startActivity(new Intent(this, OrderActivity.class));
                break;
            default:
                mTitleLayout.setVisibility(View.VISIBLE);
                break;
        }
    }

    @Override
    public void onClick(View v) {
        onViewClick(v.getId());
    }
}
