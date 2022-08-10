"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../auth/user.entity");
const user_repository_1 = require("../auth/user.repository");
const board_repository_1 = require("./board.repository");
let BoardsService = class BoardsService {
    constructor(boardRepository, userRepository) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
        this.logger = new common_1.Logger('BoardsController');
    }
    ;
    async getBoardById(id) {
        const board = await this.boardRepository.findOneById(id);
        if (!board) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        return board;
    }
    async getAllBoards() {
        return this.boardRepository.findAllBoards();
    }
    async getBoardsByUserId(user) {
        const userId = user.id;
        return this.boardRepository.findBoardsByUserId(userId);
    }
    async createBoard(createBoardDto, user) {
        return await this.boardRepository.createBoard(createBoardDto, user);
    }
    async deleteBoard(id, user) {
        this.logger.debug('deleteBoard');
        const board = await this.boardRepository.deleteOneById(id, user);
        if (!board) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        return board;
    }
    async updateBoardStatus(updateBoardStatusDto) {
        const { id, status } = updateBoardStatusDto;
        const board = await this.boardRepository.updateBoardStatusById(updateBoardStatusDto);
        if (!board) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        return board;
    }
};
BoardsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(board_repository_1.BoardRepository)),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        user_repository_1.UserRepository])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map