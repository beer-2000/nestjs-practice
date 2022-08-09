import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';

@Controller('boards')
export class BoardsController {
    private logger = new Logger('BoardsController');
	constructor(private boardsService: BoardsService) {};

    @Get('/')
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards() ;
    }

	@Post('/')
	createBoard(
		@Body() createBoardDto: CreateBoardDto
	): Board {
		return this.boardsService.createBoard(createBoardDto);
	}

	@Get('/:id')
	getBoardById(@Param('id') id: string): Board {
		this.logger.debug(`id of parameters   >>>>   ${id}`);
		return this.boardsService.getBoardById(id);
	}

	@Delete('/:id')
	deleteBoard(@Param('id') id: string): Board[] {
		this.boardsService.deleteBoard(id);
		return this.boardsService.getAllBoards();
	}

	@Patch('/:id/status')
	updateBoardStatus(
		@Param('id') id: string,
		@Body('status') status: BoardStatus,
	): Board {
		const updateBoardStatusDto = new UpdateBoardStatusDto(id, status);
		return this.boardsService.updateBoardStatus(updateBoardStatusDto);
	}
}



