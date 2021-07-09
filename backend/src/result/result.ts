import { ApiProperty } from '@nestjs/swagger';
import { ResultCodeEnum } from './result-code';
import { ResultCodeMsgEnum } from './result-code-msg';

/** 统一API响应结果封装 */
export class Result<T> {
  @ApiProperty({
    description: '状态码',
  })
  code: number;
  @ApiProperty({
    description: '是否成功',
  })
  succeed: boolean;
  @ApiProperty({
    description: '消息',
  })
  message: string;
  @ApiProperty({
    description: '返回内容',
  })
  data: T;
  constructor();
  constructor(code: ResultCodeEnum);
  constructor(code: ResultCodeEnum, message: string);
  constructor(code: ResultCodeEnum, message: string, data: T);
  constructor(code?: number, message?: string, data?: T) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.succeed = ResultCodeEnum.SUCCESS === code;
  }

  /** 成功响应消息体 */
  static succeed();
  static succeed<T>(data: T);
  static succeed(message: string);
  static succeed<T>(message: string, data: T);
  static succeed<T>(message = ResultCodeMsgEnum.SUCCESS, data?: T) {
    return new Result<T>(ResultCodeEnum.SUCCESS, message, data);
  }

  /** 失败响应消息体 */
  static failed();
  static failed<T>(data: T);
  static failed(message: string);
  static failed<T>(message?: string, data?: T) {
    return new Result<T>(ResultCodeEnum.FAILURE_EXCEPTION, message, data);
  }
}
