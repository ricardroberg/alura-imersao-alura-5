import React from 'react'
import Image from "next/image"
import styled from 'styled-components'

import cuuid from 'cuuid'

interface FavoritesProps {
    data: string
}

export function Favorites({ data }: FavoritesProps) {
    const logoImage = `https://github.com/${data}.png`
    console.log("PLAYLISTNAME ", data)
    // console.log("DATA ", data)

    return (

        <FavoritesContainer key={cuuid()}>
            <Image src={logoImage} alt='My thumb' width={80} height={80} />
            <span>
                @{data}
            </span>
        </FavoritesContainer>

    )
}

const FavoritesContainer = styled.div`
display: grid;

img {
        border: 3px solid gray;
    border-radius: 30%;
}
`
