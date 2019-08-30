import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import Layout from '../components/Layout'
import Header from '../components/Header'
import CompanyLogo from '../components/CompanyLogo';
import Services from '../components/Services';
import About from '../components/About';
import ContactBanner from '../components/ContactBanner';
import Fonts from '../components/Fonts';
import Team from '../components/Team';
import Statistics from '../components/Statistics';
import Portfolio from '../components/Portfolio';

class Index extends Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Header />
          <CompanyLogo />
          <Services />
          <About />
          <ContactBanner />
          <Team />
          <Statistics />
          <Portfolio />
        </Grid>
      </Layout>
    )
  }
}

export default Index
