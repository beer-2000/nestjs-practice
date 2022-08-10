import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';
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
		@InjectRepository(UserRepository)
		private boardRepository: BoardRepository,
		private userRepository: UserRepository
	) {};
	
	async getBoardById(id: number): Promise<Board> {
		const board = await this.boardRepository.findOneById(id);

		if (!board) {
			throw new NotFoundException(`Can't find Board with id ${id}`);
		}
		return board;
	}

	async getAllBoards(): Promise<Board[]> {
		return this.boardRepository.findAllBoards();
	}

	async getBoardsByUserId(user: User): Promise<Board[]> {
		const userId = user.id;
		return this.boardRepository.findBoardsByUserId(userId);
	}

	async createBoard(createBoardDto: CreateBoardDto, user: User) : Promise<Board | void> {
		return await this.boardRepository.createBoard(createBoardDto, user);
	}

	async deleteBoard(id: number, user: User): Promise<Board> {
		this.logger.debug('deleteBoard');
		const board = await this.boardRepository.deleteOneById(id, user);

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


