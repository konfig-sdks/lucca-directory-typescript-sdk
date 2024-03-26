/* tslint:disable */
/* eslint-disable */
/*
Directory-v3

Welcome on the documentation for the Directory v3 API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Null } from '../models';
// @ts-ignore
import { UsersCreateNewUserResponse } from '../models';
// @ts-ignore
import { UsersGetByIdResponse } from '../models';
// @ts-ignore
import { UsersListExcludedFormerResponse } from '../models';
// @ts-ignore
import { UsersUpdateByIdRequest } from '../models';
// @ts-ignore
import { UsersUpdateByIdRequestHabilitedRolesInner } from '../models';
// @ts-ignore
import { UsersUpdateByIdRequestUserWorkCyclesInner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authorization", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v3/users',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a single User identified by its unique identifier.
         * @summary Get a User by Id
         * @param {string} userId 
         * @param {Array<any>} [fields] Comma-separated list of fields of the user to include in responses. Extended data can be retrieved with &#x60;?fields&#x3D;extendedData&#x60;. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (userId: string, fields?: Array<any>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getById', 'userId', userId)
            const localVarPath = `/api/v3/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-userId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authorization", configuration })
            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v3/users/{userId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a list of Users.  By default, former employees are excluded from the response. In order to retrieve them, you may add the `?dtContractEnd=notequal,null` query parameter to your request. 
         * @summary List Users
         * @param {string} [dtContractEnd] &#x60;{comparator},{date-time}&#x60;. 
         * @param {string} [dtContractStart] {comparator},{date-time}
         * @param {Array<any>} [id] User\&#39;s identifier
         * @param {string} [modifiedAt] {comparator},{date-time}
         * @param {string} [paging] {offset},{limit}. Defaults to 0,1000.
         * @param {Array<any>} [fields] 
         * @param {string} [mail] User\&#39;s mail
         * @param {string} [login] User\&#39;s login
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listExcludedFormer: async (dtContractEnd?: string, dtContractStart?: string, id?: Array<any>, modifiedAt?: string, paging?: string, fields?: Array<any>, mail?: string, login?: string, body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authorization", configuration })
            if (dtContractEnd !== undefined) {
                localVarQueryParameter['dtContractEnd'] = dtContractEnd;
            }

            if (dtContractStart !== undefined) {
                localVarQueryParameter['dtContractStart'] = dtContractStart;
            }

            if (id) {
                localVarQueryParameter['id'] = id;
            }

            if (modifiedAt !== undefined) {
                localVarQueryParameter['modifiedAt'] = modifiedAt;
            }

            if (paging !== undefined) {
                localVarQueryParameter['paging'] = paging;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (mail !== undefined) {
                localVarQueryParameter['mail'] = mail;
            }

            if (login !== undefined) {
                localVarQueryParameter['login'] = login;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v3/users',
                httpMethod: 'GET'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update fields of a single User identified by its unique id.
         * @summary Update a User by id
         * @param {string} userId 
         * @param {Array<any>} [fields] Fields of the user, comma separated
         * @param {UsersUpdateByIdRequest} [usersUpdateByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (userId: string, fields?: Array<any>, usersUpdateByIdRequest?: UsersUpdateByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateById', 'userId', userId)
            const localVarPath = `/api/v3/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-userId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authorization", configuration })
            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: usersUpdateByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v3/users/{userId}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(usersUpdateByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersCreateNewUserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a single User identified by its unique identifier.
         * @summary Get a User by Id
         * @param {UsersApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: UsersApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersGetByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.userId, requestParameters.fields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a list of Users.  By default, former employees are excluded from the response. In order to retrieve them, you may add the `?dtContractEnd=notequal,null` query parameter to your request. 
         * @summary List Users
         * @param {UsersApiListExcludedFormerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listExcludedFormer(requestParameters: UsersApiListExcludedFormerRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersListExcludedFormerResponse>> {
            const body: object = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.listExcludedFormer(requestParameters.dtContractEnd, requestParameters.dtContractStart, requestParameters.id, requestParameters.modifiedAt, requestParameters.paging, requestParameters.fields, requestParameters.mail, requestParameters.login, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update fields of a single User identified by its unique id.
         * @summary Update a User by id
         * @param {UsersApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: UsersApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const usersUpdateByIdRequest: UsersUpdateByIdRequest = {
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName,
                mail: requestParameters.mail,
                login: requestParameters.login,
                legalEntityId: requestParameters.legalEntityId,
                cspId: requestParameters.cspId,
                calendarId: requestParameters.calendarId,
                employeeNumber: requestParameters.employeeNumber,
                birthDate: requestParameters.birthDate,
                userWorkCycles: requestParameters.userWorkCycles,
                departmentId: requestParameters.departmentId,
                managerId: requestParameters.managerId,
                rolePrincipalId: requestParameters.rolePrincipalId,
                habilitedRoles: requestParameters.habilitedRoles,
                cultureId: requestParameters.cultureId,
                address: requestParameters.address,
                bankName: requestParameters.bankName,
                directLine: requestParameters.directLine,
                jobTitle: requestParameters.jobTitle,
                gender: requestParameters.gender,
                nationality: requestParameters.nationality,
                personalEmail: requestParameters.personalEmail,
                personalMobile: requestParameters.personalMobile,
                professionalMobile: requestParameters.professionalMobile,
                quote: requestParameters.quote
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.userId, requestParameters.fields, usersUpdateByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewUser(options?: AxiosRequestConfig): AxiosPromise<UsersCreateNewUserResponse> {
            return localVarFp.createNewUser(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a single User identified by its unique identifier.
         * @summary Get a User by Id
         * @param {UsersApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: UsersApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<UsersGetByIdResponse> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of Users.  By default, former employees are excluded from the response. In order to retrieve them, you may add the `?dtContractEnd=notequal,null` query parameter to your request. 
         * @summary List Users
         * @param {UsersApiListExcludedFormerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listExcludedFormer(requestParameters: UsersApiListExcludedFormerRequest = {}, options?: AxiosRequestConfig): AxiosPromise<UsersListExcludedFormerResponse> {
            return localVarFp.listExcludedFormer(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update fields of a single User identified by its unique id.
         * @summary Update a User by id
         * @param {UsersApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: UsersApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getById operation in UsersApi.
 * @export
 * @interface UsersApiGetByIdRequest
 */
