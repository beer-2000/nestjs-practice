import { BoardStatus } from "../board-status-enum";

export class UpdateBoardStatusDto {
    constructor(_id: number, _status: BoardStatus) {
        this.id = _id;
        this.status = _status;
    }
    id: number;
    status: BoardStatus;
}
