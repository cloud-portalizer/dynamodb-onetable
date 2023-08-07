"use strict";
/*
    Dynamo.js -- AWS V3 SDK API

    This module provides a wrapper and convenience API over the AWS V3 SDK.
    It is used by OneTable internally and is not a public API.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dynamo = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
class Dynamo {
    constructor(params = {}) {
        this.client = params.client;
        this.params = params;
        this.marshall = util_dynamodb_1.marshall;
        this.unmarshall = util_dynamodb_1.unmarshall;
        this.V3 = true;
    }
    async createTable(params) {
        let command = new client_dynamodb_1.CreateTableCommand(params);
        return await this.send(command);
    }
    async deleteTable(params) {
        let command = new client_dynamodb_1.DeleteTableCommand(params);
        return await this.send(command);
    }
    async delete(params) {
        let command = new client_dynamodb_1.DeleteItemCommand(params);
        return await this.send(command);
    }
    async describeTable(params) {
        let command = new client_dynamodb_1.DescribeTableCommand(params);
        return await this.send(command);
    }
    async get(params) {
        let command = new client_dynamodb_1.GetItemCommand(params);
        return await this.send(command);
    }
    async find(params) {
        let command = new client_dynamodb_1.QueryCommand(params);
        return await this.send(command);
    }
    async listTables(params) {
        let command = new client_dynamodb_1.ListTablesCommand(params);
        return await this.send(command);
    }
    async put(params) {
        let command = new client_dynamodb_1.PutItemCommand(params);
        return await this.send(command);
    }
    async scan(params) {
        let command = new client_dynamodb_1.ScanCommand(params);
        return await this.send(command);
    }
    async update(params) {
        let command = new client_dynamodb_1.UpdateItemCommand(params);
        return await this.send(command);
    }
    async updateTable(params) {
        let command = new client_dynamodb_1.UpdateTableCommand(params);
        return await this.send(command);
    }
    async batchGet(params) {
        let command = new client_dynamodb_1.BatchGetItemCommand(params);
        return await this.send(command);
    }
    async batchWrite(params) {
        let command = new client_dynamodb_1.BatchWriteItemCommand(params);
        return await this.send(command);
    }
    async transactGet(params) {
        let command = new client_dynamodb_1.TransactGetItemsCommand(params);
        return await this.send(command);
    }
    async transactWrite(params) {
        let command = new client_dynamodb_1.TransactWriteItemsCommand(params);
        return await this.send(command);
    }
    async send(cmd) {
        return await this.client.send(cmd);
    }
}
exports.Dynamo = Dynamo;
exports.default = Dynamo;
