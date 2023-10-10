import resume from '../assets/icons/resumo.svg'
import transactions from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import settings from '../assets/icons/configuracoes.svg'
import contact from '../assets/icons/contato.svg'
import exit from '../assets/icons/sair.svg'
import { Resume, Sales } from '../Pages'

export const appRoutes = [
  {
    image: resume,
    altImage: 'Icon Resumo',
    title: 'Resumo',
    path: '/',
    component: Resume,
  },
  {
    image: transactions,
    altImage: 'Icon Vendas',
    title: 'Vendas',
    path: '/vendas',
    component: Sales,
  },
  {
    image: webhooks,
    altImage: 'Icon Webhooks',
    title: 'Webhooks',
    // path: '/webhooks',
  },
  {
    image: settings,
    altImage: 'Icon Configurações',
    title: 'Configurações',
    // path: '/configuracoes',
  },
  {
    image: contact,
    altImage: 'Icon Contato',
    title: 'Contato',
    // path: '/contato',
  },
  {
    image: exit,
    altImage: 'Icon Sair',
    title: 'Sair',
    // path: '/sair',
  },
]

export type AppRoute = typeof appRoutes
