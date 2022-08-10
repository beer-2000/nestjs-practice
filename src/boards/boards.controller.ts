import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { BoardStatus } from './board-status-enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
    private logger = new Logger('BoardsController');
	constructor(private boardsService: BoardsService) {};

	@Get('/:id')
	getBoardById(@Param('id') id : number) : Promise<Board> {
		return this.boardsService.getBoardById(id);
	}

	@Get()
	getBoardsByUserId(@GetUser() user: User): Promise<Board[]> {
		return this.boardsService.getBoardsByUserId(user);
	}

	@Post()
	@UsePipes(ValidationPipe)
	createBoard(@Body() createBoardDto: CreateBoardDto,
	@GetUser() user: User): Promise<Board | void> {
		return this.boardsService.createBoard(createBoardDto, user);
	}

	@Delete('/:id')
	deleteBoard(@Param('id', ParseIntPipe) id,
	@GetUser() user: User): Promise<Board | void> {
		return this.boardsService.deleteBoard(id, user);
	}

	@Patch('/:id/status')
	updateBoardStatus(
		@Param('id', ParseIntPipe) id: number,
		@Body('status', BoardStatusValidationPipe) status: BoardStatus,): Promise<Board> {
			const updateBoarStatusDto = new UpdateBoardStatusDto(id, status);
			return this.boardsService.updateBoardStatus(updateBoarStatusDto)
	}

}



