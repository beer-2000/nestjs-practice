import { BoardStatus } from "../board.model";
export declare class UpdateBoardStatusDto {
    constructor(_id: string, _status: BoardStatus);
    id: string;
    status: BoardStatus;
}
