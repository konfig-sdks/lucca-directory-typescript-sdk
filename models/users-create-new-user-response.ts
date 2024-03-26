/*
Directory-v3

Welcome on the documentation for the Directory v3 API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Null } from './null';
import { UsersUpdateByIdRequestHabilitedRolesInner } from './users-update-by-id-request-habilited-roles-inner';
import { UsersUpdateByIdRequestUserWorkCyclesInner } from './users-update-by-id-request-user-work-cycles-inner';

/**
 * 
 * @export
 * @interface UsersCreateNewUserResponse
 */
export interface UsersCreateNewUserResponse {
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'mail': string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'login': string;
    /**
     * 
     * @type {number}
     * @memberof UsersCreateNewUserResponse
     */
    'legalEntityId': number;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'dtContractStart': string;
    /**
     * 
     * @type {any}
     * @memberof UsersCreateNewUserResponse
     */
    'dtContractEnd'?: any;
    /**
     * 
     * @type {number}
     * @memberof UsersCreateNewUserResponse
     */
    'cspId'?: number;
    /**
     * 
     * @type {Null}
     * @memberof UsersCreateNewUserResponse
     */
    'calendarId'?: Null;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'employeeNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'birthDate'?: string;
    /**
     * 
     * @type {Array<UsersUpdateByIdRequestUserWorkCyclesInner>}
     * @memberof UsersCreateNewUserResponse
     */
    'userWorkCycles'?: Array<UsersUpdateByIdRequestUserWorkCyclesInner>;
    /**
     * 
     * @type {number}
     * @memberof UsersCreateNewUserResponse
     */
    'departmentId': number;
    /**
     * 
     * @type {number}
     * @memberof UsersCreateNewUserResponse
     */
    'managerId'?: number;
    /**
     * 
     * @type {number}
     * @memberof UsersCreateNewUserResponse
     */
    'rolePrincipalId': number;
    /**
     * 
     * @type {Array<UsersUpdateByIdRequestHabilitedRolesInner>}
     * @memberof UsersCreateNewUserResponse
     */
    'habilitedRoles'?: Array<UsersUpdateByIdRequestHabilitedRolesInner>;
    /**
     * 
     * @type {number}
     * @memberof UsersCreateNewUserResponse
     */
    'cultureId'?: number;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'address'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'bankName'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'directLine'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'jobTitle'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'personalEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'personalMobile'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'professionalMobile'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersCreateNewUserResponse
     */
    'quote'?: string;
}

