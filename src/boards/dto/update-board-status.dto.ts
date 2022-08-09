import { BoardStatus } from "../board.model";

export class UpdateBoardStatusDto {
    constructor(_id: string, _status: BoardStatus) {
        this.id = _id;
        this.status = _status;
    }
    id: string;
    status: BoardStatus;
}
