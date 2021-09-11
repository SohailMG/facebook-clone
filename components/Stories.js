import { PlusCircleIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/client";
import StoryCard from "./StoryCard";

const storiesList = [

  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberge",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Mark Zuckerberge",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },

];
function Stories() {
  const [session] = useSession();
  return (
    <div className="flex justify-center space-x-3 mx-auto overflow-scroll">
      <PlusCircleIcon className="relative text-gray-200 hover:text-gray-500  h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 bg-gray-300 rounded-3xl" />
      {storiesList.map((story, index) => (
        <StoryCard
          name={story.name}
          src={story.src}
          profile={story.profile}
          key={index}
        />
      ))}
    </div>
  );
}

export default Stories;
