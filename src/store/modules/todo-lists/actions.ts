import * as types from '../../configs/actions-reducer-types';
import { PayloadOnDropType } from './types-datas';

export function onDrop(actionOnDropType: PayloadOnDropType) {
  return {
    type: types.TODOS_LISTS__ONDROP,
    payload: actionOnDropType as PayloadOnDropType
  }
}