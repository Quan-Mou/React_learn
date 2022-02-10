import { useContext } from "react"
import { UserContext, Token } from "../../App"
function useUserContext() {
  const user = useContext(UserContext)
  const token = useContext(Token)
  return [user, token];
}

export default useUserContext
