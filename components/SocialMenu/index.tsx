import React from 'react'
import FacebookIcons from '../icons/FacebookIcons'
import InstagramIcons from '../icons/InstagramIcons'
import TwitterIcons from '../icons/TwitterIcons'
import TelegramIcons from '../icons/TelegramIcons'
import ViberIcons from '../icons/ViberIcons'
import YoutubeIcons from '../icons/YoutubeIcons'

const index: React.FC<{}> = () => {
  return (
    <div className="px-6 py-4">
      <p className="pb-2">Ми в соц мережах</p>
      <div className="flex justify-between items-center ">
        <FacebookIcons />
        <InstagramIcons />
        <TelegramIcons />
        <TwitterIcons />
        <ViberIcons />
        <YoutubeIcons />
      </div>
    </div>
  )
}
export default index
