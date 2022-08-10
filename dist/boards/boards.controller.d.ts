import { User } from 'src/auth/user.entity';
import { BoardStatus } from './board-status-enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private boardsService;
    private logger;
    constructor(boardsService: BoardsService);
    getBoardById(id: number): Promise<Board>;
    getBoardsByUserId(user: User): Promise<Board[]>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board | void>;
    deleteBoard(id: any, user: User): Promise<Board | void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}
