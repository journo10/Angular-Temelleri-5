import { ResponseModel } from './responseModel';
export interface ListResponseModel<T> extends ResponseModel {
  data: T[];
}

//BURASI İPTAL.OLMADI.