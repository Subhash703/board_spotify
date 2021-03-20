import Head from 'next/head'
import CustomLayout from '../components/layout/CustomLayout'
import Sidebar from '../components/layout/Sidebar'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'

export default function Home() {
  // const token = useSelector((state) => state.token)

  return (
    <div>
      <CustomLayout />
    </div>
  )
}
