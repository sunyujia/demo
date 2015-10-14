package com.jiandanlicai.xianlifedemo;


import android.content.res.TypedArray;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by max on 15/10/8.
 */
public class ShopFragment extends Fragment {

    private ViewPager mViewPager;
    private ImageView[] mIndicators;
    private int mCurrentIndex;
    private ArrayList<RecyclerView> mViewList;

    public static ShopFragment newInstance() {
        return new ShopFragment();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        RecyclerView recyclerView = new RecyclerView(getActivity());
        GridLayoutManager manager = new GridLayoutManager(getActivity(), 3);
        recyclerView.setLayoutManager(manager);
        RecyclerAdapter adapter = new RecyclerAdapter(getActivity(), initItems(0, 5), false);
        recyclerView.setAdapter(adapter);
        RecyclerView recyclerView1 = new RecyclerView(getActivity());
        GridLayoutManager manager1 = new GridLayoutManager(getActivity(), 3);
        recyclerView1.setLayoutManager(manager1);
        RecyclerAdapter adapter1 = new RecyclerAdapter(getActivity(), initItems(6, 8), true);
        recyclerView1.setAdapter(adapter1);
        mViewList = new ArrayList<RecyclerView>();
        mViewList.add(recyclerView);
        mViewList.add(recyclerView1);
        View rootView = inflater.inflate(R.layout.fragment_new_open_shop, null);
        ViewPager viewPager = (ViewPager) rootView.findViewById(R.id.new_open_shop_viewpager);
        viewPager.setAdapter(new ViewPagerAdapter(mViewList));
        viewPager.setOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

            }

            @Override
            public void onPageSelected(int position) {
                setCurIndicator(position);
            }

            @Override
            public void onPageScrollStateChanged(int state) {

            }
        });
        initIndicator(rootView);
        return rootView;
    }


    private void initIndicator(View rootView) {
        LinearLayout linearLayout = (LinearLayout) rootView.findViewById(R.id.indicator_layout);
        mIndicators = new ImageView[2];
        for (int i = 0; i < mIndicators.length; i++) {
            mIndicators[i] = (ImageView) linearLayout.getChildAt(i);
            mIndicators[i].setEnabled(false);
            mIndicators[i].setTag(i);
        }
        mCurrentIndex = 0;
        mIndicators[mCurrentIndex].setEnabled(true);
    }

    private List<ViewItem> initItems(int start, int end) {
        List<ViewItem> mList = new ArrayList<ViewItem>();
        String[] titles = getActivity().getResources().getStringArray(R.array.title_array);
        TypedArray icons = getActivity().getResources().obtainTypedArray(R.array.image_array);
        for (int i = start; i < end + 1; i++) {
            ViewItem item = new ViewItem(icons.getResourceId(i, -1), titles[i]);
            mList.add(item);
        }
        icons.recycle();
        return mList;
    }


    private void setCurIndicator(int position) {
        if (position < 0 || position > 1 || mCurrentIndex == position) {
            return;
        }
        mIndicators[position].setEnabled(true);
        mIndicators[mCurrentIndex].setEnabled(false);
        mCurrentIndex = position;
    }


    class ViewPagerAdapter extends PagerAdapter {
        private ArrayList<RecyclerView> mViews;

        public ViewPagerAdapter(ArrayList<RecyclerView> mViews) {
            this.mViews = mViews;
        }

        @Override
        public Object instantiateItem(ViewGroup container, int position) {
            container.addView(mViews.get(position), 0);
            return mViews.get(position);
        }

        @Override
        public void destroyItem(ViewGroup container, int position, Object object) {
            container.removeView(mViews.get(position));
        }

        @Override
        public int getCount() {
            return mViews.size();
        }


        @Override
        public boolean isViewFromObject(View view, Object o) {
            return view == o;
        }


    }

}
