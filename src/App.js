import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <Container>
      <Main>
        <BlocA>
          <Header>
            <Logo />
            <RightHead>
              <Language />
              <Button
                fontSize="15px"
                padding="0.3rem 0.7rem"
                fontWeight="700px"
              >
                Sign In
              </Button>
            </RightHead>
          </Header>
        </BlocA>
        <BlockB />
        <BlockC />
      </Main>
      <Footer />
    </Container>
  );
}

function Container({ children }) {
  return <div className="container">{children}</div>;
}

function Header({ children }) {
  return <div className="header">{children}</div>;
}

function RightHead({ children }) {
  return <div className="header-right">{children}</div>;
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}
function Logo() {
  return (
    <div className="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="90"
        width="200"
        viewBox="-153.6 -69.1855 1331.2 415.113"
      >
        <path
          fill="#d81f26"
          d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"
        />
      </svg>
    </div>
  );
}

function Language() {
  return (
    <div className="lang">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          role="img"
          data-icon="LanguagesSmall"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>

      <select className="lang-select">
        <option className="lang-option">English</option>
        <option className="lang-option">हिंदी</option>
      </select>
    </div>
  );
}

function Button({
  children,
  padding = "0.5rem 1rem",
  backgroundColor = "#f60808",
  fontSize = "13px",
}) {
  const styles = {
    backgroundColor,
    display: "flex",
    color: "#fff",
    border: "none",
    outline: "0.3px solid #ffffff4d",
    padding,
    fontSize,
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "backgroundColor 0.15s, color 0.15s opacity 0.15s",
    width: "100px",
  };

  const hoverStyles = {
    ...styles,
    opacity: 0.9,
  };

  function handleClick() {
    setStyle({
      ...hoverStyles,
      opacity: 0.7,
    });
    setTimeout(() => {
      setStyle(hoverStyles);
    }, 200);
  }

  const [style, setStyle] = useState(styles);

  return (
    <button
      style={style}
      onMouseEnter={() => setStyle(hoverStyles)}
      onMouseLeave={() => setStyle(styles)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function BlocA({ children }) {
  return (
    <>
      <div className="background">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <div className="main-a-container">
        {children}
        <div className="main-a">
          <p className="line-1">Unlimited movies, TV shows and more</p>
          <p className="line-3">Watch anywhere. Cancel anytime.</p>
          <div className="search-container">
            <p className="line-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="search-input-button">
              <input type="text" placeholder="Enter Address"></input>
              <Button>
                <p className="button-text">Get Started</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    data-icon="ChevronRightStandard"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BlockB() {
  return (
    <div className="main-b">
      <div className="text-block">
        <p>Enjoy on your TV</p>
        <p>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </p>
      </div>

      <div className="video-block">
        <img
          alt="image2"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        />
        <div>
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoplay=""
            playsinline=""
            muted=""
            loop=""
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

function BlockC() {
  return (
    <div className="main-c">
      <div className="Mobile-block">
        <img
          alt="image2"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        />
      </div>
      <div className="text-block">
        <p>Download your shows to watch offline</p>
        <p>Save your favourites easily and always have something to watch.</p>
      </div>
    </div>
  );
}

function Footer() {
  return <div className="footer">Footer</div>;
}
