import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import Contact from "./Contact";

function Widgets({ randomUsers }) {
  return (
    <div className="hidden lg:inline-flex flex-col w-60 p-2 mt-5">
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
