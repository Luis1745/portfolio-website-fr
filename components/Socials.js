import Link from 'next/link';
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiWhatsappFill,
  RiLinkedinFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.youtube.com/@luisfernandoregalado6322'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeFill />
      </Link>
      <Link href={''} className='hover:text-fuchsia-600 transition-all duration-300'>
        <RiInstagramFill />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100016138113874&mibextid=ZbWKwL'} className='hover:text-indigo-600 transition-all duration-300'>
        <RiFacebookFill />
      </Link>
      <Link href={'https://wa.me/523171111096'} className='hover:text-green-600 transition-all duration-300'>
        <RiWhatsappFill />
      </Link>
      <Link href={''} className='hover:text-cyan-700 transition-all duration-300'>
        <RiLinkedinFill/>
      </Link>
    </div>
  );
};

export default Socials;
