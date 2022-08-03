import Bar from '../components/Bar'
import { languages, tools } from '../data'
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation} from '../animation'
import Head from 'next/head'

const resume = () => {
  

  return (
    <motion.div className="px-6 py-2"
    variants={routeAnimation} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    >
       <Head>
        <title>Web developer │ curriculo │ Frontend </title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate" >
          
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
          Dsenvolvedor Web full stack
            </h5>
            <p className="font-semibold">Gama Academy (2022)</p>
            <p className="my-3">
            Formada em desenvolvimento web com especialização em frontend
            </p>
          
          </div>
        </motion.div>
        <motion.div  variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experiencia</h5>
          <div className="">
            {/* <h5 className="my-2 text-xl font-bold"> </h5> */}
            {/* <p className="font-semibold"> </p> */}
            <p className="my-3"> Criando sites estatísticos usando HTML, CSS,
javascript, typescript e react. em projetos para praticar e desafios</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Linguagens de programação e frameworks
          </h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Outras ferramentas</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default resume
