import { Logger } from "@nestjs/common";
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

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        const { title, description } = createBoardDto;
        const board = await this.create({
                title: title,
                description: description,
                status: BoardStatus.PUBLIC,
            })
        // const board = new Board();
        await this.save(board);
        return board;
    }

    async deleteOneById(id: number): Promise<Board | void> {
        const board = await this.findOneById(id);
        await this.delete(id);
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
