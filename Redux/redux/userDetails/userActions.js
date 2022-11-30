import { USER_DETAILS } from "./userTypes";

export const userAction = (data) => {
    return {
        type:USER_DETAILS,
        payload:data,
    }
}