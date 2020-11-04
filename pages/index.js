import { useAuth } from "../utils/auth"

const Index = () => {
  const auth = useAuth()

  console.log("user", auth.user)

  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
  )
}

export default Index
