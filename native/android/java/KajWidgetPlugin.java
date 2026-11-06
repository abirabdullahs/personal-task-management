package com.abir.kaj;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/** JS -> native bridge. The web app sends the upcoming-task list; we store it and refresh widgets. */
@CapacitorPlugin(name = "KajWidget")
public class KajWidgetPlugin extends Plugin {
    @PluginMethod
    public void update(PluginCall call) {
        String json = call.getString("json", "");
        getContext().getSharedPreferences(KajWidgetUtil.PREFS, 0)
                .edit().putString(KajWidgetUtil.KEY, json).apply();
        KajWidgetUtil.refreshAll(getContext());
        call.resolve();
    }
}
