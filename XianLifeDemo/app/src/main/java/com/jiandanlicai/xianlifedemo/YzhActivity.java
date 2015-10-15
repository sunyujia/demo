package com.jiandanlicai.xianlifedemo;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.widget.RadioGroup;

public class YzhActivity extends FragmentActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_yzh);
        if (savedInstanceState == null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.main_content, YzhFragment.newInstance()).commit();
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
            case R.id.rb_yzh:
                fragment = YzhFragment.newInstance();
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
}
