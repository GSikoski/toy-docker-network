/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_for_access_token_token_post } from '../models/Body_login_for_access_token_token_post';
import type { Message } from '../models/Message';
import type { Token } from '../models/Token';
import type { UserCreate } from '../models/UserCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Root
     * @returns any Successful Response
     * @throws ApiError
     */
    public static rootGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
    /**
     * Read Items
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readItemsItemsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/items/',
        });
    }
    /**
     * Read Users Me
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readUsersMeUsersMeGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
        });
    }
    /**
     * Send
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static sendSendPost(
        requestBody: Message,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/send',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Send
     * @param message
     * @returns any Successful Response
     * @throws ApiError
     */
    public static sendSendstrPost(
        message: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sendstr',
            query: {
                'message': message,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Send
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static sendNewuserPost(
        requestBody: UserCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/newuser',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Login For Access Token
     * @param formData
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginForAccessTokenTokenPost(
        formData: Body_login_for_access_token_token_post,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
