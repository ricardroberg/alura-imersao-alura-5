import Image from "next/image";
import styled from "styled-components";

import cuuid from "cuuid";

interface PlaylistsProps {
    playlistName: {
        id: string;
        title: string;
        url: string;
        thumb: string;
    };
}

interface TimelineProps {
    //RESOLVER
    // data: PlaylistsProps[]
    data: any;
    searchValue: string;
}

export function Timeline({ data, searchValue, ...rest }: any) {
    const playlistNames = Object.keys(data);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = data[playlistName];

                return (
                    <section key={cuuid()} className={playlistName.split(" ")[0]}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video: any) => {
                                    const titleNormalized = video.title?.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();

                                    return titleNormalized?.includes(searchValueNormalized);
                                })
                                .map((video: any) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <Image
                                                src={video.thumb}
                                                width={100}
                                                height={100}
                                                alt="Vide Thumbnail"
                                            />
                                            <span>{video.title}</span>
                                            <span>{video.github}</span>
                                        </a>
                                    );
                                })}
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    );
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
    color: ${(props) => props.theme.textColorBase};
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
    border: 3px solid ${(props) => props.theme.borderBase};
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
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      a {
        scroll-snap-align: start;

        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${(props) => props.theme.textColorBase};
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
 `;
