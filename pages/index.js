import { Grid } from 'react-flexbox-grid'
import Layout from '../components/Layout'
import Header from '../components/Header'
import CompanyLogo from '../components/CompanyLogo';
import Services from '../components/Services';

const Index = () => {
  return (
    <Layout>
      <Grid fluid>
       <Header />
       <CompanyLogo />
       <Services />
      </Grid>
    </Layout>
  )
}

export default Index