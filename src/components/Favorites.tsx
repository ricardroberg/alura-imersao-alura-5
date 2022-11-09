import React from "react";
import Image from "next/image";
import styled from "styled-components";

import cuuid from "cuuid";

interface FavoritesProps {
  data: Object[];
}

export function Favorites({ data }: FavoritesProps): JSX.Element {
  // const logoImage = `https://github.com/${data}.png`
  // console.log("PLAYLISTNAME ", data)
  console.log("DATA ", typeof data);
  // data.map((e) => {
  //     console.log(e.github)
  // })

  return (
    <MainFavoriteContainer>
      <section>
        <h2>unforgedTube Favoritos</h2>
        <div className="imageContainer">
          {data.map((e) => {
            return (
              <div key={cuuid()}>
                <div>
                  <Image
                    src={`https://github.com/${e.github}.png`}
                    alt="My thumb"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <span>@{e.github}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </MainFavoriteContainer>
  );
}

const MainFavoriteContainer = styled.div`
display: grid;   
//   flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;

  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
  }

.imageContainer{
    display: flex;
    gap: 32px;
    // padding-top: 16px;

    img {
        border-radius: 50%;
        outline: 3px solid #343434;
    }
    span{
                  padding-top: 8px;
          display: block;
        //   padding-right: 24px;
        //   color: ${({ theme }) => theme.textColorBase || "#222222"};
          font-size: 12px;
          font-weight: 900;
          color: #858383;
          text-align: center;
    }
}

h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;

//   flex: 1;
//   width: 100%;
//   padding: 16px;
//   overflow: hidden;
//   h2 {
//     font-size: 16px;
//     margin-bottom: 16px;
//     text-transform: capitalize;
//   }
//   img {
//     outline: 3px solid gray;
//     border-radius: 50%;
//   }
//   section {
//     width: 100%;
//     padding: 0;
//     overflow: hidden;
//     padding: 16px;

//     div {
//       height: 100px;
//       width: 100px;
//       width: calc(100vw - 16px * 4);
//       display: grid;
//       grid-gap: 16px;
//       grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//       grid-auto-flow: column;
//       grid-auto-columns: minmax(200px, 1fr);
//       overflow-x: none;
//       scroll-snap-type: x mandatory;

//       text-align: center;
//       vertical-align: bottom;

//       .imageContainer {
//         border: 1px solid red;
//         width: 100px;
//         height: 100px;
//       }

//       span {
//         height:20px;
//         width: 100px;
//         /* padding-top: 8px; */
//         /* display: block; */
//         /* padding-right: 24px; */
//         border: 1px solid green;
//         color: ${({ theme }) => theme.textColorBase || "#222222"};
//         font-size: 12px;
//         font-weight: 600;
//         color: #858383;
//       }
//     }
//   }
`;
