package io.openjob.worker.init;

import io.openjob.common.util.IpUtil;
import io.openjob.worker.config.OpenjobConfig;
import io.openjob.worker.constant.WorkerConstant;
import lombok.Getter;

import java.net.UnknownHostException;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.0
 */
@Getter
public class WorkerConfig {

    /**
     * Worker host name.
     */
    private static String workerHost;

    /**
     * Worker port.
     */
    private static Integer workerPort;

    /**
     * Worker address.
     */
    private static String workerAddress;

    /**
     * Register app name.
     */
    private static String appName;

    /**
     * Delay enable.
     */
    private static Boolean delayEnable;

    /**
     * Server host.
     */
    private static String serverHost;

    /**
     * Server port
     */
    private static Integer serverPort;

    /**
     * Initialize status
     */
    private final AtomicBoolean isInit = new AtomicBoolean(false);

    /**
     * Init
     */
    public void init() throws UnknownHostException {
        // Already initialized
        if (this.isInit.get()) {
            return;
        }

        // App name.
        appName = OpenjobConfig.getString(WorkerConstant.WORKER_APP_NAME);
        if (Objects.isNull(appName)) {
            throw new RuntimeException(String.format("%s can not be null!", WorkerConstant.WORKER_APP_NAME));
        }

        workerHost = OpenjobConfig.getString(WorkerConstant.WORKER_HOST, IpUtil.getLocalAddress());
        workerPort = OpenjobConfig.getInteger(WorkerConstant.WORKER_PORT, WorkerConstant.DEFAULT_WORKER_PORT);
        workerAddress = String.format("%s:%d", workerHost, workerPort);
        delayEnable = OpenjobConfig.getBoolean(WorkerConstant.WORKER_DELAY_ENABLE, false);

        // Server hostname
        String serverHostname = OpenjobConfig.getString(WorkerConstant.SERVER_HOST, IpUtil.getLocalAddress());
        serverHost = IpUtil.getIpByHost(serverHostname);
        serverPort = OpenjobConfig.getInteger(WorkerConstant.SERVER_PORT, WorkerConstant.DEFAULT_SERVER_PORT);

        // Initialized
        this.isInit.set(true);
    }

    public static String getWorkerHost() {
        return workerHost;
    }

    public static Integer getWorkerPort() {
        return workerPort;
    }

    public static String getWorkerAddress() {
        return workerAddress;
    }

    public static String getAppName() {
        return appName;
    }

    public static Boolean getDelayEnable() {
        return delayEnable;
    }

    public static String getServerHost() {
        return serverHost;
    }

    public static Integer getServerPort() {
        return serverPort;
    }
}
