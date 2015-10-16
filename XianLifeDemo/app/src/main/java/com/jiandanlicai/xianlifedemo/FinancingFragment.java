package com.jiandanlicai.xianlifedemo;


import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

public class FinancingFragment extends Fragment implements View.OnClickListener {


    public static FinancingFragment newInstance() {
        return new FinancingFragment();
    }

    public FinancingFragment() {
        // Required empty public constructor
    }


    private OnViewClickListener mCallback;

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
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_financing, container, false);
        ImageView imageView = (ImageView) view.findViewById(R.id.iv_content_financing);
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
