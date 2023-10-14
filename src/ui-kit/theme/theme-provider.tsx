import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { theme } from './theme'

type Props = {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
    return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
}
