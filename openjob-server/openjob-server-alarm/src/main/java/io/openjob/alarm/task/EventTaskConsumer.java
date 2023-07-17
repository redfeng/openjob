package io.openjob.alarm.task;

import io.openjob.alarm.dto.AlarmEventDTO;
import io.openjob.common.task.BaseConsumer;
import io.openjob.common.task.TaskQueue;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.6
 */
@Slf4j
public class EventTaskConsumer extends BaseConsumer<AlarmEventDTO> {
    public EventTaskConsumer(Long id,
                             Integer consumerCoreThreadNum,
                             Integer consumerMaxThreadNum,
                             String consumerThreadName,
                             Integer pollSize,
                             String pollThreadName, TaskQueue<AlarmEventDTO> queues) {
        super(id, consumerCoreThreadNum, consumerMaxThreadNum, consumerThreadName, pollSize, pollThreadName, queues, 5000L, 5000L);
    }

    @Override
    public void consume(Long id, List<AlarmEventDTO> tasks) {
        this.consumerExecutor.submit(new EventTaskRunnable(tasks));
    }

    private static class EventTaskRunnable implements Runnable {
        private final List<AlarmEventDTO> tasks;

        private EventTaskRunnable(List<AlarmEventDTO> tasks) {
            this.tasks = tasks;
        }

        @Override
        public void run() {
            System.out.println(tasks);
        }
    }
}
