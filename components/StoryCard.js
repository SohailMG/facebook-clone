import Image from "next/image";
function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 hover:opacity-80 hover:scale-105 transition duration-100 ease-out">
      <Image
        className="absolute opacity-0 lg:opacity-100 z-50 top-10 rounded-full "
        src={profile}
        alt={name}
        width={40}
        height={40}
        objectFit="cover"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        alt={name}
        layout="fill"
      />
    </div>
  );
}

export default StoryCard;
