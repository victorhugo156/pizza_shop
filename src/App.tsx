import { RouterProvider } from 'react-router-dom'
import "./index.css"
import { router } from './routes'
import {Toaster} from "sonner"

export function App() {

  return (
    <>
      <Toaster richColors/>
      <RouterProvider router={router}/>
    </>

  )
}
