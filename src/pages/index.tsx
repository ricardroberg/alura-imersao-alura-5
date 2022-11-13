import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Head from 'next/head'
import cuuid from 'cuuid'

import { Favorites } from "../components/Favorites";
import { Timeline } from "../components/Timeline";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

import { GlobalStyle } from '../styles/global'
import config from '../../config.json'
import { lightTheme, darkTheme } from "../styles/themes/themes";
import { CustomSwitch } from "../assets/components/CustomSwitch";

interface MenuProps {
  valorDoFiltro: string
  setValorDoFiltro: any
}

export default function Home() {
  const [theme, setTheme] = useState(lightTheme)
  const [valorDoFiltro, setValorDoFiltro] = useState<MenuProps | ''>('')

  const favorites = config["unforgedTube Favoritos"]

  function handleThemeChange() {
    setTheme(theme == darkTheme ? lightTheme : darkTheme)
    console.log("SETTHEME", theme)
  }


  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>unforgedTube</title>
      </Head>
      <GlobalStyle />
      <MainContainer>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}  changeTheme={() => handleThemeChange()} />
        <Header />
        <Timeline searchValue={valorDoFiltro} data={config.playlists}>
          Conteúdo
        </Timeline>
        <Favorites key={cuuid()} data={favorites} />
      </MainContainer>
    </ThemeProvider>
  )
}

const MainContainer = styled.div`
background-color: ${props => props.theme.backgroundBase};
  display: flex;
  flex-direction: column;
  flex: 1;
`