export type UsersApiGetByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof UsersApiGetById
    */
    readonly userId: string
    
    /**
    * Comma-separated list of fields of the user to include in responses. Extended data can be retrieved with `?fields=extendedData`. 
    * @type {Array<any>}
    * @memberof UsersApiGetById
    */
    readonly fields?: Array<any>
    
}

/**
 * Request parameters for listExcludedFormer operation in UsersApi.
 * @export
 * @interface UsersApiListExcludedFormerRequest
 */
export type UsersApiListExcludedFormerRequest = {
    
    /**
    * `{comparator},{date-time}`. 
    * @type {string}
    * @memberof UsersApiListExcludedFormer
    */
    readonly dtContractEnd?: string
    
    /**
    * {comparator},{date-time}
    * @type {string}
    * @memberof UsersApiListExcludedFormer
    */
    readonly dtContractStart?: string
    
    /**
    * User\'s identifier
    * @type {Array<any>}
    * @memberof UsersApiListExcludedFormer
    */
    readonly id?: Array<any>
    
    /**
    * {comparator},{date-time}
    * @type {string}
    * @memberof UsersApiListExcludedFormer
    */
    readonly modifiedAt?: string
    
    /**
    * {offset},{limit}. Defaults to 0,1000.
    * @type {string}
    * @memberof UsersApiListExcludedFormer
    */
    readonly paging?: string
    
    /**
    * 
    * @type {Array<any>}
    * @memberof UsersApiListExcludedFormer
    */
    readonly fields?: Array<any>
    
    /**
    * User\'s mail
    * @type {string}
    * @memberof UsersApiListExcludedFormer
    */
    readonly mail?: string
    
    /**
    * User\'s login
    * @type {string}
    * @memberof UsersApiListExcludedFormer
    */
    readonly login?: string
    
} & object

/**
 * Request parameters for updateById operation in UsersApi.
 * @export
 * @interface UsersApiUpdateByIdRequest
 */
export type UsersApiUpdateByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof UsersApiUpdateById
    */
    readonly userId: string
    
    /**
    * Fields of the user, comma separated
    * @type {Array<any>}
    * @memberof UsersApiUpdateById
    */
    readonly fields?: Array<any>
    
} & UsersUpdateByIdRequest

/**
 * UsersApiGenerated - object-oriented interface
 * @export
 * @class UsersApiGenerated
 * @extends {BaseAPI}
 */
export class UsersApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create a new User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiGenerated
     */
    public createNewUser(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).createNewUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a single User identified by its unique identifier.
     * @summary Get a User by Id
     * @param {UsersApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiGenerated
     */
    public getById(requestParameters: UsersApiGetByIdRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of Users.  By default, former employees are excluded from the response. In order to retrieve them, you may add the `?dtContractEnd=notequal,null` query parameter to your request. 
     * @summary List Users
     * @param {UsersApiListExcludedFormerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiGenerated
     */
    public listExcludedFormer(requestParameters: UsersApiListExcludedFormerRequest = {}, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).listExcludedFormer(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update fields of a single User identified by its unique id.
     * @summary Update a User by id
     * @param {UsersApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiGenerated
     */
    public updateById(requestParameters: UsersApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
