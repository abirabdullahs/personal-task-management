package com.abir.kaj;

import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;

/** 4x2 widget: next task with countdown + the following 3 tasks. */
public class KajListWidget extends AppWidgetProvider {
    @Override
    public void onUpdate(Context c, AppWidgetManager m, int[] ids) {
        KajWidgetUtil.refreshAll(c);
    }

    @Override
    public void onEnabled(Context c) {
        KajWidgetUtil.refreshAll(c);
    }

    @Override
    public void onReceive(Context c, Intent i) {
        super.onReceive(c, i);
        if (KajWidgetUtil.REFRESH.equals(i.getAction())) KajWidgetUtil.refreshAll(c);
    }
}
