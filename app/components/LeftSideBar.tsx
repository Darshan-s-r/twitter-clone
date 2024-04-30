import React from 'react'



export default function LeftSideBar() {
  return (
    <div className="flex h-screen">
    <div className=" text-white w-1/5 flex flex-col justify-between">
        <div className="py-6 ml-10" >
            <a href="/home" className="block px-4 py-2">Home</a>
            <a href="/explore" className="block px-4 py-2">Explore</a>
            <a href="/notifications" className="block px-4 py-2">Notifications</a>
            <a href="/messages" className="block px-4 py-2">Messages</a>
            <a href="/grok" className="block px-4 py-2">Grok</a>
            <a href="/lists" className="block px-4 py-2">Lists</a>
            <a href="/profile" className="block px-4 py-2">Profile</a>
        </div>
        <a href="/more" className="block px-4 py-2 ml-10">More</a>
    <div className="flex-1">
        <div className="p-6 m-10">
            <button className="bg-blue-500 text-white px-8 py-2 rounded">Post</button>
        </div>
    </div>
</div>
</div>
  )
}
