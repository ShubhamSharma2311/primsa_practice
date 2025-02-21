"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(email, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield prisma.user.create({
            data: {
                email,
                password,
                firstname,
                lastname
            },
            select: {
                email: true,
                id: true
            }
        });
        console.log(res);
    });
}
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstname, lastname }) {
        let res = yield prisma.user.update({
            where: { email },
            data: {
                firstname,
                lastname
            },
        });
        console.log(res);
    });
}
updateUser('ssk1@gmail.com', { firstname: 'Ankit', lastname: 'sharma' });
