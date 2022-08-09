import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';

@Injectable()
export class BoardsService {
	private boards: Board[] = [
		{
			id: 'dsafgsg',
			title: "hi",
			description: "this is test board",
			status: BoardStatus.PUBLIC
		},
		{
			id: 'rgawsrfesfa',
			title: "hi",
			description: "this is test board",
			status: BoardStatus.PUBLIC
		}
	];

	getAllBoards(): Board[] {
		return this.boards;
	}

	createBoard(createBoardDto: CreateBoardDto): Board {
		const { title, description } = createBoardDto;
		const board: Board = {
			id: uuid(),
			title: title,
			description: description,
			status: BoardStatus.PUBLIC,
		}
		this.boards.push(board);
		return board;
	}

	getBoardById(id: string): Board {
		return this.boards.find((board) => board.id === id);
	}

	deleteBoard(id: string): void {
		this.boards = this.boards.filter((board) => board.id !== id);
	}

	updateBoardStatus(updateBoardStatusDto: UpdateBoardStatusDto): Board {
		const { id, status } = updateBoardStatusDto;
		const board = this.getBoardById(id);
		board.status = status;
		return board;
	}

}
