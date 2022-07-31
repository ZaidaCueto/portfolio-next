import { IconType } from 'react-icons'

export interface Service {
  title: string
  about: string
  Icon: IconType
}

export interface ISkill {
  name: string
  Icon: IconType
}

export interface IProject {
  id: number
  name: string
  description: string
  image_path: string
  deployed_url: string
  github_url: string
  figma_url?: string
  category: Category[]
  key_techs: string[]
}
export type Category =
  | 'react'
  | 'node'
  | 'express'
  | 'typescript'
  | 'javascript'
  | 'mysql'
  | 'all'
  | 'bootstrap'
  | 'figma'
export type Urls = 'deployed_url' | 'github_url' | 'figma_url'
