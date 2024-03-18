import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Menu from './Menu'

function SideBar() {
    return (
        <>
            <div className='flex flex-col gap-4 h-screen '>
                <div className='flex flex-col items-center gap-4'>
                    <Link href={"/"}>
                        <Image src={"/logo.png"} height={200} width={200} />
                    </Link>
                    <div>
                        <div className='relative h-[100px] w-[100px] '>
                            <Image src={"/user.jpg"} className='rounded-full' fill />
                        </div>
                    </div>
                    <p className=''>Supto Sadik</p>
                    <div className='flex justify-center gap-4'>
                        <div className='flex flex-col items-center'>
                            <p>5</p>
                            <p>Posts</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>100</p>
                            <p>Followers</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>15</p>
                            <p>Following</p>
                        </div>
                    </div>
                    <hr className='h-[1] w-full bg-light-1 ' />
                </div>
                <Menu></Menu>
                <div>
                    fv
                <UserButton afterSignOutUrl='/'/>
                </div>
            </div>
        </>
    )
}

export default SideBar