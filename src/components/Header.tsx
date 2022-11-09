import Image from 'next/image'
import styled from 'styled-components'

import config from '../../config.json'

export function Header() {

    const logoImage = `https://github.com/${config.github}.png`
    return (
        <StyledHeader banner={config.bg}>
            <section className='user-info'>
                <Image src={logoImage} alt='My thumb' width={80} height={80} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>{config.description}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

const StyledHeader = styled.div<{ banner: string }>`
margin-top: 55px;
color: white;

section{
    background: url(${props => props.banner})  no-repeat center ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

img {
    border-radius: 50%;
    outline: 3px solid white ;
    }

.user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
}
`