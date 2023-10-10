import FintechSVG from '../../assets/FintechSVG'
import { appRoutes } from '../../mocks'
import { SidenavContainer } from './Sidenav.styles'

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
            <a href={route.path ?? undefined}>{route.title}</a>
          </li>
        ))}
      </ul>
    </SidenavContainer>
  )
}
