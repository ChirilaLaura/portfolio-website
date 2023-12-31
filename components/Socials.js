//links
import Link from "next/link";

//icons
import { RiLinkedinLine, RiGithubLine, RiTwitterLine } from 'react-icons/ri';

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiTwitterLine />
    </Link>
  </div>;
};

export default Socials;
