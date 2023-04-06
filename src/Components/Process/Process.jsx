import "./process.scss";
import { useRef, useState } from "react";
export default function Process({ isLoaded }) {
  const paperPlaneAnimate = useRef(null);
  const [animated, setAnimated] = useState(false);
  if (isLoaded && !animated) {
    if (paperPlaneAnimate.current) {
      paperPlaneAnimate.current.beginElement();
      setAnimated(true);
    }
  }

  return (
    <div>
      <div className="processContainer">
        <svg
          viewBox="0 -140 1800 1000"
          width="100%"
          height="90vh"
          fill="none"
          // xmlns="http://www.w3.org/2000/svg"
        >
          <g id="processGraph">
            <path
              id="planePath"
              d="M61 751C235.667 747 459.164 729.844 433 635C417 577 253.078 536.513 333 447C433 335 581 447 761 483C921 515 941 447 941 447C941 447 957.802 409.582 917 331C809 123 1117 -17 1269 43C1390.6 91 1425 75 1521 3"
              stroke="white"
              strokeWidth="7"
            />
            <g id="Group 19">
              <circle
                id="Ellipse 7"
                cx="61"
                cy="748"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle id="Ellipse 10" cx="61" cy="748" r="43" fill="#FFDE67" />
            </g>

            <g id="Group 20">
              <circle
                id="Ellipse 7_2"
                cx="61"
                cy="748"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle
                id="Ellipse 10_2"
                cx="61"
                cy="748"
                r="43"
                fill="#FFDE67"
              />
            </g>
            <g id="Group 21">
              <circle
                id="Ellipse 7_3"
                cx="356"
                cy="426"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle
                id="Ellipse 10_3"
                cx="356"
                cy="426"
                r="43"
                fill="#FFDE67"
              />
            </g>
            <g id="Group 22">
              <circle
                id="Ellipse 7_4"
                cx="941"
                cy="449"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle
                id="Ellipse 10_4"
                cx="941"
                cy="449"
                r="43"
                fill="#FFDE67"
              />
            </g>
            <g id="Group 23">
              <circle
                id="Ellipse 7_5"
                cx="938"
                cy="120"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle
                id="Ellipse 10_5"
                cx="938"
                cy="120"
                r="43"
                fill="#FFDE67"
              />
            </g>
          </g>
          <foreignObject
            x="-10"
            y="400"
            width={"20rem"}
            height={"15rem"}
            style={{ color: "white" }}
          >
            {isLoaded && (
              <div className="context_1">
                <h3 style={{ fontSize: "2rem", textAlign: "left" }}>
                  03/22-12/22
                </h3>
                <ul
                  style={{
                    listStyle: "inside",
                    fontSize: "1.5em",
                    textAlign: "left",
                  }}
                >
                  <li>Cornerstone round</li>
                  <li>Seed round</li>
                  <li>DEMO</li>
                </ul>
              </div>
            )}
          </foreignObject>
          <foreignObject
            x="250"
            y="100"
            width={"25rem"}
            height={"15rem"}
            style={{ color: "white" }}
          >
            {isLoaded && (
              <div className="context_2">
                <h3 style={{ fontSize: "2rem", textAlign: "left" }}>
                  01/23-06/23
                </h3>
                <ul
                  style={{
                    listStyle: "inside",
                    fontSize: "1.5em",
                    textAlign: "left",
                  }}
                >
                  <li>Playable DEMO</li>
                  <li>Closed Test</li>
                  <li>IDO</li>
                  <li>IGO</li>
                </ul>
              </div>
            )}
          </foreignObject>
          <foreignObject
            x="750"
            y="540"
            width={"30rem"}
            height={"20rem"}
            style={{ color: "white" }}
          >
            {isLoaded && (
              <div className="context_3">
                <h3 style={{ fontSize: "2rem", textAlign: "left" }}>
                  07/23-12/23
                </h3>
                <ul
                  style={{
                    listStyle: "inside",
                    fontSize: "1.5em",
                    textAlign: "left",
                  }}
                >
                  <li>Internal Test</li>
                  <li>Exchange listing</li>
                  <li>Public Test</li>
                  <li>Official Operating</li>
                </ul>
              </div>
            )}
          </foreignObject>
          <foreignObject
            x="1150"
            y="100"
            width={"30rem"}
            height={"40rem"}
            style={{ color: "white" }}
          >
            {isLoaded && (
              <div className="context_4">
                <h3 style={{ fontSize: "2rem", textAlign: "left" }}>
                  2024 and beyond
                </h3>
                <ul
                  style={{
                    listStyle: "inside",
                    fontSize: "1.5em",
                    textAlign: "left",
                  }}
                >
                  {/* <li>
                    Successive launch of game clusters and diversification of
                    light e-sports platform events.
                  </li>
                  <li>
                    Open editor and encourage other game developers to integrate
                    into the MetaVirus game ecosystem.
                  </li>
                  <li>
                    Online and offline interactions, virtual reality and
                    real-life interactions.
                  </li>
                  <li>
                    Introduction of real-world brands, game and advertising
                    integration, mechanisms to encourage the community to act as
                    the main body for brand interaction and cooperation.
                  </li>
                  <li>
                    Enhancement of AR technology display, collaboration with
                    device manufacturers or independent launch of AR glasses.
                  </li> */}
                  <li>Launch of game clusters and light e-sports events.</li>
                  <li>
                    Encourage games to integrate into light e-sports ecosystem.
                  </li>
                  <li>VR, AR and real-life interactions.</li>
                  <li>
                    Introduction of brands, game and advertising integration.
                  </li>
                </ul>
              </div>
            )}
          </foreignObject>
          {/* {isLoaded && (
            <path
              transform="translate(-35,-140)"
              id="paperPlane"
              d="M51 81L7 5C55 13.9623 181.2 48.2981 258 41.9434M51 81L26 133M51 81L258 41.9434M26 133L106 143M26 133L84 110.485M258 41.9434L263 41L84 110.485M258 41.9434C190.8 71.4981 144.333 144.962 134 183L106 143M106 143L84 110.485"
              stroke="white"
              strokeWidth="7"
            />
          )}

          <animateMotion
            href="#paperPlane"
            dur="3s"
            repeatCount="1"
            fill="freeze"
            begin="indefinite"
            ref={paperPlaneAnimate}
          >
            <mpath href="#planePath" />
          </animateMotion> */}

          <path
            transform="translate(-35,-130)"
            id="paperPlane"
            d="M51 81L7 5C55 13.9623 181.2 48.2981 258 41.9434M51 81L26 133M51 81L258 41.9434M26 133L106 143M26 133L84 110.485M258 41.9434L263 41L84 110.485M258 41.9434C190.8 71.4981 144.333 144.962 134 183L106 143M106 143L84 110.485"
            stroke="white"
            strokeWidth="7"
            style={
              isLoaded ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            <animateMotion
              href="#paperPlane"
              dur="3s"
              repeatCount="1"
              fill="freeze"
              begin="indefinite"
              ref={paperPlaneAnimate}
            >
              <mpath href="#planePath" />
            </animateMotion>
          </path>
        </svg>
      </div>
    </div>
  );
}
