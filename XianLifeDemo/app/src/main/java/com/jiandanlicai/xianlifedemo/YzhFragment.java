package com.jiandanlicai.xianlifedemo;


import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

public class YzhFragment extends Fragment implements View.OnClickListener {
    //我
    private OnViewClickListener mCallback;

    private boolean mIsLogin;

    public static YzhFragment newInstance(boolean isLogin) {
        YzhFragment fragment = new YzhFragment();
        Bundle bundle = new Bundle();
        bundle.putBoolean("login", isLogin);
        fragment.setArguments(bundle);
        return fragment;
    }

    public YzhFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mIsLogin = getArguments().getBoolean("login");
        }
    }


    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        try {
            mCallback = (OnViewClickListener) context;
        } catch (ClassCastException e) {
            throw new ClassCastException(context.toString()
                    + " must implement OnViewClickListener");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_yzh, container, false);
        ImageView imageView = (ImageView) view.findViewById(R.id.iv_content_yzh);
        if (mIsLogin) {
            imageView.setImageResource(R.drawable.yunzhanghu);
        } else {
            imageView.setImageResource(R.drawable.yunzhanghu_unlogin);
        }
        imageView.setOnClickListener(this);
        return view;
    }

    @Override
    public void onClick(View v) {
        if (mCallback != null) {
            mCallback.onViewClick(v.getId());
        }
    }
}
