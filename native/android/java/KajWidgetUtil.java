package com.abir.kaj;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.os.SystemClock;
import android.view.View;
import android.widget.RemoteViews;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/** Shared widget logic: read stored data, build RemoteViews, schedule the next refresh. */
final class KajWidgetUtil {
    static final String PREFS = "kaj_widget";
    static final String KEY = "data";
    static final String REFRESH = "com.abir.kaj.WIDGET_REFRESH";
    private static final long DAY = 86400000L, HOUR = 3600000L, MIN = 60000L;

    static class Item {
        String title = "", time = "", day = "";
        long at;
        int color = Color.WHITE;
    }

    static class Data {
        boolean bn;
        String label = "Next task", listLabel = "Upcoming", empty = "No upcoming tasks";
        String d = "d", h = "h", m = "min";
        List<Item> items = new ArrayList<>();
    }

    private KajWidgetUtil() {}

    /** Loads stored data and drops tasks whose start time already passed. */
    static Data load(Context c) {
        Data d = new Data();
        try {
            String s = c.getSharedPreferences(PREFS, 0).getString(KEY, "");
            if (s == null || s.isEmpty()) return d;
            JSONObject o = new JSONObject(s);
            d.bn = o.optBoolean("bn");
            d.label = o.optString("label", d.label);
            d.listLabel = o.optString("listLabel", d.listLabel);
            d.empty = o.optString("empty", d.empty);
            d.d = o.optString("d", d.d);
            d.h = o.optString("h", d.h);
            d.m = o.optString("m", d.m);
            JSONArray a = o.optJSONArray("items");
            long now = System.currentTimeMillis();
            if (a != null) {
                for (int i = 0; i < a.length(); i++) {
                    JSONObject j = a.getJSONObject(i);
                    Item it = new Item();
                    it.at = j.getLong("at");
                    if (it.at <= now) continue;
                    it.title = j.optString("title");
                    it.time = j.optString("time");
                    it.day = j.optString("day");
                    try { it.color = Color.parseColor(j.optString("color", "#FFFFFF")); } catch (Exception ignore) {}
                    d.items.add(it);
                }
            }
        } catch (Exception ignore) {}
        return d;
    }

    private static String digits(Data d, String s) {
        if (!d.bn) return s;
        StringBuilder b = new StringBuilder();
        for (char ch : s.toCharArray()) b.append(ch >= '0' && ch <= '9' ? (char) ('\u09E6' + (ch - '0')) : ch);
        return b.toString();
    }

    /** Live ticking countdown (<24h) via Chronometer; plain "X d Y h" text otherwise. */
    private static void countdown(RemoteViews v, int chronoId, int textId, Data d, long at) {
        long rem = Math.max(0, at - System.currentTimeMillis());
        if (rem >= DAY || Build.VERSION.SDK_INT < 24) {
            long days = rem / DAY, hrs = (rem % DAY) / HOUR, mins = (rem % HOUR) / MIN;
            String s = days > 0 ? days + " " + d.d + " " + hrs + " " + d.h
                    : hrs > 0 ? hrs + " " + d.h + " " + mins + " " + d.m
                    : mins + " " + d.m;
            v.setViewVisibility(chronoId, View.GONE);
            v.setViewVisibility(textId, View.VISIBLE);
            v.setTextViewText(textId, digits(d, s));
        } else {
            v.setViewVisibility(textId, View.GONE);
            v.setViewVisibility(chronoId, View.VISIBLE);
            v.setChronometerCountDown(chronoId, true);
            v.setChronometer(chronoId, SystemClock.elapsedRealtime() + rem, null, true);
        }
    }

    private static PendingIntent openApp(Context c) {
        Intent i = c.getPackageManager().getLaunchIntentForPackage(c.getPackageName());
        if (i == null) i = new Intent();
        return PendingIntent.getActivity(c, 0, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    static RemoteViews small(Context c, Data d) {
        RemoteViews v = new RemoteViews(c.getPackageName(), R.layout.kaj_widget_small);
        v.setOnClickPendingIntent(R.id.kw_root, openApp(c));
        v.setTextViewText(R.id.kw_label, d.label);
        if (d.items.isEmpty()) {
            v.setTextViewText(R.id.kw_title, d.empty);
            v.setViewVisibility(R.id.kw_chrono, View.GONE);
            v.setViewVisibility(R.id.kw_days, View.GONE);
            v.setTextViewText(R.id.kw_time, "");
        } else {
            Item it = d.items.get(0);
            v.setTextViewText(R.id.kw_title, it.title);
            v.setTextViewText(R.id.kw_time, it.day + " · " + it.time);
            countdown(v, R.id.kw_chrono, R.id.kw_days, d, it.at);
        }
        return v;
    }

    static RemoteViews list(Context c, Data d) {
        RemoteViews v = new RemoteViews(c.getPackageName(), R.layout.kaj_widget_list);
        v.setOnClickPendingIntent(R.id.kwl_root, openApp(c));
        v.setTextViewText(R.id.kwl_label, d.listLabel);
        int[] rows = {R.id.kwl_row1, R.id.kwl_row2, R.id.kwl_row3};
        int[] dots = {R.id.kwl_dot1, R.id.kwl_dot2, R.id.kwl_dot3};
        int[] titles = {R.id.kwl_title1, R.id.kwl_title2, R.id.kwl_title3};
        int[] times = {R.id.kwl_time1, R.id.kwl_time2, R.id.kwl_time3};
        if (d.items.isEmpty()) {
            v.setTextViewText(R.id.kwl_title0, d.empty);
            v.setTextViewText(R.id.kwl_time0, "");
            v.setViewVisibility(R.id.kwl_chrono, View.GONE);
            v.setViewVisibility(R.id.kwl_days, View.GONE);
        } else {
            Item it = d.items.get(0);
            v.setTextViewText(R.id.kwl_title0, it.title);
            v.setTextViewText(R.id.kwl_time0, it.day + " · " + it.time);
            countdown(v, R.id.kwl_chrono, R.id.kwl_days, d, it.at);
        }
        for (int i = 0; i < 3; i++) {
            if (d.items.size() > i + 1) {
                Item it = d.items.get(i + 1);
                v.setViewVisibility(rows[i], View.VISIBLE);
                v.setTextViewText(titles[i], it.title);
                v.setTextViewText(times[i], it.day + " · " + it.time);
                v.setInt(dots[i], "setColorFilter", it.color);
            } else {
                v.setViewVisibility(rows[i], View.GONE);
            }
        }
        return v;
    }

    static void refreshAll(Context c) {
        AppWidgetManager m = AppWidgetManager.getInstance(c);
        Data d = load(c);
        for (int id : m.getAppWidgetIds(new ComponentName(c, KajSmallWidget.class))) {
            m.updateAppWidget(id, small(c, d));
        }
        for (int id : m.getAppWidgetIds(new ComponentName(c, KajListWidget.class))) {
            m.updateAppWidget(id, list(c, d));
        }
        scheduleNext(c, d);
    }

    /** Wakes the widgets right after the next task starts, so the countdown moves on to the following one. */
    private static void scheduleNext(Context c, Data d) {
        try {
            AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
            Intent i = new Intent(c, KajSmallWidget.class).setAction(REFRESH);
            PendingIntent pi = PendingIntent.getBroadcast(c, 7, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
            if (am == null) return;
            if (d.items.isEmpty()) { am.cancel(pi); return; }
            am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, d.items.get(0).at + 1500, pi);
        } catch (Exception ignore) {}
    }
}
