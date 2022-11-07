import Image from 'next/image'
import styled from 'styled-components'

import config from '../../config.json'

export function Header() {

    const logoImage = `https://github.com/${config.github}.png`
    return (
        <StyledHeader>
            {/* <img src="banner" alt="" /> */}
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

const StyledHeader = styled.div`
margin-top: 70px;

img {
    border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`