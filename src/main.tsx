import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactModal from 'react-modal'

import './index.css'
import RootLayout from '@/layout/RootLayout'
import CreationLayout from '@/layout/CreationLayout'
import CreationOptionView from '@/view/CreationOptionView'
import CreationLectureView from '@/view/CreationLectureView'
import { RecoilRoot } from 'recoil'

import { ModalsProvider } from '@/context'
import Modals from './components/Modal/Modals'

ReactModal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ModalsProvider>
        <RootLayout>
          <BrowserRouter>
            <Routes>
              <Route path="creation" element={<CreationLayout />}>
                <Route path="option" element={<CreationOptionView />} />
                <Route path="lecture" element={<CreationLectureView />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </RootLayout>
      </ModalsProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
