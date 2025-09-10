import { HttpStatus, Param, ParseUUIDPipe } from '@nestjs/common';

export function isUuidDecorator(prop: string): ParameterDecorator {
  return Param(
    prop,
    new ParseUUIDPipe({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      exceptionFactory: () => {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'This is not a valid UUID',
        };
      },
    }),
  );
}
