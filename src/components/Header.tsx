/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogout: () => void;
}

const Header = ({
  user,
  onLogout,
}: HeaderProps) => {

  return (
    <nav className=" bg-orange-300 flex justify-between border-b-2 border-t-2 border-x-orange-800 fix top-0 left-0 right-0 p-2 mt-5 rounded-lg shadow-md">
      <Link href="/">
        <Image
          alt="logo"
          layout="fixed"
          src="/img/logo.png"
          width={102}
          height={46}
          className="cursor-pointer"
        ></Image>
      </Link>
      <div className="flex space-x-2 cursor-pointer mt-2">
        <ArrowLeftOnRectangleIcon className="h-8 w-8 mt-0.5" />
        <h4 className="text-gray-500">
          {user ? (<button onClick={onLogout}>
            Log out
          </button>) :
            (<Link href="LoginPage">
              <button>
                Log In
              </button>
            </Link>)
          }
        </h4>
      </div>
      <div className="">

      </div>
    </nav>
  );
}

export default Header;
