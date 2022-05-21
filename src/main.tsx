import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import RootLayout from '@/layout/RootLayout'
import CreationLayout from '@/layout/CreationLayout'
import CreationOptionView from '@/view/CreationOptionView'
import CreationLectureView from '@/view/CreationLectureView'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
