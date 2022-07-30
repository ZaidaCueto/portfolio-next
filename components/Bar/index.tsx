import { FunctionComponent } from 'react'

import { ISkill } from '../../types'

const Bar: FunctionComponent<{ value: ISkill }> = ({
  value: { Icon, name },
}) => {
  return (
    <div className="my-2 text-white bg-purple-200 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <div className="flex items-center justify-center p-4 text-2xl rounded-full px- bg-gradient-to-r from-purple-900 to-purple-500">
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  )
}

export default Bar
