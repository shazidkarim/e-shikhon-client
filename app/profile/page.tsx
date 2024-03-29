'use client'
import React, {FC, useState} from 'react'
import Protected from '../hooks/useProtected';
import Heading from '../utils/Heading';
import Header from '../components/Header';
import Profile from '../components/Profile/Profile';
import { useSelector } from 'react-redux';

type Props = {}

const Page: FC<Props> = ({ }) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    const { user } = useSelector((state: any) => state.auth);
  return (
  <>
    <Heading
      title={`profile - e-Shikhon`}
      description="Learning"
      keywords="React,Fron end ,"
    />
    <Header
      open={open}
      setOpen={setOpen}
      activeItem={activeItem}
      setRoute={setRoute}
      route={route}
    />
    <Profile user={user}/>
  </>
  )
}

export default Page;