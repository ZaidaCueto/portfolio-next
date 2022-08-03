
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,

  NextPage,
} from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { fadeInUp, stagger, routeAnimation } from '../animation'
import {motion} from 'framer-motion'
import Head from 'next/head'


const About = ({endpoint}:{endpoint:string,}) => {
   console.log(endpoint)

  return (
    <motion.div 
    variants={routeAnimation} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    className="flex flex-col flex-grow px-6 pt-1"
    >
      <Head>
        <title>Web developer │ Protfolio │ Frontend </title>
      </Head>
      <h6 className="my-3 text-base font-medium">
        Atualmente sou programadora Front End participei do treinamento
        intensivo de capacitação , Gama Experience #41, disponibilizado pela{' '}
        <a href="https://www.gama.academy">
          <b>
            <u className="text-green-400">Gama Academy</u>
          </b>
        </a>{' '}
        , para adquirir conhecimentos no stack de Hacker (Desenvolvimento Web
        Full Stack), com especialização em Front-End , durante o treinamento
        participei de vários projetos e desafios propostos pelos professores o
        qual foi imprescindível para o meu aprendizado.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-gray-700 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          O que eu consigo fazer
        </h4>

        <motion.div
         className="grid gap-6 my-3 md:grid-cols-2"
         variants={stagger}
         initial="initial"
         animate="animate"
         >
          {services.map((service) => (
            <motion.div
            variants={fadeInUp}
             initial="initial"
              animate="animate"
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-purple-800 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}


export const getServerSideProps: GetServerSideProps = async (
   context: GetServerSidePropsContext
) => {
  //  const res = await fetch (`${process.env.VERCEL_URL}/api/services`)
  //  const data = await res.json()
  //  console.log(data)
   return { props: { endpoint: process.env.VERCEL_URL} }
}



//  export const getStaticProps: GetStaticProps = async (
//     context: GetStaticPropsContext ) => {
        
//         console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//     const { services } = await res.json()
//    console.log({ services })
//     return { props: { services: services } }
//  }

export default About
function endpoint(endpoint: any) {
  throw new Error('Function not implemented.')
}

