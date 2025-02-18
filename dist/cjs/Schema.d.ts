export class Schema {
    constructor(table: any, schema: any);
    table: any;
    keyTypes: {};
    process: {};
    params: any;
    getCurrentSchema(): any;
    setSchemaInner(schema: any): any;
    models: {};
    indexes: any;
    definition: any;
    setSchema(schema: any): Promise<any>;
    validateSchema(schema: any): void;
    createStandardModels(): void;
    createUniqueModel(): void;
    uniqueModel: Model<any>;
    createGenericModel(): void;
    genericModel: Model<any>;
    createSchemaModel(): void;
    schemaModelFields: {
        [x: number]: {
            type: string;
            required: boolean;
            value: string;
        };
        format: {
            type: string;
            required: boolean;
        };
        indexes: {
            type: string;
            required: boolean;
        };
        name: {
            type: string;
            required: boolean;
        };
        models: {
            type: string;
            required: boolean;
        };
        params: {
            type: string;
            required: boolean;
        };
        queries: {
            type: string;
            required: boolean;
        };
        process: {
            type: string;
        };
        version: {
            type: string;
            required: boolean;
        };
    };
    createMigrationModel(): void;
    migrationModelFields: {
        [x: number]: {
            type: string;
            value: string;
        };
        date: {
            type: string;
            required: boolean;
        };
        description: {
            type: string;
            required: boolean;
        };
        path: {
            type: string;
            required: boolean;
        };
        version: {
            type: string;
            required: boolean;
        };
    };
    addModel(name: any, fields: any): void;
    listModels(): string[];
    getModel(name: any, options?: {
        nothrow: boolean;
    }): any;
    removeModel(name: any): void;
    getKeys(refresh?: boolean): Promise<any>;
    setDefaultParams(params: any): any;
    transformSchemaForWrite(schema: any): any;
    transformFieldForWrite(field: any): any;
    transformSchemaAfterRead(schema: any): any;
    readSchema(): Promise<any>;
    readSchemas(): Promise<any>;
    removeSchema(schema: any): Promise<void>;
    saveSchema(schema: any): Promise<any>;
}
import { Model } from "./Model.js";
