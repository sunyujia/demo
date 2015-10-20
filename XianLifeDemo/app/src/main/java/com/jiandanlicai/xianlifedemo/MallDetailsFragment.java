package com.jiandanlicai.xianlifedemo;


import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;
import android.widget.Toast;

public class MallDetailsFragment extends Fragment {

    private static final String LOG_TAG = MallDetailsFragment.class.getSimpleName();

    private int position;

    public static MallDetailsFragment newInstance(int position) {
        MallDetailsFragment fragment = new MallDetailsFragment();
        Bundle args = new Bundle();
        args.putInt("position", position);
        fragment.setArguments(args);
        return fragment;
    }

    public MallDetailsFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            position = getArguments().getInt("position");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_mall_main, container, false);
        ImageView banner = (ImageView) view.findViewById(R.id.mall_banner);
        ImageView content = (ImageView) view.findViewById(R.id.iv_content);
        switch (position) {
            case 0:
                banner.setVisibility(View.VISIBLE);
                banner.setImageResource(R.drawable.banner);
                content.setImageResource(R.drawable.mall);
                break;
            case 1:
                banner.setVisibility(View.GONE);
                content.setImageResource(R.drawable.mall1);
                break;
            case 2:
                banner.setVisibility(View.GONE);
                content.setImageResource(R.drawable.mall2);
                break;
        }
        banner.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                startActivity(new Intent(getActivity(), NutsActivity.class));
            }
        });
        content.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (position == 2) {
                    startActivity(new Intent(getActivity(), DetailActivity.class));
//                    Toast.makeText(getActivity(), "图片跳转2", Toast.LENGTH_SHORT).show();
                }
            }
        });
//        WebView webView = (WebView) view.findViewById(R.id.web_view);
//        webView.getSettings().setJavaScriptEnabled(true);
//        webView.setWebViewClient(new WebViewClient() {
//            @Override
//            public boolean shouldOverrideUrlLoading(WebView view, String url) {
//                return true;
//            }
//        });
//        String url = null;
//        switch (position) {
//            case 0:
//                url = "file:///android_asset/mall.html";
//                break;
//            case 1:
//                url = "file:///android_asset/global.html";
//                break;
//            case 2:
//                url = "file:///android_asset/new.html";
//                break;
//            case 3:
//                url = "http://sdk.jiandanlicai.com/";
//                break;
//        }
//        if (!TextUtils.isEmpty(url)) {
//            webView.loadUrl(url);
//        }
        return view;
    }

}
