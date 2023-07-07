import React from 'react'
import Characteristics from '@/components/Characteristics'
const characteristics = [
  {
    name: 'type',
    value: 'kolbasa',
    important: true
  },
  {
    name: 'size',
    value: 'big',
    important: true
  },
  {
    name: 'destination',
    value: 'cat',
    important: true
  },
  {
    name: 'class',
    value: 'econom',
    important: true
  },
  {
    name: 'weight',
    value: '1kg',
    important: false
  },
  {
    name: 'countryRegistration',
    value: 'ukraina',
    important: false
  },
  {
    name: 'countryProduction',
    value: 'ukraina',
    important: false
  },
  {
    name: 'count',
    value: 1,
    important: false
  },
  {
    name: 'features',
    value: ['features', 'features', 'features'],
    important: false
  },
  // width: null,
  // height: null,
  // color: null,
  {
    name: 'dayOfGarantee',
    value: 14,
    important: false
  }
]
const page: React.FC<{}> = () => {
  return (
    <div>
      <Characteristics viewSize="fullSize" characteristics={characteristics} />
    </div>
  )
}
export default page
