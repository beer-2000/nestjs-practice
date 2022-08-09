import { BoardStatus } from './board-status-enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private boardsService;
    private logger;
    constructor(boardsService: BoardsService);
    getBoardById(id: number): Promise<Board>;
    getAllBoards(): Promise<Board[]>;
    createBoard(createBoardDto: CreateBoardDto): Promise<Board | void>;
    deleteBoard(id: any): Promise<Board | void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}
