import styled from "styled-components";
import Image from "next/image";
import React from "react";

import cuuid from "cuuid";

interface FavoritesProps {
  data: Object[];
}

export function Favorites({ data }: FavoritesProps): JSX.Element {


  return (
    <MainFavoriteContainer>
      <section>
        <h2>unforgedTube Favoritos!</h2>
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

    img {
        border-radius: 50%;
        outline: 3px solid #343434;
    }
    span{
        padding-top: 8px;
        display: block;
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
`;
