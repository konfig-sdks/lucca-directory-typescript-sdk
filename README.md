<div align="left">

[![Visit Lucca](./header.png)](https://lucca-hr.com)

# [Lucca](https://lucca-hr.com)<a id="lucca"></a>

Welcome on the documentation for the Directory v3 API.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`luccadirectory.users.createNewUser`](#luccadirectoryuserscreatenewuser)
  * [`luccadirectory.users.getById`](#luccadirectoryusersgetbyid)
  * [`luccadirectory.users.listExcludedFormer`](#luccadirectoryuserslistexcludedformer)
  * [`luccadirectory.users.updateById`](#luccadirectoryusersupdatebyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Lucca&serviceName=Directory&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { LuccaDirectory } from "lucca-directory-typescript-sdk";

const luccadirectory = new LuccaDirectory({
  // Defining the base path is optional and defaults to https://example.ilucca.net
  // basePath: "https://example.ilucca.net",
  apiKey: "API_KEY",
});

const createNewUserResponse = await luccadirectory.users.createNewUser();

console.log(createNewUserResponse);
```

## Reference<a id="reference"></a>


### `luccadirectory.users.createNewUser`<a id="luccadirectoryuserscreatenewuser"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUserResponse = await luccadirectory.users.createNewUser();
```

#### 🔄 Return<a id="🔄-return"></a>

[UsersCreateNewUserResponse](./models/users-create-new-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccadirectory.users.getById`<a id="luccadirectoryusersgetbyid"></a>

Retrieve a single User identified by its unique identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await luccadirectory.users.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

##### fields: `any`<a id="fields-any"></a>
              `any`[]

Comma-separated list of fields of the user to include in responses. Extended data can be retrieved with `?fields=extendedData`. 

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetByIdResponse](./models/users-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/users/{userId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccadirectory.users.listExcludedFormer`<a id="luccadirectoryuserslistexcludedformer"></a>

Retrieve a list of Users.

By default, former employees are excluded from the response. In order to retrieve them, you may add the `?dtContractEnd=notequal,null` query parameter to your request.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listExcludedFormerResponse =
  await luccadirectory.users.listExcludedFormer({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dtContractEnd: `string`<a id="dtcontractend-string"></a>

`{comparator},{date-time}`. 

##### dtContractStart: `string`<a id="dtcontractstart-string"></a>

{comparator},{date-time}

##### id: `any`<a id="id-any"></a>
          `any`[]

User\'s identifier

##### modifiedAt: `string`<a id="modifiedat-string"></a>

{comparator},{date-time}

##### paging: `string`<a id="paging-string"></a>

{offset},{limit}. Defaults to 0,1000.

##### fields: `any`<a id="fields-any"></a>
              `any`[]

##### mail: `string`<a id="mail-string"></a>

User\'s mail

##### login: `string`<a id="login-string"></a>

User\'s login

#### 🔄 Return<a id="🔄-return"></a>

[UsersListExcludedFormerResponse](./models/users-list-excluded-former-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccadirectory.users.updateById`<a id="luccadirectoryusersupdatebyid"></a>

Update fields of a single User identified by its unique id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await luccadirectory.users.updateById({
  firstName: "John",
  lastName: "Doe",
  mail: "jdoe@corp.com",
  login: "jdoe",
  legalEntityId: 1,
  cspId: 2,
  employeeNumber: "000000452",
  birthDate: "1989-12-22T00:00:00",
  departmentId: 14,
  managerId: 455,
  rolePrincipalId: 55,
  cultureId: 1040,
  address: "13, rue Martin Bernard, 75 Paris",
  bankName: "My Bank",
  directLine: "0123456789",
  jobTitle: "Developer",
  gender: "Male",
  nationality: "French",
  personalEmail: "email@test.fr",
  personalMobile: "0612345678",
  professionalMobile: "0612345678",
  quote: "string",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

##### firstName: `string`<a id="firstname-string"></a>

##### lastName: `string`<a id="lastname-string"></a>

##### mail: `string`<a id="mail-string"></a>

##### login: `string`<a id="login-string"></a>

##### legalEntityId: `number`<a id="legalentityid-number"></a>

##### cspId: `number`<a id="cspid-number"></a>

##### calendarId:<a id="calendarid"></a>

##### employeeNumber: `string`<a id="employeenumber-string"></a>

##### birthDate: `string`<a id="birthdate-string"></a>

##### userWorkCycles: [`UsersUpdateByIdRequestUserWorkCyclesInner`](./models/users-update-by-id-request-user-work-cycles-inner.ts)[]<a id="userworkcycles-usersupdatebyidrequestuserworkcyclesinnermodelsusers-update-by-id-request-user-work-cycles-innerts"></a>

##### departmentId: `number`<a id="departmentid-number"></a>

##### managerId: `number`<a id="managerid-number"></a>

##### rolePrincipalId: `number`<a id="roleprincipalid-number"></a>

##### habilitedRoles: [`UsersUpdateByIdRequestHabilitedRolesInner`](./models/users-update-by-id-request-habilited-roles-inner.ts)[]<a id="habilitedroles-usersupdatebyidrequesthabilitedrolesinnermodelsusers-update-by-id-request-habilited-roles-innerts"></a>

##### cultureId: `number`<a id="cultureid-number"></a>

##### address: `string`<a id="address-string"></a>

##### bankName: `string`<a id="bankname-string"></a>

##### directLine: `string`<a id="directline-string"></a>

##### jobTitle: `string`<a id="jobtitle-string"></a>

##### gender: `string`<a id="gender-string"></a>

##### nationality: `string`<a id="nationality-string"></a>

##### personalEmail: `string`<a id="personalemail-string"></a>

##### personalMobile: `string`<a id="personalmobile-string"></a>

##### professionalMobile: `string`<a id="professionalmobile-string"></a>

##### quote: `string`<a id="quote-string"></a>

##### fields: `any`<a id="fields-any"></a>
              `any`[]

Fields of the user, comma separated

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/users/{userId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
