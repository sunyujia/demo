package com.jiandanlicai.xianlifedemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentTransaction;
import android.widget.RadioGroup;
import android.widget.Toast;

public class MainActivity extends FragmentActivity implements OnViewClickListener {

    MallFragment mallFragment;

    MyFragment myFragment;

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

    private void changeFragment(int checkedId) {
        FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
        hideFragment(ft);
        switch (checkedId) {
            case R.id.rb_first:
                if (mallFragment == null) {
                    mallFragment = MallFragment.newInstance();
                    ft.add(R.id.main_content, mallFragment);
                } else {
                    ft.show(mallFragment);
                }
                break;
            case R.id.rb_fifth:
                if (myFragment == null) {
                    myFragment = MyFragment.newInstance();
                    ft.add(R.id.main_content, myFragment);
                } else {
                    ft.show(myFragment);
                }
                break;
        }
        ft.commit();
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

    private void hideFragment(FragmentTransaction transaction) {
        if (mallFragment != null) {
            transaction.hide(mallFragment);
        }
        if (myFragment != null) {
            transaction.hide(myFragment);
        }
    }


    @Override
    public void onViewClick(int id) {
        if (id == R.id.iv_cart_content) {
            //跳转到订单界面
            startActivity(new Intent(this, OrderActivity.class));
        }
        if (id == R.id.new_open_shop_iv_gonglve_banner) {
            //底部banner
            Toast.makeText(this, "banner", Toast.LENGTH_SHORT).show();
        }
        if (id == R.id.new_open_shop_tv_prompt) {
            //返佣比例
            Toast.makeText(this, "prompt", Toast.LENGTH_SHORT).show();
        }
        if (id == R.id.new_open_shop_free_update) {
            //店铺升级
            Toast.makeText(this, "update", Toast.LENGTH_SHORT).show();
        }
    }
}
