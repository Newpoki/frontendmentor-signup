import styled, { css, useTheme } from 'styled-components'
import MobileIllustration from '../ui-kit/assets/illustration-sign-up-mobile.svg'
import DesktopIllustration from '../ui-kit/assets/illustration-sign-up-desktop.svg'
import { FeatureListItem } from '../ui-kit/components/feature-list-item'
import { SignupForm } from './signup-form'
import { Views } from '../types/app'
import { Page } from '../ui-kit/components/page'
import { Title } from '../ui-kit/components/title'
import { useEffect } from 'react'

type Props = {
    setView: React.Dispatch<React.SetStateAction<Views>>
}

export const Signup = ({ setView }: Props) => {
    const theme = useTheme()

    useEffect(() => {
        document.title = 'Newsletter - Signup'
    }, [])

    return (
        <Root>
            <IllustrationPicture>
                <source
                    media={`(min-width: ${theme.breakpoints.desktop}px)`}
                    srcSet={DesktopIllustration}
                />

                <img
                    src={MobileIllustration}
                    style={{ width: '100%' }}
                    alt="An illustration showing fake graphs and values to embed the page"
                />
            </IllustrationPicture>

            <Content>
                <Title>Stay updated!</Title>

                <SubTitle>Join 60,000+ product managers receiving monthly updates on:</SubTitle>

                <FeatureList>
                    <FeatureListItem>Product discovery and building what matters</FeatureListItem>
                    <FeatureListItem>Measuring to ensure updates are a success</FeatureListItem>

                    <FeatureListItem>And much more!</FeatureListItem>
                </FeatureList>

                <SignupForm setView={setView} />
            </Content>
        </Root>
    )
}

const Root = styled(Page)`
    display: flex;
    flex-direction: column;

    ${({ theme }) => css`
        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
            flex-direction: row-reverse;

            width: 900px;
        }
    `}
`

const IllustrationPicture = styled.picture`
    /* Required otherwise picture has more height than displayed img */
    display: flex;
`

const Content = styled.article`
    padding: 30px 24px 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;

    ${({ theme }) => css`
        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
            padding: 70px;
        }
    `}
`

const SubTitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`

const FeatureList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
`
