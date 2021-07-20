/*
 * @Author: HasebeAya
 * @Date: 2021-07-20 14:14:01
 * @Description: 时间相关计算
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-20 14:19:42
 */

import moment from 'moment'

export function computedAgeWithBirthday (birthday: moment.MomentInput) {
  return moment.duration(moment().diff(birthday)).years()
}
