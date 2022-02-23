"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordUseCase = void 0;
var express_1 = __importStar(require("express"));
var prismaClient_1 = require("../../../database/prismaClient");
var crypto = require("crypto");
var nodemailer = __importStar(require("nodemailer"));
var bcrypt = __importStar(require("bcrypt"));
var router = express_1.default.Router();
var ForgotPasswordUseCase = /** @class */ (function () {
    function ForgotPasswordUseCase() {
    }
    ForgotPasswordUseCase.prototype.execute = function (_a) {
        var username = _a.username;
        return __awaiter(this, void 0, void 0, function () {
            var client, transport, newPassword;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, prismaClient_1.prisma.client.findFirst({
                            where: {
                                username: username,
                            },
                        })];
                    case 1:
                        client = _b.sent();
                        transport = nodemailer.createTransport({
                            host: "smtp.mailtrap.io",
                            port: 2525,
                            auth: {
                                user: "f872e453c1f108",
                                pass: "60d4014800fe5a",
                            },
                        });
                        newPassword = crypto.randomBytes(4).toString("hex");
                        transport
                            .sendMail({
                            from: "Administrador: <01e970425d-d85a9a+1@inbox.mailtrap.io>",
                            to: username,
                            subject: "Recuperar senha",
                            html: "<p>Ol\u00E1 sua nova senha para acessar o sitema \u00E9: ".concat(newPassword, "</p><br/><a href=\"http://localhost:3000/login>Sistema</a>"),
                        })
                            .then(function () {
                            bcrypt.hash(newPassword, 8).then(function (password) { return __awaiter(_this, void 0, void 0, function () {
                                var user;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, prismaClient_1.prisma.client
                                                .update({
                                                where: { username: username },
                                                data: { password: password },
                                            })
                                                .then(function () {
                                                return express_1.response.status(200).json({ message: "Email sended" });
                                            })
                                                .catch(function () {
                                                return express_1.response.status(404).json({ message: "User not founded" });
                                            })];
                                        case 1:
                                            user = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordUseCase.prototype.catch = function () {
        throw new Error("Username or password invalid!");
    };
    return ForgotPasswordUseCase;
}());
exports.ForgotPasswordUseCase = ForgotPasswordUseCase;
//# sourceMappingURL=ForgotPasswordUseCase.js.map