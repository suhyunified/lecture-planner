import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactModal from 'react-modal'

import './index.css'
import RootLayout from '@/container/RootLayout'
import PlanningContainer from '@/container/PlanningContainer'
import PlanningOptionView from '@/view/PlanningOptionView'
import CreationLectureView from '@/view/CreationLectureView'
import { RecoilRoot } from 'recoil'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { ModalsProvider } from '@/context'
import Modals from './components/Modal/Modals'
import { theme } from './theme'

ReactModal.setAppElement('#root')
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <ModalsProvider>
          <RootLayout>
            <BrowserRouter>
              <Routes>
                <Route path="landing"></Route>
                <Route path="home"></Route>
                <Route path="planning" element={<PlanningContainer />}>
                  <Route path="option" element={<PlanningOptionView />} />
                  <Route path="lecture" element={<CreationLectureView />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </RootLayout>
        </ModalsProvider>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
