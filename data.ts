import { ISkill, IProject, Service } from './types'
import {
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiFigma,
  SiReact,
} from 'react-icons/si'
import { RiComputerLine } from 'react-icons/ri'
import { BiGitBranch } from 'react-icons/bi'
import { FaServer, FaBootstrap } from 'react-icons/fa'
import {
  AiOutlineAntDesign,
  AiOutlineGithub,
  // AiOutlineApi,
} from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'

import { BsCircleFill } from 'react-icons/bs'

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Fontend ',
    about:
      'cosigo desenvolver págenas  SPA (Single Page Applications) usando linguangens e frameworks  (<b>React.js </b><b>HTML</b>, CSS,<b> stayled Componets</b> 💅,<b> typescript </b> , <b> Bootstrap </b> e outros) .',
  },
  {
    Icon: FaServer,
    title: 'Backend  ',
    about:
      'consigo desenvolver backends simples usando node.js <b>Express </b> e outos frameworks',
  },
  //   {
  //     Icon: AiOutlineApi,
  //     title: "API Development",
  //     about:
  //       "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  //   },
  {
    Icon: MdDeveloperMode,
    title: 'Em breve',
    about: '  Em breve Em breve <b>Em breve</b> Em breve,em breve    ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'Em breve..',
    about:
      'Lorem Ipsum is Lorem ipsum dolor sit amet, consectetur adipiscing el',
  },
  //   {
  //     Icon: RiComputerLine,
  //     title: "Whatever",
  //     about:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  //   },
]

export const languages: ISkill[] = [
  {
    name: 'Javascript',
    Icon: SiJavascript,
  },
  {
    name: 'Bootstrap',
    Icon: FaBootstrap,
  },
  {
    name: 'Rect.js',
    Icon: SiReact,
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs,
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
  },
]
export const tools: ISkill[] = [
  {
    name: 'Versionamento de código',
    Icon: BiGitBranch,
  },
  {
    name: 'github',
    Icon: AiOutlineGithub,
  },
  {
    name: 'Figma',
    Icon: SiFigma,
  },
]

export const projects: IProject[] = [
  {
    name: 'Desafio Chefao',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/figmaPRPS.png?raw=true',
    deployed_url: 'https://desafio-chefao-one.vercel.app/',
    github_url: 'https://github.com/ZaidaCueto/Desafio-Chefao',
    description:
      'Trabalho realizado em grupo   , este desafio foi proposto para finalizar o curso   full stack  xp 41 da Gama Academy , durante o desafio trabalhamos juntos os stack , backends , frontends e hipsters onde eu foi responsável de criar  os componentes footer, header, página de produtos e detalhes do produto. ',
    category: ['react', 'bootstrap'],
    key_techs: ['react', 'typescript', 'bootstrap', 'figma'],
  },
  {
    name: 'Project 2',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true',
    deployed_url: '',
    github_url: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',

    category: ['react', 'bootstrap'],
    key_techs: ['react', 'typescript', 'bootstrap'],
  },
  {
    name: 'Project 3',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true',
    deployed_url: '',
    github_url: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',

    category: ['react'],
    key_techs: ['react', 'typescript', 'bootstrap', 'figma'],
  },
  {
    name: 'Project 4',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true',
    deployed_url: '',
    github_url: 'https://github.com/ZaidaCueto/Desafio-Chefao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',

    category: ['react'],
    key_techs: ['react', 'typescript', 'bootstrap', 'figma'],
  },
  {
    name: 'Project 5',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true',
    deployed_url: '#',
    github_url: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',

    category: ['node'],
    key_techs: ['react', 'typescript', 'bootstrap'],
  },
  {
    name: 'Project 6',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true',
    deployed_url: '',
    github_url: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',

    category: ['javascript', 'bootstrap'],
    key_techs: ['react', 'typescript', 'bootstrap'],
  },
  {
    name: 'Project 7',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true',
    deployed_url: '#',
    github_url: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',

    category: ['typescript'],
    key_techs: ['react', 'typescript', 'bootstrap'],
  },
  {
    name: 'Project 8',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true',
    deployed_url: '#',
    github_url: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',

    category: ['react', 'bootstrap', 'typescript'],
    key_techs: ['react', 'typescript', 'bootstrap'],
  },
  {
    name: 'Project 9',
    image_path:
      'https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true',
    deployed_url: '#',
    github_url: 'https://github.com/ZaidaCueto/Desafio-Chefao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',

    category: ['react'],
    key_techs: ['react', 'typescript', 'bootstrap'],
  },
  //   {
  // name:"Project 11",
  // image_path:"https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true",
  // deployed_url:"#",
  // github_url:"#",
  // description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",

  // category:["react"],
  // key_techs:["react","typescript","bootstrap"],
  //   },
  //   {
  // name:"Project 12",
  // image_path:"https://github.com/ZaidaCueto/portfolio-react/blob/master/public/images/embreve.png?raw=true",
  // deployed_url:"",
  // github_url:"#",
  // description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem! localhostlorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",

  // category:["react", "bootstrap"],
  // key_techs:["react","typescript","bootstrap "],
  //   },
]
