"use strict";
/*
    dynamodb-onetable - DynamoDB wrapper for single table patterns
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = exports.ULID = exports.Table = exports.OneTableError = exports.OneTableArgError = exports.Model = exports.Expression = void 0;
const Expression_js_1 = require("./Expression.js");
Object.defineProperty(exports, "Expression", { enumerable: true, get: function () { return Expression_js_1.Expression; } });
const Model_js_1 = require("./Model.js");
Object.defineProperty(exports, "Model", { enumerable: true, get: function () { return Model_js_1.Model; } });
const Table_js_1 = require("./Table.js");
Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return Table_js_1.Table; } });
const Error_js_1 = require("./Error.js");
Object.defineProperty(exports, "OneTableError", { enumerable: true, get: function () { return Error_js_1.OneTableError; } });
Object.defineProperty(exports, "OneTableArgError", { enumerable: true, get: function () { return Error_js_1.OneTableArgError; } });
const ULID_js_1 = __importDefault(require("./ULID.js"));
exports.ULID = ULID_js_1.default;
const UUID_js_1 = __importDefault(require("./UUID.js"));
exports.UUID = UUID_js_1.default;
