import config from '../config.json';
import styled from "styled-components";
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
    // const estilosDaHomePage = {backgroundColor: "lightpink"}
    console.log(config.playlists)
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                backgroundColor: "#FDD7C2",
            }}>
                
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
  }
  
  export default HomePage

//   function Menu() {
//     return (
//         <div>Menu</div>
//     )
//   }

  const StyleHeader = styled.div`
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .user-info {
            margin-top: 50px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
    `;

  function Header() {
    return (
        <StyleHeader>
            {/* <img src="banner" /> */}
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
        </StyleHeader>
    )
  }

  function Timeline(props) {
        const playlistsNames = Object.keys(props.playlists)
        return (
            <StyledTimeline>
                {playlistsNames.map((playlistsName) => {
                    const videos = props.playlists[playlistsName]
                    return (
                        <section>
                            <h2>{playlistsName}</h2>
                            <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
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