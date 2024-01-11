import Link from "next/link";
import LoginBtn from "../login/LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import LogoutBtn from "../login/LogoutBtn";

export default async function Header() {
  let session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header id="header" role="banner">
      <div className="left">
        <h1 className="logo">
          <Link href="/">ZERO</Link>
        </h1>
        <nav className="nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/list">List</Link>
            </li>
            <li>
              <Link href="/write">Write</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <ul>
          {session ? (
            <>
              <li>{session.user.name}님 반가워요👼</li>
              <li>
                <LogoutBtn />
              </li>
            </>
          ) : (
            <>
              <li>
                <LoginBtn />
              </li>
              <li>
                <Link href="/register">회원가입</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
