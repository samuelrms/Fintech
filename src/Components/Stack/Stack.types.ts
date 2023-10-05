import { ComponentProps } from 'react'

export type ElementsVariants = 'div' | 'aside' | 'article' | 'form'

export type Props = {
  /** Defines the HTML element that will be rendered. It can be a valid HTML element or a React component. */
  as?: ElementsVariants
} & ComponentProps<'div'>
