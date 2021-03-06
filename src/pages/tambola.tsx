import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./tambola.css";
import Logo from "../assets/logo.png";
import Gold from "../assets/gold.png";
import Silver from "../assets/silver.png";
import Friend from "../assets/friend.png";
import PlayerOption from "../assets/player-option.png";

const tambola: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="ion-toolbar">
        <IonTitle className="ion-title">
          <nav className="navbar px-0">
            <img src={Logo} alt="akhetpe logo" className="logo" />
            <div className="ml-auto">
              <img src={Gold} alt="akhetpe toolbar options" className="logos" />
              <img
                src={Silver}
                alt="akhetpe toolbar options"
                className="logos"
              />
              <img
                src={Friend}
                alt="akhetpe toolbar options"
                className="logos"
              />
              <br />
              <img
                src={PlayerOption}
                alt="akhetpe toolbar player select option"
                className="player-select"
              />
            </div>
          </nav>
        </IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="grid">
                <div id="div1">12</div>
                <div id="div2">12</div>
                <div id="div3">21</div>
                <div id="div4">14</div>
                <div id="div5">18</div>
                <div id="div6">21</div>
                <div id="div7">14</div>
                <div id="div8">14</div>
                <div id="div9">14</div>
                <div id="div10">14</div>
                <div id="div11">14</div>
              </div>
              <div id="infot">
                <div id="infotdiv1">Bingo</div>
                <div id="infotdiv2">Player 1</div>
              </div>
              <div id="content">
                <ul>
                  <li>1</li>
                  <li className='odd'>2</li>
                  <li>3</li>
                  <li className='odd'>4</li>
                  <li>5</li>
                  <li className='odd'>6</li>
                  <li>7</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li className='odd'>2</li>
                  <li>3</li>
                  <li className='odd'>4</li>
                  <li>5</li>
                  <li className='odd'>6</li>
                  <li>7</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li className='odd'>2</li>
                  <li>3</li>
                  <li className='odd'>4</li>
                  <li>5</li>
                  <li className='odd'>6</li>
                  <li>7</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li className='odd'>2</li>
                  <li>3</li>
                  <li className='odd'>4</li>
                  <li>5</li>
                  <li className='odd'>6</li>
                  <li>7</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li className='odd'>2</li>
                  <li>3</li>
                  <li className='odd'>4</li>
                  <li>5</li>
                  <li className='odd'>6</li>
                  <li>7</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li className='odd'>2</li>
                  <li>3</li>
                  <li className='odd'>4</li>
                  <li>5</li>
                  <li className='odd'>6</li>
                  <li>7</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li className='odd'>2</li>
                  <li>3</li>
                  <li className='odd'>4</li>
                  <li>5</li>
                  <li className='odd'>6</li>
                  <li>7</li>
                </ul>
              </div>
              <div id="align">
                <div id="downalign1">
                  <div id="secondlastt">
                    <h1>21</h1>
                  </div>
                  <div id="lastt">
                    <div id="lasttdiv1">Player 2</div>
                    <div id="lasttdiv2">score</div>
                  </div>
                </div>
                <div id="downalign2">
                  <div id="secondlastt">
                    <h1>10</h1>
                  </div>
                  <div id="lastt">
                    <div id="lasttdiv1">Player 3</div>
                    <div id="lasttdiv2">score</div>
                  </div>
                </div>
                <div id="downalign3">
                  <div id="secondlastt">
                    <h1>10</h1>
                  </div>
                  <div id="lastt">
                    <div id="lasttdiv1">Player 4</div>
                    <div id="lasttdiv2">score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default tambola;
