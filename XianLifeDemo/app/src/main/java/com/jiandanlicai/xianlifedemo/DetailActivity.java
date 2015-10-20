package com.jiandanlicai.xianlifedemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

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
        getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, GoodDetailFragment.newInstance(), "good").commit();
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
                //包邮活动
                startActivityForResult(new Intent(this, AuthorizeActivity.class), 10);
                break;
            case R.id.ib_go_buy:
                mTitleLayout.setVisibility(View.GONE);
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, CartFragment.newInstance()).commit();
                //进入购物车页面
                break;
            case R.id.join_buy:
                mTitleLayout.setVisibility(View.GONE);
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, CartFragment.newInstance()).commit();
                break;
            case R.id.iv_cart_content:
                //进入订单页面
                startActivityForResult(new Intent(this, OrderActivity.class), 11);
                break;
            default:
                mTitleLayout.setVisibility(View.VISIBLE);
                break;
        }

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 10) {
            Toast.makeText(this, "授权成功,获得包邮券", Toast.LENGTH_LONG).show();
            GoodDetailFragment fragment = (GoodDetailFragment) getSupportFragmentManager().findFragmentByTag("good");
            fragment.getView().findViewById(R.id.stock).setVisibility(View.GONE);
        } else {
            finish();
        }
    }

    @Override
    public void onClick(View v) {
        onViewClick(v.getId());
    }
}
