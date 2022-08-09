import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';
export declare class BoardsService {
    private boardRepository;
    private logger;
    constructor(boardRepository: BoardRepository);
    getBoardById(id: number): Promise<Board>;
    getAllBoards(): Promise<Board[]>;
    createBoard(createBoardDto: CreateBoardDto): Promise<Board | void>;
    deleteBoard(id: number): Promise<Board>;
    updateBoardStatus(updateBoardStatusDto: UpdateBoardStatusDto): Promise<Board>;
}
