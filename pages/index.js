import React from 'react'
import Navbar from '@/components/_App/Navbar'
import MainBanner from '@/components/Home/MainBanner';
import BestFeatures from '@/components/Home/BestFeatures';
import AppIntroVideo from '@/components/Home/AppIntroVideo';
import Funfacts from '@/components/Home/Funfacts';
import AppDownload from '@/components/Home/AppDownload';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const IndexPage = ({ articles }) => {
    const { locale } = useRouter();
    return (
        <>
            <Head>
                <link rel="canonical" href="https://www.cdlhelp.com/" />
                <title>Приложение CDL Help - Тесты CDL на русском языке</title>
            </Head>

            <Navbar articles={articles} />


            <MainBanner />

            <AppIntroVideo />

            <BestFeatures />
            {/* <ClientFeedback /> */}

            {/* <TopFeatures /> */}

            {/* <AboutContent /> */}

            {/* <KeyFeatures /> */}

            {/* <AppScreenshots /> */}

            <Funfacts />

            <AppDownload />


            {/* <PricingPlan /> 
                            
                            <div className="bg-f9f9f9">
                    <PartnerStyle2 />
                </div>

                <BlogPost /> */}
        </>
    )
}

export default IndexPage;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'index',
            'navbar',
            'footer',
            'cookie'
          ])),
      },
    };
  }