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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalRepository = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let GoalRepository = class GoalRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createGoal(params) {
        const goal = await this.prisma.tbl_goals.create({
            data: params
        });
        return goal;
    }
    async getGoal(params) {
        const goal = await this.prisma.tbl_goals.findFirst({
            where: {
                id_goals: params
            }
        });
        return goal;
    }
    async getGoals(params) {
        const goal = await this.prisma.tbl_goals.findMany(params);
        return goal;
    }
    async updateGoals(id_goals, data) {
        const goal = await this.prisma.tbl_goals.updateMany({
            where: { id_goals: id_goals },
            data: data
        });
        return goal.count;
    }
    async updateKodefikasi(id_goal, parent_data) {
        var finalKodefikasi = (parent_data.kodefikasi == null || parent_data.kodefikasi == '') ? id_goal.toString() : parent_data.kodefikasi + '-' + id_goal.toString();
        const goal = await this.prisma.tbl_goals.update({
            where: {
                id_goals: id_goal
            },
            data: {
                kodefikasi: finalKodefikasi,
                parent_family: parent_data.parent_goals == 0 || parent_data.parent_goals == "0" ? parent_data.id_goals : parent_data.parent_family
            }
        });
        return goal;
    }
    async deleteGoal(id_goal) {
        const goal = await this.prisma.tbl_goals.delete({
            where: {
                id_goals: id_goal
            }
        });
        return goal;
    }
};
GoalRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GoalRepository);
exports.GoalRepository = GoalRepository;
//# sourceMappingURL=goals.repository.js.map