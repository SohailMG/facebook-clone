import { ChatIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
function Post({ name, message, email, image, timestamp, postImage }) {
    const [likePost, setLikePost] = useState(false)
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-2xl shadow-sm">
        {/* Top post */}
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            width={40}
            height={40}
            alt={name}
            className="rounded-full"
          />
          <div>
            <p className="font-medium ">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        {/* Post message */}
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            src={postImage}
            alt="Post Image"
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}

      {/* Post bottom */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className={`h-4 ${likePost && "text-blue-800"}`} />
          <p
            className={`text-xs sm:text-base ${likePost && "text-blue-800 font-medium"}`}
            onClick={() => setLikePost(!likePost)}
          >
            Like
          </p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base rounded-br-2xl">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
