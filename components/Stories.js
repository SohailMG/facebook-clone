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
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
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
