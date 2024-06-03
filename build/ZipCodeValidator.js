"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZipCodeValidator {
    isValid(s) {
        const numberRegexp = /^[0-9]+$/;
        return s.length === 5 && numberRegexp.test(s);
    }
}
exports.default = ZipCodeValidator;
