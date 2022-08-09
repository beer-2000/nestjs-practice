"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_model_1 = require("./board.model");
const uuid_1 = require("uuid");
let BoardsService = class BoardsService {
    constructor() {
        this.boards = [
            {
                id: 'dsafgsg',
                title: "hi",
                description: "this is test board",
                status: board_model_1.BoardStatus.PUBLIC
            },
            {
                id: 'rgawsrfesfa',
                title: "hi",
                description: "this is test board",
                status: board_model_1.BoardStatus.PUBLIC
            }
        ];
    }
    getAllBoards() {
        return this.boards;
    }
    createBoard(createBoardDto) {
        const { title, description } = createBoardDto;
        const board = {
            id: (0, uuid_1.v1)(),
            title: title,
            description: description,
            status: board_model_1.BoardStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }
    getBoardById(id) {
        return this.boards.find((board) => board.id === id);
    }
    deleteBoard(id) {
        this.boards = this.boards.filter((board) => board.id !== id);
    }
    updateBoardStatus(updateBoardStatusDto) {
        const { id, status } = updateBoardStatusDto;
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)()
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map