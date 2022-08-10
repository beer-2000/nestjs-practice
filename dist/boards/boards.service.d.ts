import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';
export declare class BoardsService {
    private boardRepository;
    private userRepository;
    private logger;
    constructor(boardRepository: BoardRepository, userRepository: UserRepository);
    getBoardById(id: number): Promise<Board>;
    getAllBoards(): Promise<Board[]>;
    getBoardsByUserId(user: User): Promise<Board[]>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board | void>;
    deleteBoard(id: number, user: User): Promise<Board>;
    updateBoardStatus(updateBoardStatusDto: UpdateBoardStatusDto): Promise<Board>;
}
