package com.jiandanlicai.xianlifedemo;


import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

public class GoodsListFragment extends Fragment implements View.OnClickListener{

    private static final String LOG_TAG = GoodsListFragment.class.getSimpleName();

    private OnViewClickListener mCallback;

    public static GoodsListFragment newInstance() {
        return new GoodsListFragment();
    }

    public GoodsListFragment() {
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
        View view = inflater.inflate(R.layout.fragment_good_list, container, false);
        ImageView imageView = (ImageView) view.findViewById(R.id.iv_content);
        imageView.setImageResource(R.drawable.good_list);
        imageView.setOnClickListener(this);
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
