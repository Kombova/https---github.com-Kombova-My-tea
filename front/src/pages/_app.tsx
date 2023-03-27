import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import redux
import { Provider } from 'react-redux'
import { store } from '@/store'
// мои импорты
import Layout from '../components/layout/layout';






export default function App({ Component, pageProps }: AppProps) {
 console.log(Component.name)
  if(Component.name == 'admin'){
   return (
        <Component {...pageProps} /> 
   )
  }else return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>  
  )
  
}