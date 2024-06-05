import github_icon from '../assets/github_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import discord_icon from '../assets/discord_icon.png'

const SocialMedia = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h3 className='text-xl font-[500]'>社交媒体 / Socials</h3>
      <div className='w-full flex gap-10'>

        <Card
          to='https://github.com/Nier704'
          image={github_icon}
          name='Github'
          description='@Nier704'
        />

        <Card 
          to='https://x.com/lorebas12'
          image={twitter_icon}
          name='Twitter'
          description='@lorebas12'
          twitter={true}
        />

        <Card 
          image={discord_icon}
          name='Discord'
          description='@lore.wired'
          discord={true}
        />

      </div>
    </div>
  )
}

interface CardProps {
  to?: string;
  image: string;
  name: string;
  description: unknown;
  twitter?: boolean;
  discord?: boolean;
}

const Card: React.FC<CardProps> = ({ to, image, name, description, twitter, discord }) => {
  return (
    <a href={to} target='_blank' rel='noopener noreferrer'>
      <div
        className={`flex flex-col h-[165px] ${twitter && 'bg-[#F0F7FD]'} py-6 pl-6 pr-20 border border-[#EBEBEB] rounded-2xl [&>div>p]:text-[14px] ${discord && 'cursor-default [&>div>p]:cursor-default'} transition duration-500 hover:shadow-md`}>
        <img
          className='w-[35px]'
          src={image}
          alt='icon'
        />
        <div className='mt-1'>
          <p>{name}</p>
          <p className='opacity-[.5]'>{description as string}</p>
          {twitter && (
            <button
              style={{transition: "all .5s"}}
              className='bg-[#54ACEF] mt-2 text-[14px] text-white py-1 px-4 rounded-2xl
              tracking-wide hover:bg-blue-500'
            >
              Follow
            </button> 
          )}            
        </div>
      </div>
    </a>
  )
}

export default SocialMedia