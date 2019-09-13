declare function require(name:string):any;
export { MassiveActionHandler } from './MassiveActionHandler'
export { Migration } from './Migration'
export { MigrationRunner } from './MigrationRunner'
export { MigrationSequence, MassiveActionHandlerOptions } from './interfaces'
const massive = require('./massive');
export { massive }
