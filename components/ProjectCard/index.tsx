import { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../../types'
import Image from 'next/image'
import { animate, motion } from 'framer-motion'
import { fadeInUp, stagger } from '../../animation'
const ProjectCard: FunctionComponent<{
  project: IProject
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
    const [showDetail, setShowDetail] = useState(false)

    return (
      <div>
        <Image
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => setShowDetail(true)}
          layout="responsive"
          height="150"
          width="300"
        />

        <p className="my-2 text-center">{name}</p>

        {showDetail && (
          <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-purple-900">
            <motion.div >
              {/* <img src={image_path} alt={name} /> */}
              <motion.div variants={fadeInUp} initial="initial" animate="animate" >
                <Image
                  src={image_path}
                  alt={name}
                  layout="responsive"
                  height="150"
                  width="300"
                />
              </motion.div>

              <div className="flex justify-center my-4 space-x-3">
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-purple-200 rounded-md dark:bg-purple-400"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-purple-200 rounded-md dark:bg-purple-400 "
                >
                  <AiFillProject /> <span>site</span>
                </a>
              </div>
            </motion.div>

            <motion.div  variants={stagger} initial="initial" animate="animate" >
              <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
              <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>

              <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-purple-200 rounded-md dark:bg-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <button
              onClick={() => setShowDetail(false)}
              className="absolute p-1 bg-purple-200 rounded-full top-3 right-3 focus:outline-none dark:bg-purple-400"
            >
              <MdClose size={30} />
            </button>
          </div>
        )}
      </div>
    )
  }

export default ProjectCard
