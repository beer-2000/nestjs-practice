import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';
export declare class BoardsService {
    private boards;
    getAllBoards(): Board[];
    createBoard(createBoardDto: CreateBoardDto): Board;
    getBoardById(id: string): Board;
    deleteBoard(id: string): void;
    updateBoardStatus(updateBoardStatusDto: UpdateBoardStatusDto): Board;
}
