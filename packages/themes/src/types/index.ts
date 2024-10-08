import type { ProfileTypeName } from 'oa-shared'

interface LinkList {
  label: string
  url: string
}

export interface PlatformTheme {
  id: string
  siteName: string
  logo: string
  badge: string
  donations?: Donations
  avatar: string
  howtoHeading: string
  styles: ThemeWithName
  academyResource: string
  externalLinks: LinkList[]
}

type Badge = {
  lowDetail: string
  normal: string
}

type Donations = {
  body: string
  iframeSrc: string
  imageURL: string
}

export interface ThemeWithName {
  name: string
  logo: string

  profileGuidelinesURL: string
  questionsGuidelinesURL?: string
  communityProgramURL: string

  alerts: any

  badges: {
    [K in ProfileTypeName]?: Badge
  }

  text: any

  fonts: {
    body: string
  }

  forms: {
    input: any
    inputOutline: any
    error: any
    textarea?: any
    textareaError?: any
  }

  /**
   * Following properties are taken from DefaultTheme
   * exported from `styled-components`
   *
   * This should ideally be imported rather than manually
   * inlined. However some behaviour is making this hard to
   * achieve at the moment.
   */

  cards?: {
    primary: any
  }

  colors: {
    white: string
    black: string
    primary: string
    softyellow: string
    accent: { base: string; hover: string }
    blue: string
    red: string
    red2: string
    softblue: string
    bluetag: string
    grey: string
    green: string
    error: string
    background: string
    silver: string
    softgrey: string
    offwhite: string
    lightgrey: string
    darkGrey: string
    subscribed: string
    notSubscribed: string
    betaGreen: string
  }

  fontSizes: number[]

  space: number[]
  radii: number[]

  zIndex: {
    behind: number
    level: number
    default: number
    modalProfile: number
    logoContainer: number
    header: number
  }
  breakpoints: string[]
  buttons: any
  maxContainerWidth: number
  regular: number
  bold: number

  sizes: {
    container: number
  }
}
