import LoginForm from '../../components/LoginForm'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

function Login() {
  return (
    <LoginForm />
  )
}

export default Login