import styled from 'styled-components'
import MobileIllustration from '../ui-kit/assets/illustration-sign-up-mobile.svg'
import { FeatureListItem } from '../ui-kit/components/feature-list-item'
import { SignupForm } from './signup-form'

export const Signup = () => {
    return (
        <Root>
            <img src={MobileIllustration} width="100%" />

            <Content>
                <Title>Stay updated!</Title>

                <SubTitle>Join 60,000+ product managers receiving monthly updates on:</SubTitle>

                <FeatureList>
                    <FeatureListItem>Product discovery and building what matters</FeatureListItem>
                    <FeatureListItem>Measuring to ensure updates are a success</FeatureListItem>

                    <FeatureListItem>And much more!</FeatureListItem>
                </FeatureList>

                <SignupForm />
            </Content>
        </Root>
    )
}

const Root = styled.div`
    background-color: ${({ theme }) => `hsl(${theme.colors.neutral.white})`};
`

const Content = styled.article`
    padding: 30px 24px 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Title = styled.h1`
    color: ${({ theme }) => `hsl(${theme.colors.neutral.charcoalGrey})`};
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fonts.roboto.weights[700]};
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
