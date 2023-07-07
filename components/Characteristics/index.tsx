import React from 'react'
import CharacteristicsSmall from './CharacteristicsSmall'
import CharacteristicsBig from './CharacteristicsBig'

type IViewSize = 'smallSize' | 'fullSize'

const SMALLSIZE = 'smallSize'

const index: React.FC<{
  viewSize: IViewSize
  characteristics: any
}> = ({ viewSize, characteristics }) => {
  return (
    <div>
      {viewSize === SMALLSIZE ? (
        <CharacteristicsSmall characteristics={characteristics} />
      ) : (
        <CharacteristicsBig characteristics={characteristics} />
      )}
    </div>
  )
}
export default index
