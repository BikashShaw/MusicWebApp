package com.musicserver.rest.interceptor;

import com.musicserver.simulator.NetworkLatencySimulator;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Created by Bikash on 3/1/2016.
 */
@Component
public class MusicRestInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        NetworkLatencySimulator.simulatorLatency(1000L);
        return super.preHandle(request, response, handler);
    }
}
