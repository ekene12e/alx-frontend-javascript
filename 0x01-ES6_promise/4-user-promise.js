export default function signUpUser(firstName, lastName) {
    let user = {firstName, lastName};
    return Promise.resolve(user);
}