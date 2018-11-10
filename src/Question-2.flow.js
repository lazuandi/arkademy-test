//@flow
const isUserNameValid = (userNameThatWillBeCheck: string) => {
    let result: string = ''

    if (userNameThatWillBeCheck) {
        if (
            userNameThatWillBeCheck.substr(0, 5) ===
            userNameThatWillBeCheck.substr(0, 5).toLowerCase()
        ) {
            if (
                userNameThatWillBeCheck.substr(5, 1) === '_' ||
                userNameThatWillBeCheck.substr(5, 1) === '.'
            ) {
                if (
                    userNameThatWillBeCheck.substr(6, 2) ===
                    userNameThatWillBeCheck.substr(6, 2).toUpperCase()
                ) {
                    result = 'username is valid'
                } else {
                    result =
                        'username is not valid because last of two characters must be uppercase'
                }
            } else {
                result =
                    'username is not valid because at six characters must be underscore or dot symbol'
            }
        } else {
            result =
                'username is not valid because first of five characters must be lowercase'
        }
    } else {
        result = 'username must be not null'
    }
    return result
}

const inputUserName = 'qwert_QQ'

console.log(isUserNameValid(inputUserName))
