import { CustomModal } from '@/components/Styled'
import { Tab, TabList } from '@/components/Styled/Tab'

import { useState } from 'react'

export default (props: Props) => {
  const [tab, setTab] = useState(1)
  const changeTab = (v: number) => {
    console.log(v)
  }

  return (
    <CustomModal showModal={props.showModal} setShowModal={props.setShowModal}>
      <>
        <TabList onChange={changeTab}>
          <Tab value={1}>
            <>필수강의</>
          </Tab>
          <Tab value={2}>
            <>필수강의</>
          </Tab>
          <Tab value={3}>
            <>필수강의</>
          </Tab>
        </TabList>
      </>
    </CustomModal>
  )
}

type Props = {
  showModal: boolean
  setShowModal: Function
}
