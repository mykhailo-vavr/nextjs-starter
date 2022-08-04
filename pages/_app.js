import '../styles/globals.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
export default App
