import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private boardsService;
    private logger;
    constructor(boardsService: BoardsService);
    getAllBoards(): Board[];
    createBoard(createBoardDto: CreateBoardDto): Board;
    getBoardById(id: string): Board;
    deleteBoard(id: string): Board[];
    updateBoardStatus(id: string, status: BoardStatus): Board;
}
