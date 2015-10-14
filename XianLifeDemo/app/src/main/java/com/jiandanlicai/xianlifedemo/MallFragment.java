package com.jiandanlicai.xianlifedemo;


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.view.ViewPager;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.viewpagerindicator.TabPageIndicator;

public class MallFragment extends Fragment {

    private static final String LOG_TAG = MallFragment.class.getSimpleName();
    private TabPageIndicator mIndicator;
    private ViewPager mViewPager;


    public static MallFragment newInstance() {
        return new MallFragment();
    }

    public MallFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_mall, container, false);
        mIndicator = (TabPageIndicator) view.findViewById(R.id.id_indicator);
        mViewPager = (ViewPager) view.findViewById(R.id.id_pager);
        return view;
    }


    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        FragmentPagerAdapter adapter = new TabAdapter(getActivity().getSupportFragmentManager());
        mViewPager.setOffscreenPageLimit(3);
        mViewPager.setAdapter(adapter);
        mIndicator.setViewPager(mViewPager, 0);
    }

    public class TabAdapter extends FragmentPagerAdapter {

        private String[] TITLES = new String[]{"商城首页", "全球甄选", "新品上市", "鲜Life理财"};

        private FragmentManager fm;

        public TabAdapter(FragmentManager fm) {
            super(fm);
            this.fm = fm;
        }


        @Override
        public Fragment getItem(int position) {
            Log.d("Adapter","getItem");
            return MallDetailsFragment.newInstance(position % TITLES.length);
        }

        @Override
        public Object instantiateItem(ViewGroup container, int position) {
            Log.d("Adapter","instantiateItem");
            Fragment fragment = (Fragment) super.instantiateItem(container, position);
            String tag = fragment.getTag();
            FragmentTransaction ft = fm.beginTransaction();
            ft.remove(fragment);
            fragment = MallDetailsFragment.newInstance(position % TITLES.length);
            ft.add(container.getId(), fragment, tag);
            ft.attach(fragment);
            ft.commit();
            return fragment;
        }

        @Override
        public int getItemPosition(Object object) {
            return POSITION_NONE;
        }

        @Override
        public CharSequence getPageTitle(int position) {
            return TITLES[position % TITLES.length];
        }


        @Override
        public int getCount() {
            return TITLES.length;
        }

    }

}
