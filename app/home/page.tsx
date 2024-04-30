import Image from 'next/image'
import LeftSideBar from '../components/LeftSideBar'
import { BsTwitterX } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { TiMessageTyping } from "react-icons/ti";
import { FaRegListAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { FaPenNib } from "react-icons/fa6";
import { useMemo } from 'react';
import { BsThreeDots } from "react-icons/bs";

// -----------------
import { TbBrandMessenger } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { RiShare2Fill } from "react-icons/ri";




import Link from 'next/link';


export default function page() {

  interface twitterSidebarIcons {
    title:string,
    icon:React.ReactNode,
    link:string,
  }

  const sidebarIcons:twitterSidebarIcons []= useMemo(()=> [
    {
      title:"",
      icon: <BsTwitterX></BsTwitterX>,
      link: '/',
    },
    {
      title:"Home",
      icon: <FaHome></FaHome>,
      link: '/',
    },
    {
      title:"Explore",
      icon: <FiSearch></FiSearch>,
      link: '/',
    },
    {
      title:"Notifications",
      icon: <IoIosNotificationsOutline></IoIosNotificationsOutline>,
      link: '/',
    },
    {
      title:"Messages",
      icon: <FiMessageSquare></FiMessageSquare>,
      link: '/',
    },
    {
      title:"Grok",
      icon: <TiMessageTyping></TiMessageTyping>,
      link: '/',
    },
    {
      title:"Lists",
      icon: <FaRegListAlt></FaRegListAlt>,
      link: '/',
    },
    {
      title:"Profile",
      icon: <CgProfile></CgProfile>,
      link: '/',
    },
    {
      title:"More",
      icon: <CgMoreO></CgMoreO>,
      link: '/',
    },
  ],[]); 

  return (
<div className='flex '>
  <div className='flex-1 max-w-[450px] max-2xl:max-w-[90px]'>
    <div className="text-4xl flex flex-col h-screen ">
      <ul>
        {sidebarIcons.map((item, index) =>(
          <li key={index} className='flex justify-start items-center mx-7 mt-5 hover:bg-gray-600 rounded'>
            <Link className=" " href={item.link}></Link>
            <span className=''>{item.icon}</span>
            <samp className='hidden 2xl:block hover:bg-gray-600 rounded-full pl-5'>{item.title}</samp>
          </li>
        ))}
        <div className='flex ml-7 mt-5 '>
        <FaPenNib className='mt-4 mr-5'></FaPenNib>
        <button className="hidden 2xl:block bg-blue-500 text-2xl px-8 py-4 rounded-full"> Post</button>

        </div>
      </ul>
</div>
  </div>
  <div className='flex-1 max-lg:min-w-[50%] border-x-2 border-slate-500'>
    <div className='flex  border-b-2 border-slate-500'>
    <button className='text-2xl flex-1 hover:bg-slate-400'>Foryou</button>
    <button className='text-2xl flex-1 hover:bg-slate-400'>Following</button>
    <button className='text-2xl p-5 hover:bg-slate-400'>set</button>
    <hr className='text-slate-600'></hr>
    </div>
    {/* --------------------------------- */}
    <div className='flex p-y-10 px-5 border-b-2 border-slate-500'>
            <img className='w-14 mt-5 h-14 object-cover rounded-full' src='https://pbs.twimg.com/profile_images/1761058966292119552/aqGsGdNE_400x400.jpg' alt='profile image' />
            <textarea
                typeof='text'
                placeholder='What is happening?'
                maxLength={280}
                className='border-none border-0 text-3xl pl-5 pt-5 bg-black  w-full overflow-y-hidden'
            />
        </div>
        {/* -------------------------- */}
        <div className='border-b-2 border-slate-500 pb-5'>
        <div className='flex px-5'>
        <img className='w-14 mt-5 h-14 object-cover rounded-full' src='https://pbs.twimg.com/profile_images/1761058966292119552/aqGsGdNE_400x400.jpg' alt='profile image' />
          <p className='mt-5 ml-5 text-2xl'>Darshan</p>
          <p className='mt-5 ml-1 text-2xl'>@Darshan2002</p>
          <BsThreeDots className='text-3xl mt-5 ml-auto hover:bg-blue-300 hover:rounded-full'></BsThreeDots>
          </div>
        <div className='ml-24 mr-5'>
        <p className='text-2xl pt'>content  in the new line</p>
        <div className='flex justify-between mt-4'>
          <div className='flex text-2xl'>
            <TbBrandMessenger className=' hover:bg-blue-300 rounded-full'></TbBrandMessenger>
            <span className='ml-3 text-xl'>74</span>
           
          </div>
          <div className='flex text-2xl'>
            <BiRepost className=' hover:bg-blue-300 rounded-full'></BiRepost>
          <span className='ml-3 text-xl'>33</span>
          </div>
          <div className='flex text-2xl'>
            <CiHeart className=' hover:bg-blue-300 rounded-full'></CiHeart>
                      <span className='ml-3 text-xl'>9</span>

          </div>
          <div className='flex text-2xl'>
            <IoStatsChartOutline className=' hover:bg-blue-300 rounded-full'></IoStatsChartOutline>
                      <span className='ml-3 text-xl'>74</span>

          </div>
          <div className='flex text-2xl'>
          <CiBookmark className=' hover:bg-blue-300 rounded-full'></CiBookmark>
          <RiShare2Fill className='ml-3 hover:bg-blue-300 rounded-full'></RiShare2Fill>

          </div>
        </div>
        </div>
        </div>
        
  </div>
  <div className=' flex-1 max-w-[530px] max-xl:hidden  bg-blue-400'>div 3</div>
</div>

  )
}
 