import { BoardStatus } from "../board-status-enum";
export declare class UpdateBoardStatusDto {
    constructor(_id: number, _status: BoardStatus);
    id: number;
    status: BoardStatus;
}
