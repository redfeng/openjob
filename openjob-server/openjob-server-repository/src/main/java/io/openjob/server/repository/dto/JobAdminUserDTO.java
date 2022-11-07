package io.openjob.server.repository.dto;

import java.util.List;

import lombok.Data;

/**
 * @author inhere
 * @date 2022-11-07 13:33:36
 * @since 1.0.0
 */
@Data
public class JobAdminUserDTO {

    /**
     * PK
     */
    private Integer id;

    /**
     * User name
     */
    private String username;

    /**
     * Nickname
     */
    private String nickname;

    /**
     * Password
     */
    private String passwd;

    /**
     * Api auth token
     */
    private String token;

    /**
     * Rule IDs. JSON: [1,2]
     */
    private List<Long> ruleIds;

    /**
     * Delete status. 1=yes 2=no
     */
    private Integer deleted;

    /**
     * Delete time
     */
    private Integer deleteTime;

    /**
     * Update time
     */
    private Integer updateTime;

    /**
     * Create time
     */
    private Integer createTime;
}

