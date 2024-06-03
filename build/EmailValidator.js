"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    isValid(s) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}
exports.default = EmailValidator;
