import { PrismaService } from "../prisma/prisma.service";
export declare class GoalRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createGoal(params: any): Promise<import(".prisma/client").tbl_goals>;
    getGoal(params: any): Promise<import(".prisma/client").tbl_goals>;
    getGoals(params: any): Promise<import(".prisma/client").tbl_goals[]>;
    updateGoals(id_goals: any, data: any): Promise<number>;
    updateKodefikasi(id_goal: number, parent_data: any): Promise<import(".prisma/client").tbl_goals>;
    deleteGoal(id_goal: number): Promise<import(".prisma/client").tbl_goals>;
}
