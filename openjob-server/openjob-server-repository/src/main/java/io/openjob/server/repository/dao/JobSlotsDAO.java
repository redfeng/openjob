package io.openjob.server.repository.dao;

import io.openjob.server.repository.entity.JobSlots;

import java.util.List;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
public interface JobSlotsDAO {
    Long save(JobSlots taskSlots);

    List<JobSlots> listJobSlots(Long serverId);

    List<JobSlots> listJobSlots();

    List<JobSlots> listJobSlotsForUpdate();

    Integer updateByServerId(Long serverId, List<Long> slots);

    Integer updateByServerId(Long serverId);
}
