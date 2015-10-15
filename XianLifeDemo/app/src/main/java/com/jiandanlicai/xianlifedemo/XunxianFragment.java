package com.jiandanlicai.xianlifedemo;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

/**
 * Created by max on 15/10/8.
 *
 */
public class XunxianFragment extends Fragment {

    public static XunxianFragment newInstance() {
        return new XunxianFragment();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_xunxian, null);
    }
}
