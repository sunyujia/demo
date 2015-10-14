package com.jiandanlicai.xianlifedemo;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by max on 15/4/1.
 */
public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerAdapter.ViewHolder> {

    private List<ViewItem> mList = new ArrayList<ViewItem>();

    private Context mContext;

    private boolean mCanClick;

    public static class ViewHolder extends RecyclerView.ViewHolder {

        public View mItemView;

        public TextView mTvText;
        public ImageView mIvIcon;

        public ViewHolder(View itemView) {
            super(itemView);
            mItemView = itemView;
            mTvText = (TextView) itemView.findViewById(R.id.tv);
            mIvIcon = (ImageView) itemView.findViewById(R.id.iv);
        }
    }

    public RecyclerAdapter(Context context, List<ViewItem> list, boolean canClick) {
        mContext = context;
        mList = list;
        mCanClick = canClick;
    }


    @Override
    public RecyclerAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.view_gridview_item, parent, false);
        return new ViewHolder(itemView);
    }


    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        if (mList.size() > 0) {
            holder.mTvText.setText(mList.get(position).getTitle());
            holder.mIvIcon.setImageResource(mList.get(position).getIcon());
            if (position == 2 && mCanClick) {
                holder.itemView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Toast.makeText(mContext, "test", Toast.LENGTH_SHORT).show();
                    }
                });
            }
        }

    }

    @Override
    public int getItemCount() {
        return mList.size();
    }
}
