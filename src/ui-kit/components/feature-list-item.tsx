import styled from 'styled-components'
import iconList from '../assets/icon-list.svg'

type Props = {
    children: React.ReactNode
}

export const FeatureListItem = ({ children }: Props) => {
    return (
        <Root>
            <img src={iconList} alt="A white check icon in an orange circle" />
            <p>{children}</p>
        </Root>
    )
}

const Root = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    line-height: 24px;
`
