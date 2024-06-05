import icon from '../assets/icon.jpg'

const Introduction: React.FC<{ toggleAudio: () => void, isPlaying: boolean }> = ({ toggleAudio, isPlaying }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Me />
      <DisableMusic
         toggleAudio={toggleAudio}
         isPlaying={isPlaying}
      />
    </div>
  )
}

const DisableMusic: React.FC<{ toggleAudio: () => void, isPlaying: boolean }> = ({ toggleAudio, isPlaying }) => {
   return (
      <div className='flex'>
         <button
            onClick={() => toggleAudio()}
            style={{boxShadow: "2px 2px 15px -10px black", transition: "all .5s"}}
            className='py-2 px-4 bg-[#8087BE] text-white rounded-lg text-sm
            hover:bg-blue-500'
         >
            {isPlaying ? 'Disable Music' : 'Enable Music'}
         </button>
      </div>
   )
}

const Me = () => {
   return (
      <div className='flex flex-col gap-6'>
         <img
            className='w-[187px] rounded-[360px]'
            src={icon} 
            alt="icon" 
         />
         <div className='flex flex-col gap-3 ml-2'>
            <h3 className='text-6xl font-[500]'>Lore 有線</h3>
            <p className='text-xl opacity-[.7]'>Backend Developer</p>
         </div>
      </div>
   )
}

export default Introduction