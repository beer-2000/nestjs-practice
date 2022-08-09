import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status-enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    private logger = new Logger('BoardsController');
	constructor(private boardsService: BoardsService) {};

	@Get('/:id')
	getBoardById(@Param('id') id : number) : Promise<Board> {
		return this.boardsService.getBoardById(id);
	}

	@Get()
	getAllBoards(): Promise<Board[]> {
		return this.boardsService.getAllBoards();
	}

	@Post()
	@UsePipes(ValidationPipe)
	createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board | void> {
		return this.boardsService.createBoard(createBoardDto);
	}

	@Delete('/:id')
	deleteBoard(@Param('id', ParseIntPipe) id): Promise<Board | void> {
		return this.boardsService.deleteBoard(id);
	}

	@Patch('/:id/status')
	updateBoardStatus(
		@Param('id', ParseIntPipe) id: number,
		@Body('status', BoardStatusValidationPipe) status: BoardStatus,): Promise<Board> {
			const updateBoarStatusDto = new UpdateBoardStatusDto(id, status);
			return this.boardsService.updateBoardStatus(updateBoarStatusDto)
	}

}



