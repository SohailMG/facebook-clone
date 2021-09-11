import {
  DotsHorizontalIcon,
  GiftIcon,
  SearchIcon,
  VideoCameraIcon,XIcon
} from "@heroicons/react/solid";
import Contact from "./Contact";

function Widgets({ randomUsers }) {
  return (
    <div className="hidden lg:inline-flex flex-col w-80 p-2 mt-5">
      <div className="bg-white rounded-xl p-4 mb-2">
        <div className="flex items-center space-x-2 mb-2">
          <GiftIcon className="h-8 text-blue-400" />
          <p>Birthdays</p>
          <XIcon className="h-4 " />
        </div>
        <p>Mark Zuckerberge&apos s birthday is today</p>
      </div>
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {randomUsers.map((contact, index) => (
        <Contact
          key={index}
          name={`${contact.name.first} ${contact.name.last} `}
          src={contact.picture.medium}
        />
      ))}
    </div>
  );
}

export default Widgets;
