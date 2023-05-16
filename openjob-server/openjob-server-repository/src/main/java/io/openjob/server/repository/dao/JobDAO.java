package io.openjob.server.repository.dao;

import io.openjob.server.common.dto.PageDTO;
import io.openjob.server.repository.dto.JobPageDTO;
import io.openjob.server.repository.entity.Job;

import java.util.List;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.0
 */
public interface JobDAO {
    /**
     * Save job.
     *
     * @param job job
     * @return Long
     */
    Long save(Job job);

    /**
     * Update job
     *
     * @param job job
     * @return Long
     */
    Long update(Job job);

    /**
     * Update
     *
     * @param id              id
     * @param nextExecuteTime nextExecuteTime
     * @param updateTime      updateTime
     * @return Long
     */
    Long updateNextExecuteTime(Long id, Long nextExecuteTime, Long updateTime);

    /**
     * Update by status or deleted.
     *
     * @param id      id
     * @param status  status
     * @param deleted deleted
     * @return Long
     */
    Long updateByStatusOrDeleted(Long id, Integer status, Integer deleted);

    /**
     * Get by id
     *
     * @param id id
     * @return Job
     */
    Job getById(Long id);

    /**
     * List scheduled jobs.
     *
     * @param slotIds slotIds
     * @param time    time
     * @return List
     */
    List<Job> listScheduledJobs(List<Long> slotIds, Long time);

    /**
     * List seconds scheduled jobs.
     *
     * @param slotIds slotIds
     * @return List
     */
    List<Job> listScheduledSecondJobs(List<Long> slotIds);

    /**
     * Get page list.
     *
     * @param jobPageDTO jobPageDTO
     * @return PageDTO
     */
    PageDTO<Job> pageList(JobPageDTO jobPageDTO);
}
