import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../components/layout'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
export default App
