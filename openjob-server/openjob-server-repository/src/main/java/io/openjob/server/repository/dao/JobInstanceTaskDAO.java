package io.openjob.server.repository.dao;

import io.openjob.server.common.dto.PageDTO;
import io.openjob.server.repository.dto.TaskGroupCountDTO;
import io.openjob.server.repository.entity.JobInstanceTask;
import scala.Int;

import java.util.List;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.0
 */
public interface JobInstanceTaskDAO {

    /**
     * Save
     *
     * @param jobInstanceTask jobInstanceTask
     * @return Long
     */
    Long save(JobInstanceTask jobInstanceTask);

    /**
     * Batch save.
     *
     * @param taskList taskList
     * @return Integer
     */
    Integer batchSave(List<JobInstanceTask> taskList);

    /**
     * Get latest parent task
     *
     * @param instanceId   instanceId
     * @param parentTaskId parentTaskId
     * @return JobInstanceTask
     */
    JobInstanceTask getLatestParentTask(Long instanceId, String parentTaskId);

    /**
     * Get circle list
     *
     * @param instanceId instanceId
     * @param page       page
     * @param size       size
     * @return PageDTO
     */
    PageDTO<JobInstanceTask> getCircleList(Long instanceId, Integer page, Integer size);

    /**
     * Get child list
     *
     * @param parentTaskId parentTaskId
     * @param page         page
     * @param size         size
     * @return return
     */
    PageDTO<JobInstanceTask> getChildList(String parentTaskId, Integer page, Integer size);

    /**
     * Count by parent task id
     *
     * @param parentTaskIds parentTaskIds
     * @return List
     */
    List<TaskGroupCountDTO> countByParentTaskIds(List<String> parentTaskIds);
}
