import { motion } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animation'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../types'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('all')
  const [showDetail, setShowDetail] = useState<number | null >(null)

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData)
      setActive(category)
      return
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    )
    setProjects(newArray)
    setActive(category)
  }

  return (
    <motion.div 
    variants={routeAnimation} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    className="px-5 py-2 overflow-y-auto " style={{ height: '65vh' }}>
       <Head>
        <title>Web developer │ rojects  │ Frontend </title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate">
        {projects.map((project) => (
          <motion.div
            className="col-span-12 p-2 bg-purple-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-purple-700"
            key={project.name}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <ProjectCard project={project}  showDetail={showDetail}  setShowDetail={setShowDetail}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
