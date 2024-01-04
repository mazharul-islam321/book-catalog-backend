import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './user.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.insertIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user created successfully',
        data: result,
    });
});

export const userController = {
    insertIntoDB,
};
