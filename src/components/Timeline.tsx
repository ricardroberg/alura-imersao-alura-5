import Image from "next/image"
import styled from "styled-components"
import { Favorites } from "./Favorites"

interface PlaylistsProps {
    playlistName: {
        id: string
        title: string
        url: string
        thumb: string
    }
}

interface TimelineProps {
    //RESOLVER 
    // data: PlaylistsProps[]
    data: any
}

export function Timeline({ data }: any) {
    console.log("DENTRO DE DATA: ", data)
    const playlistNames = Object.keys(data)

    return (

        <StyledTimeline>
            {
                playlistNames.map((playlistName) => {
                    const videos = data[playlistName]

                    return (
                        <section key={Math.random()}>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.map((video: any) => {
                                    if (playlistName !== 'favoritos') {
                                        return (
                                            <a
                                                key={video.url}
                                                href={video.url}>
                                                <Image src={video.thumb} width={100} height={100} alt="Video Thumbnail" />
                                                <span>
                                                    {video.title}
                                                </span>
                                            </a>
                                        )
                                    } else {
                                        return (

                                            <Favorites
                                                key={Math.random()}
                                                data={video.github}
                                                playlistName={playlistName} />
                                        )
                                    }
                                })}
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    )
}

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
    border: 3px solid gray;
    border-radius: 4px;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;

    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      a {
        scroll-snap-align: start;
        
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
          font-size: 12px;
          font-weight: 600;
          color: #858383;
        }
      }
    }
  }
`;


