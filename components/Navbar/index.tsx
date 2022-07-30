import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
  active: string
  setActive: Function
  name: string
  route: string
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className="mx-2 text-sm cursor-pointer hover:border-b-4 hover:text-purple-500"
          onClick={() => setActive(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null
}

const Navbar = () => {
  const { pathname } = useRouter()

  const [active, setActive] = useState('')

  //later
  useEffect(() => {
    if (pathname === '/') setActive('Sobre mim')
    else if (pathname === '/projects') setActive('Projects')
    else if (pathname === '/resume') setActive('Resume')
  }, [pathname])

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3 ">
      <span className="text-xs font-bold border-b-4 border-purple-500 md:text-1xl sm:text-2xl ">
        {active}
      </span>

      <div className="text-xl font-bold md:text-ls sm:text-xs ">
        <NavItem
          active={active}
          setActive={setActive}
          name="Sobre mim"
          route="/"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Curriculo"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  )
}

export default Navbar
