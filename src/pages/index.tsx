import styled from "styled-components";
import { useState } from "react";
import Head from 'next/head'
import cuuid from 'cuuid'

import { Favorites } from "../components/Favorites";
import { Timeline } from "../components/Timeline";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

import { CSSReset } from '../styles/CSSReset'
import config from '../../config.json'

interface MenuProps {
  valorDoFiltro: string
  setValorDoFiltro: any
}

export default function Home() {
  const [valorDoFiltro, setValorDoFiltro] = useState<MenuProps | ''>('')

  const favorites = config["unforgedTube Favoritos"]

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
