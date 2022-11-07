import styled from "styled-components";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Timeline } from "../components/Timeline";

import config from '../../config.json'
import { CSSReset } from '../styles/CSSReset'

export default function Home() {

  return (
    <>
      <CSSReset />
      <MainContainer>
        <Menu />
        <Header />
        <Timeline data={config.playlists}>
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