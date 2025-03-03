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
 * @interface UsersUpdateByIdRequest
 */
export interface UsersUpdateByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'mail'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'login'?: string;
    /**
     * 
     * @type {number}
     * @memberof UsersUpdateByIdRequest
     */
    'legalEntityId'?: number;
    /**
     * 
     * @type {number}
     * @memberof UsersUpdateByIdRequest
     */
    'cspId'?: number;
    /**
     * 
     * @type {Null}
     * @memberof UsersUpdateByIdRequest
     */
    'calendarId'?: Null;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'employeeNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'birthDate'?: string;
    /**
     * 
     * @type {Array<UsersUpdateByIdRequestUserWorkCyclesInner>}
     * @memberof UsersUpdateByIdRequest
     */
    'userWorkCycles'?: Array<UsersUpdateByIdRequestUserWorkCyclesInner>;
    /**
     * 
     * @type {number}
     * @memberof UsersUpdateByIdRequest
     */
    'departmentId'?: number;
    /**
     * 
     * @type {number}
     * @memberof UsersUpdateByIdRequest
     */
    'managerId'?: number;
    /**
     * 
     * @type {number}
     * @memberof UsersUpdateByIdRequest
     */
    'rolePrincipalId'?: number;
    /**
     * 
     * @type {Array<UsersUpdateByIdRequestHabilitedRolesInner>}
     * @memberof UsersUpdateByIdRequest
     */
    'habilitedRoles'?: Array<UsersUpdateByIdRequestHabilitedRolesInner>;
    /**
     * 
     * @type {number}
     * @memberof UsersUpdateByIdRequest
     */
    'cultureId'?: number;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'address'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'bankName'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'directLine'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'jobTitle'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'personalEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'personalMobile'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'professionalMobile'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUpdateByIdRequest
     */
    'quote'?: string;
}

