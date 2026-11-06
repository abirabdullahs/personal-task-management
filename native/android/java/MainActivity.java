package com.abir.kaj;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(KajWidgetPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
