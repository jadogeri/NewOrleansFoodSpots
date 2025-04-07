import { registerUser }  from "./registerUser";
import { loginUser } from "./loginUser";
import { logoutUser }  from "./logoutUser"
import { resetUser }  from "./resetUser"
import { forgotUser }  from "./forgotUser"
import { currentUser}  from "./currentUser"
import { deactivateUser } from "./deactivateUser"
import { profileUser} from "./profileUser"


module.exports = { registerUser, loginUser, logoutUser, 
    currentUser, forgotUser, resetUser, deactivateUser, profileUser }
