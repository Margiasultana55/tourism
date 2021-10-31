import { useContext } from "react"
import { Authcontext } from "../contexts/AuthProvider"

const useAuth = () => {
    return useContext(Authcontext);
}
export default useAuth;