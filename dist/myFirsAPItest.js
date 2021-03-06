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
const superagent_1 = require("superagent");
const http_status_codes_1 = require("http-status-codes");
const chai = require("chai");
const expect = chai.expect;
describe('First Api Tests', () => {
    it('Consume GET Service', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield superagent_1.get('https://httpbin.org/ip');
        expect(response.status).to.equal(http_status_codes_1.StatusCodes.OK);
        expect(response.body).to.have.property('origin');
    }));
});
//# sourceMappingURL=myFirsAPItest.js.map