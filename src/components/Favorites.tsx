import React from 'react'
import Image from "next/image"
import styled from 'styled-components'

interface FavoritesProps {
    playlistName: string
    data: string

}

export function Favorites({ playlistName, data }: FavoritesProps): JSX.Element {
    const logoImage = `https://github.com/${data}.png`
    console.log("PLAYLISTNAME ", playlistName)
    // console.log("DATA ", data)

    return (

        <FavoritesContainer
            key={data}
        >
            <Image src={logoImage} width={100} height={100} alt="Video Thumbnail" />
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
    /* border-radius: 30%; */
}
`
