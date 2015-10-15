package com.jiandanlicai.xianlifedemo;


import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;

public class OrderFragment extends Fragment implements View.OnClickListener {

    private static final String LOG_TAG = OrderFragment.class.getSimpleName();

    private OnViewClickListener mCallback;

    public static OrderFragment newInstance() {
        return new OrderFragment();
    }

    public OrderFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
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
        View view = inflater.inflate(R.layout.fragment_order, container, false);
        ImageView imageView = (ImageView) view.findViewById(R.id.iv_order_content);
        imageView.setImageResource(R.drawable.order);
        imageView.setOnClickListener(this);
        Button button = (Button) view.findViewById(R.id.confirm_order);
        button.setOnClickListener(this);
        return view;
    }


    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
    }

    @Override
    public void onClick(View v) {
        if (mCallback != null) {
            mCallback.onViewClick(v.getId());
        }
    }
}
