import React from "react";
import config from '../config.json';
import styled from "styled-components";
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import { StyledFavoritos } from '../src/components/Favoritos';


function HomePage() {
    const [valorDoFiltro, setvalorDoFiltro] = React.useState("");
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                
                <Menu valorDoFiltro={valorDoFiltro} setvalorDoFiltro={setvalorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>

                </Timeline>
                <Favoritos canais={config.canais} />
            </div>
        </>
    )
  }
  
  export default HomePage


const StyledBanner = styled.div`
    background-image: url(${({banner}) => banner });
    /* background-image: url(${config.banner}); */
    height: 230px;
    background-size: cover;
`;

  const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .user-info {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
    `;

  function Header() {
    return (
        <StyledHeader>
            <StyledBanner banner={config.banner} />
                <section className="user-info">
                    <img src={`https://github.com/${config.github}.png`} />
                    <div>
                        <h2>
                            {config.name}
                        </h2>
                        <p>
                            {config.description} 
                        </p>
                    </div>
                </section>
        </StyledHeader>
    )
  }

  function  Timeline({searchValue, ...props}) {
        const playlistsNames = Object.keys(props.playlists);
        return (
            <StyledTimeline>
                {playlistsNames.map((playlistsName) => {
                    const videos = props.playlists[playlistsName]
                    return (
                        <section key={playlistsName}>
                            <h2>{playlistsName}</h2>
                            <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                    <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                            </div>
                        </section>
                    )
                })}
            </StyledTimeline>
        )
    }

function Favoritos(props) {
    const youtuberNames = Object.keys(props.canais)
    return (
        <StyledFavoritos>
            {youtuberNames.map((youtuberName) => {
                const youtubers = props.canais[youtuberName]
                return (
                    <section>
                        <h2>{youtuberName}</h2>
                    
                    <div>
                        {youtubers.map((youtuber) => {
                            return (
                                <a href={youtuber.url}>
                                <img src={youtuber.imagem} />
                                <span>
                                    {youtuber.title}
                                </span>
                                </a>
                            )
                        })}
                    </div>
                    </section>
                )
            })}

        </StyledFavoritos>
    )
}


