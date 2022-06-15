import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ token }) => {
  const router = useRouter();

  const doLogout = () => {
    localStorage.removeItem("accessToken");
    router.reload();
  };

  return (
    <>
      <header className="sticky top-0 flex items-center justify-between h-16 bg-green-400 ">
        <div className="flex flex-row items-center justify-center">
          <Image src="/logo.png" width="70" height="70" />
          <h2 className="text-4xl font-extrabold text-green-900 font-display">
            Cookie Stand Admin
          </h2>
        </div>
        <div className="flex justify-around w-2/12 mr-4 text-lg font-bold text-green-900 font-display">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/">
            <a>Details</a>
          </Link>
          {token && <button onClick={doLogout}>Log out</button>}
        </div>
      </header>
    </>
  );
};

export default Header;
