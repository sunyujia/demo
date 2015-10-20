package com.jiandanlicai.xianlifedemo;


import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;

public class GoodDetailFragment extends Fragment implements View.OnClickListener {

    private static final String LOG_TAG = GoodDetailFragment.class.getSimpleName();

    private OnViewClickListener mCallback;

    public static GoodDetailFragment newInstance() {
        return new GoodDetailFragment();
    }

    public GoodDetailFragment() {
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
        View view = inflater.inflate(R.layout.fragment_good_detail, container, false);
        Button button = (Button) view.findViewById(R.id.stock);
        button.setOnClickListener(this);
        ImageButton cart = (ImageButton) view.findViewById(R.id.ib_go_buy);
        cart.setOnClickListener(this);
        view.findViewById(R.id.join_buy).setOnClickListener(this);
        ImageView imageView = (ImageView) view.findViewById(R.id.iv_content_detail);
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
