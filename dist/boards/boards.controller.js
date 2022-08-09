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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const board_status_enum_1 = require("./board-status-enum");
const boards_service_1 = require("./boards.service");
const create_board_dto_1 = require("./dto/create-board.dto");
const update_board_status_dto_1 = require("./dto/update-board-status.dto");
const board_status_validation_pipe_1 = require("./pipes/board-status-validation.pipe");
let BoardsController = class BoardsController {
    constructor(boardsService) {
        this.boardsService = boardsService;
        this.logger = new common_1.Logger('BoardsController');
    }
    ;
    getBoardById(id) {
        return this.boardsService.getBoardById(id);
    }
    getAllBoards() {
        return this.boardsService.getAllBoards();
    }
    createBoard(createBoardDto) {
        return this.boardsService.createBoard(createBoardDto);
    }
    deleteBoard(id) {
        return this.boardsService.deleteBoard(id);
    }
    updateBoardStatus(id, status) {
        const updateBoarStatusDto = new update_board_status_dto_1.UpdateBoardStatusDto(id, status);
        return this.boardsService.updateBoardStatus(updateBoarStatusDto);
    }
};
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getBoardById", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getAllBoards", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_board_dto_1.CreateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "createBoard", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "deleteBoard", null);
__decorate([
    common_1.Patch('/:id/status'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body('status', board_status_validation_pipe_1.BoardStatusValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "updateBoardStatus", null);
BoardsController = __decorate([
    common_1.Controller('boards'),
    __metadata("design:paramtypes", [boards_service_1.BoardsService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map