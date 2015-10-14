package com.jiandanlicai.xianlifedemo;

/**
 * Created by max on 15/10/14.
 */
public class ViewItem {

    private int icon;

    private String title;

    public ViewItem(int icon, String title) {
        this.icon = icon;
        this.title = title;
    }

    public int getIcon() {
        return icon;
    }

    public void setIcon(int icon) {
        this.icon = icon;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
