type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v3/users-POST': {
        parameters: [
        ]
    },
    '/api/v3/users/{userId}-GET': {
        parameters: [
            {
                name: 'userId'
            },
            {
                name: 'fields'
            },
        ]
    },
    '/api/v3/users-GET': {
        parameters: [
            {
                name: 'dtContractEnd'
            },
            {
                name: 'dtContractStart'
            },
            {
                name: 'id'
            },
            {
                name: 'modifiedAt'
            },
            {
                name: 'paging'
            },
            {
                name: 'fields'
            },
            {
                name: 'mail'
            },
            {
                name: 'login'
            },
        ]
    },
    '/api/v3/users/{userId}-PUT': {
        parameters: [
            {
                name: 'userId'
            },
            {
                name: 'firstName'
            },
            {
                name: 'lastName'
            },
            {
                name: 'mail'
            },
            {
                name: 'login'
            },
            {
                name: 'legalEntityId'
            },
            {
                name: 'cspId'
            },
            {
                name: 'calendarId'
            },
            {
                name: 'employeeNumber'
            },
            {
                name: 'birthDate'
            },
            {
                name: 'userWorkCycles'
            },
            {
                name: 'departmentId'
            },
            {
                name: 'managerId'
            },
            {
                name: 'rolePrincipalId'
            },
            {
                name: 'habilitedRoles'
            },
            {
                name: 'cultureId'
            },
            {
                name: 'address'
            },
            {
                name: 'bankName'
            },
            {
                name: 'directLine'
            },
            {
                name: 'jobTitle'
            },
            {
                name: 'gender'
            },
            {
                name: 'nationality'
            },
            {
                name: 'personalEmail'
            },
            {
                name: 'personalMobile'
            },
            {
                name: 'professionalMobile'
            },
            {
                name: 'quote'
            },
            {
                name: 'fields'
            },
        ]
    },
}