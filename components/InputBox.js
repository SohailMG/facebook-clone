import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [postImage, setPostImage] = useState(null);

  const sendForm = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (postImage) {
          const uploadTask = firebase
            .storage()
            .ref(`posts/${doc.id}`)
            .putString(postImage, "data_url");

          removeImgFromPost();
          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              firebase
                .storage()
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };

  // Adding image to post
  const addImgToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (e) => {
      setPostImage(e.target.result);
    };
  };
  // Removing image
  const removeImgFromPost = () => {
    setPostImage(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      {/* Top */}
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          alt={session.user.name}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1 ">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none"
            type="text"
            placeholder={`What's on your mind ${session.user.name}`}
          />
          <button hidden onClick={sendForm}></button>
        </form>
        {postImage && (
          <div
            onClick={removeImgFromPost}
            className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img src={postImage} alt="r" className="h-10 object-contain" />
            <p className="text-red-500 text-center text-xs">Remove</p>
          </div>
        )}
      </div>
      {/* Bottom */}
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImgToPost}
            hidden
            type="file"
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
