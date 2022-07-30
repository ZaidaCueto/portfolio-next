
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { GiMoon } from 'react-icons/gi'
import { IoLogoWhatsapp } from 'react-icons/io'
import Typewriter from 'typewriter-effect'
import { useTheme } from 'next-themes'
import { TbArrowBigDownLines } from 'react-icons/tb'
import { useRef } from 'react'

export default function Sidebar() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }


  return (
    <div>
   
      <Image
       className="w-32 h-32 rounded-full max-auto"
      src="https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/imgPerfil.png?raw=true" 
      quality="100"
      width="128"
      height="128"
      alt="user avatar"
      title="user avatar"
      lang='intrinsic'
       />
       
    
 

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan dark:text-purple-200">
        <span className="text-purple-700"> Olá , sou </span>
        <span className="text-purple-500">Zaida </span>
        Cueto
      </h3>
      {/* animated text */}
      <div className="my-4 font-medium text-purple-900 text-1xl dark:text-purple-200">
        <Typewriter
          options={{
            strings: ['Desenvolvedora Front End', 'Apaixonada por tecnologia!'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-purple-900 dark:text-purple-200"
        href=""
        download="name"
      >
        <TbArrowBigDownLines className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <h4 className="p-3 text-purple-900 dark:text-purple-200">
        {' '}
        Social Media{' '}
      </h4>
      <div className="flex justify-around w-9/12 text-purple-900 dark:text-purple-200 max-auto my-5max md:w-full">
        <a href="https://github.com/ZaidaCueto">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/zaidacuetoa">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/dev.iniciante2022">
          <BsInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="mt-3 mb-5 space-x-2 bg-gray-200 dark:bg-purple-900 dark:text-purple-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <p className="pt-3 mt-3">Contatos</p>
        <a
          href="  mailto:zcueto58@gmail.com"
          className="flex items-center justify-center px-2 py-1 my-3"
        >
          <AiTwotoneMail className="w-6 mr-4 text-purple-900 h-9 dark:text-purple-200" />
          Contato por E-mail
        </a>
        <a
          href="https://wa.me/5511975692007"
          className="flex items-center justify-center pb-4"
        >
          <IoLogoWhatsapp className="w-6 h-6 mr-3 text-green-500 mmr-4" />
          Contato por Whatsapp
        </a>
      </div>

      {/* <button className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple-900 to-purple-400 focus:outline-nome "
            onClick={() =>  window.open(' mailto:zcueto58@gmail.com')}>
                Contatar
                </button> */}
      <button
        onClick={changeTheme}
        className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple-900 to-purple-400 focus:outline-nome"
      >
        ligar modo darck
        <div className="flex justify-center text-purple-100 text-purple-600rounded-full dark:text-white">
          <GiMoon className="w-6 h-6"></GiMoon>
        </div>
      </button>
    </div>
  )
}
