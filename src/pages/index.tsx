import { useState } from "react";
import styled from "styled-components";
import Head from 'next/head'
import cuuid from 'cuuid'

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Timeline } from "../components/Timeline";

import config from '../../config.json'

import { CSSReset } from '../styles/CSSReset'
import { Favorites } from "../components/Favorites";

export default function Home() {
  const [valorDoFiltro, setValorDoFiltro] = useState('')

  const favorites = config["unforgedTube Favoritos"]
  // console.log("FAVORITES ", favorites)


  return (
    <>
      <Head>
        <title>unforgedTube</title>
      </Head>
      <CSSReset />
      <MainContainer>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} data={config.playlists}>
          Conteúdo
        </Timeline>
        <Favorites key={cuuid()} data={favorites} />
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
