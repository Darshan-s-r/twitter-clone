'use Client'
  
import React, { useState, useEffect, ChangeEvent } from 'react';

export default function TweetPost() {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        // Ensure this code runs only on the client-side
        if (typeof window !== 'undefined') {
            const tweetInput = document.getElementById('tweetInput');
            if (tweetInput) {
                const lines = inputValue.split('\n').length;
                tweetInput.style.height = `${lines * 20}px`;
            }
        }
    }, [inputValue]);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div className='flex p-y-10 px-5'>
            <img className='w-14 h-14 object-cover rounded-full' src='https://pbs.twimg.com/profile_images/1761058966292119552/aqGsGdNE_400x400.jpg' alt='profile image' />
            <textarea
                typeof='text'
                onChange={handleChange}
                value={inputValue}
                id='tweetInput'
                placeholder='What is happening?'
                maxLength={280}
                className='border-none text-3xl pl-5 bg-black  w-full overflow-y-hidden'
            />
        </div>
    );
}

