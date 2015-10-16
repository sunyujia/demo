package com.jiandanlicai.xianlifedemo;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

public class YzhActivity extends FragmentActivity implements View.OnClickListener, OnViewClickListener {

    private int mTabTag = 1;

    private RadioButton mRB;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_yzh);
        TextView tvBack = (TextView) findViewById(R.id.tv_back);
        tvBack.setOnClickListener(this);
        if (savedInstanceState == null) {
            MyApplication.sIsLogin = false;
            getSupportFragmentManager().beginTransaction().replace(R.id.main_content, YzhFragment.newInstance(MyApplication.sIsLogin)).commit();
        }
        RadioGroup radioGroup = (RadioGroup) findViewById(R.id.tab_rg);
        mRB = (RadioButton) findViewById(R.id.rb_yzh);
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
            case R.id.rb_yzh:
                fragment = YzhFragment.newInstance(MyApplication.sIsLogin);
                break;
            case R.id.rb_financing:
                fragment = FinancingFragment.newInstance();
                break;
            case R.id.rb_personal:
                fragment = PersonalFragment.newInstance();
                break;
        }
        if (fragment != null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.main_content, fragment).commit();
        }
    }

    @Override
    public void onClick(View v) {
        onViewClick(v.getId());
    }

    @Override
    public void onViewClick(int id) {
        Fragment fragment = null;
        switch (id) {
            case R.id.tv_back:
                finish();
                break;
            case R.id.iv_content_yzh:
                if (MyApplication.sIsLogin) {//已登录
                    fragment = FinanciingDetailFragment.newInstance();
                } else {//未登录
                    fragment = RegisterFragment.newInstance();
                }
                break;
            case R.id.iv_content_register1:
                fragment = Register2Fragment.newInstance();
                break;
            case R.id.iv_content_register2:
                fragment = Register3Fragment.newInstance();
                break;
            case R.id.iv_content_register3:
                MyApplication.sIsLogin = true;
                fragment = YzhFragment.newInstance(true);
                break;
            case R.id.btn_buy:
                fragment = BuyOneFragment.newInstance();
                break;
            case R.id.iv_content_buy:
                fragment = BuyTwoFragment.newInstance();
                break;
            case R.id.iv_content_buy2:
                fragment = BuyThreeFragment.newInstance();
                break;
            case R.id.iv_content_buy3:
                if (mTabTag == 2) {
                    mRB.setChecked(true);
                }
                fragment = YzhFragment.newInstance(MyApplication.sIsLogin);
                break;
            case R.id.iv_content_financing:
                mTabTag = 2;
                fragment = FinanciingDetailFragment.newInstance();
                break;
            default:
                mTabTag = 1;
                break;
        }
        if (fragment != null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.main_content, fragment).commit();
        }
    }
}
