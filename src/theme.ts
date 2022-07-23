import { extendTheme } from '@chakra-ui/react'
export const colors = {
  primary: '#907CFF',
  black: '#000000',
  gray: {
    90: '#000000',
    80: '#000000CC',
    60: '#000000CC',
    40: '#00000066',
    20: '#00000033',
    10: '#0000001A',
    5: '#0000000D',
  },
}

enum COLORS {
  PRIMARY = '#907CFF',
}

const components = {
  Select: {},
}

export const theme = extendTheme({
  colors,
  components,
})
