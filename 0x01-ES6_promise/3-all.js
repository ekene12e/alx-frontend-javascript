import { uploadPhoto, createUser } from "./utils.js";

export function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((res)=>{
    let firstName = res[1].firstName;
    let lastName = res[1].lastName;
    let body = res[0].body;
    console.log(`${body} ${firstName} ${lastName}`);
  })
}