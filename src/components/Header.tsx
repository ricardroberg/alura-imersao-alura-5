import Image from 'next/image'
import styled from 'styled-components'

import config from '../../config.json'

export function Header() {

    const banner = "https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1221&q=80"

    const logoImage = `https://github.com/${config.github}.png`

    return (
        <StyledHeader banner={banner}>
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
margin-top: 70px;
color: white;

section{
    background-image: url(${props => props.banner});
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