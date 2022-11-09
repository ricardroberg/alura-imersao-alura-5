import styled from "styled-components";

import { useState } from "react";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Timeline } from "../components/Timeline";

import config from '../../config.json'

import { CSSReset } from '../styles/CSSReset'

export default function Home() {
  const [valorDoFiltro, setValorDoFiltro] = useState('')

  return (
    <>
      <CSSReset />
      <MainContainer>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} data={config.playlists}>
          Conteúdo
        </Timeline>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
