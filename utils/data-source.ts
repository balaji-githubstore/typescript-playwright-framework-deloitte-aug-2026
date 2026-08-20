
import { JsonUtils } from "./json-utils.js"

export const invalidLoginData = [
    { username: "john", password: "john123", expectedError: "Invalid credentials" },
    { username: "peter", password: "peter123", expectedError: "Invalid credentials" }
]

export const invalidLoginDataJson = JsonUtils.getJsonData("invalidLoginData")
