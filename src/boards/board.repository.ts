import { Logger, UnauthorizedException } from "@nestjs/common";
import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { BoardStatus } from "./board-status-enum";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UpdateBoardStatusDto } from "./dto/update-board-status.dto";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {

    private logger = new Logger('BoardsController');

    async findOneById(id: number): Promise<Board> {
        return await this.findOne(id);
    }

    async findAllBoards(): Promise<Board[]> {
        return await this.find();
    }

    async findBoardsByUserId(userId: number): Promise<Board[]> {
        const query = this.createQueryBuilder('board');
        query.where('board.userId = :userId', { userId: userId });
        const boards = await query.getMany();
        return boards;
    }

    async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
        const { title, description } = createBoardDto;
        const board = await this.create({
            title: title,
            description: description,
            status: BoardStatus.PUBLIC,
            user
        })
        await this.save(board);
        const boardId = board.id;
        const boardNew: Board = await this.findOneById(boardId);
        return boardNew;
    }

    async deleteOneById(id: number, user: User): Promise<Board | void> {
        const board = await this.findOneById(id);
        await this.delete({ id, user });
        return board;
    }

    async updateBoardStatusById(updateBoardStatusDto: UpdateBoardStatusDto): Promise<Board> {
        const { id, status } = updateBoardStatusDto;
        const board = await this.findOneById(id);
        board.status = status;
        await this.save(board);
        return board;
    }


}
