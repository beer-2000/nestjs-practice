import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardStatus } from './board-status-enum';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';

@Injectable()
export class BoardsService {
    private logger = new Logger('BoardsController');
	constructor(
		@InjectRepository(BoardRepository)
		private boardRepository: BoardRepository,
	) {};
	
	async getBoardById(id: number): Promise<Board> {
		const board = await this.boardRepository.findOneById(id);

		if (!board) {
			throw new NotFoundException(`Can't find Board with id ${id}`);
		}
		return board;
	}

	async getAllBoards(): Promise<Board[]> {
		return this.boardRepository.find();
	}

	createBoard(createBoardDto: CreateBoardDto) : Promise<Board | void> {
		return this.boardRepository.createBoard(createBoardDto);
	}

	async deleteBoard(id: number): Promise<Board> {
		const board = await this.boardRepository.deleteOneById(id);

		if (!board) {
			throw new NotFoundException(`Can't find Board with id ${id}`);
		}
		return board;
	}

	async updateBoardStatus(updateBoardStatusDto: UpdateBoardStatusDto): Promise<Board> {
		const { id, status } = updateBoardStatusDto;
		const board = await this.boardRepository.updateBoardStatusById(
			updateBoardStatusDto
			);

		if (!board) {
			throw new NotFoundException(`Can't find Board with id ${id}`);
		}
		return board;
	}

}


