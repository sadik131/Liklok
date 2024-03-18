import Link from 'next/link'
import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupIcon from '@mui/icons-material/Group';

function Menu() {
    return (
        <div className='flex flex-col justify-center gap-4'>
            <Link className='hover:bg-purple-1 px-1 py-2 rounded-lg' href={"/"}><span><HomeIcon className='mr-1' /></span> Home</Link>
            <Link className='hover:bg-purple-1 px-1 py-2 rounded-lg' href={"/"}><span><AddPhotoAlternateIcon className='mr-1' /></span> Create Post</Link>
            <Link className='hover:bg-purple-1 px-1 py-2 rounded-lg' href={"/"}><span><ManageAccountsIcon className='mr-1' /></span>People</Link>
            <Link className='hover:bg-purple-1 px-1 py-2 rounded-lg' href={"/"}><span><GroupIcon className='mr-1' /></span> Edit Profile</Link>
            <hr className='h-[1] w-full bg-light-1' />
        </div>
    )
}

export default Menu