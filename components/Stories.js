import StoryCard from "./StoryCard";

const storiesList = [
  {
    name: "Sohail Gsais",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
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
];
function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
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
