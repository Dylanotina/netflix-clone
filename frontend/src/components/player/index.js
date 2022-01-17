import React, { useState, useContext, createContext } from "react";
import { Button, Close, Container, Inner, Overlay } from "./styles/player";
import ReactDOM from "react-dom";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Button = function PlayerButton(){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)
  return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
};

Player.Video = function PlayerVideo({ src, ...restProps }){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)


  return showPlayer ?   ( ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
              <video id="netflix-player" controls autoPlay >
                  <source src={src} type="video/mp4"></source>
              </video>
              <Close/>
          </Inner>
      </Overlay>, document.body
  )
  ) : null;
};
