import FintechSVG from '../../assets/FintechSVG'
import { appRoutes } from '../../mocks'
import { SidenavContainer } from './Sidenav.styles'
import { NavLink } from 'react-router-dom'

export const Sidenav = () => {
  return (
    <SidenavContainer>
      <FintechSVG title="Fintech Logo" />
      <ul>
        {appRoutes.map((route) => (
          <li key={route.title}>
            <span>
              <img src={route.image} alt={route.altImage} />
            </span>
            <NavLink to={route.path as string}>{route.title}</NavLink>
          </li>
        ))}
      </ul>
    </SidenavContainer>
  )
}
