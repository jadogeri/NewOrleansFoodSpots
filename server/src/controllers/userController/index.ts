import { registerUser }  from "./registerUser";
import { loginUser }  from "./loginUser"
import { logoutUser }  from "./logoutUser"
import { forgotUser }  from "./forgotPasswordUser"
import { resetUser }  from "./resetPasswordUser"
import { deactivateUser } from "./deactivateUser"
import { currentUser}  from "./currentUser"


module.exports = { registerUser, loginUser, forgotUser, deactivateUser,
                   logoutUser, resetUser, currentUser}
