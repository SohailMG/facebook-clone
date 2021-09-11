import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";



function Header() {
  return (
    <div className="flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">
      {/* Left Header */}
      <div className="flex items-center">
        <Image
          src="http://links.papareact.com/5me"
          alt=""
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600"/>
          <input type="text" placeholder="Search facebook" className="hidden md:inline-flex flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500" />
        </div>
      </div>

      {/* center Header */}
      <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
              <HeaderIcon active Icon={HomeIcon}/>
              <HeaderIcon Icon={FlagIcon}/>
              <HeaderIcon Icon={PlayIcon}/>
              <HeaderIcon Icon={ShoppingCartIcon}/>
              <HeaderIcon Icon={UserGroupIcon}/>

          </div>
      </div>

      {/* right Header */}
      <div className="flex items-center sm:space-x-2 justify-end">
          {/* Profile picture */}
          <p className="whitespace-nowrap font-semibold pr-3">Sohail Gsais</p>
          <ViewGridIcon className="icon"/>
          <ChatIcon className="icon"/>
          <BellIcon className="icon"/>
          <ChevronDownIcon className="icon"/>
      </div>
    </div>
  );
}

export default Header;
