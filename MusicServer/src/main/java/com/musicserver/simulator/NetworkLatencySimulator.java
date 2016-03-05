package com.musicserver.simulator;

/**
 * Created by Bikash on 2/28/2016.
 */
public class NetworkLatencySimulator {

    public static void simulatorLatency(Long delay) {
        try {
            Thread.sleep(delay);
        } catch (InterruptedException e) {
            //EAT IT!!!
            e.printStackTrace();
        }
    }
}
