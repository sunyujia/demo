package com.jiandanlicai.xianlifedemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.widget.RadioGroup;
import android.widget.Toast;

import com.jiandanlicai.yzhlibrary.SummaryActivity;

public class MainActivity extends FragmentActivity implements OnViewClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        if (savedInstanceState == null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.main_content, MallFragment.newInstance()).commit();
        }
        RadioGroup radioGroup = (RadioGroup) findViewById(R.id.tab_rg);
        radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                changeContent(checkedId);
            }
        });
    }

    private void changeContent(int checkedId) {
        Fragment fragment = null;
        switch (checkedId) {
            case R.id.rb_first:
                fragment = MallFragment.newInstance();
                break;
            case R.id.rb_second:
                fragment = CartFragment.newInstance();
                break;
            case R.id.rb_third:
                fragment = XunxianFragment.newInstance();
                break;
            case R.id.rb_forth:
                fragment = ShopFragment.newInstance();
                break;
            case R.id.rb_fifth:
                fragment = MyFragment.newInstance();
                break;
        }
        if (fragment != null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.main_content, fragment).commit();
        }
    }


    @Override
    public void onViewClick(int id) {
        if (id == R.id.iv_cart_content) {
            //跳转到订单界面
            startActivity(new Intent(this, OrderActivity.class));
        }
//        if (id == R.id.new_open_shop_iv_gonglve_banner) {
//            底部banner
//            startActivity(new Intent(this, YzhActivity.class));
//        }
        if (id == R.id.new_open_shop_tv_prompt) {
            //返佣比例
            startActivity(new Intent(this, PromptActivity.class));
        }
        if (id == R.id.new_open_shop_free_update) {
            //店铺升级
            startActivity(new Intent(this, UpdateShopActivity.class));
        }
        if (id == R.id.iv_content_xunxian) {
            //startActivity(new Intent(this, YzhActivity.class));
        }
        if (id == R.id.new_open_shop_shlves_more) {
            //更多货架说明页
            startActivity(new Intent(this, AboutShelfActivity.class));
        }
        if (id == R.id.my_shop_layout) {
            startActivity(new Intent(this, SummaryActivity.class));
        }

    }
}
