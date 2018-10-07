import React from 'react'
import { Dimensions } from 'react-native'
import { Path, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import SvgPanZoom from 'react-native-svg-pan-zoom'

const { width } = Dimensions.get('window')

const zoom = width / 600

const handlePress = (toggleChangeMap, maps, idx, navigation) => {
  toggleChangeMap(maps[idx])
  navigation.navigate('Detail')
}

const OverviewMap = ({ navigation, toggleChangeMap, maps }) => (
  <SvgPanZoom canvasHeight={800} canvasWidth={600} minScale={0.5} initialZoom={zoom}>
    <Path fill="#acd6ea" d="M-1914-1738.61h4639v4049.22h-4639z" />
    <G fill="none" stroke="#e3e3e3" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.716}>
      <Path d="M216.33 338.71l10.73 20a2.55 2.55 0 0 1 .13.29l11.07 33.22a1.45 1.45 0 0 1 .08.36l5.94 49.77 9.21-1.48h.22l48.5-1.85a2.12 2.12 0 0 1 .44 0l36.69 7.42" />
      <Path d="M341.2 447.18l-1.85 15.95v.16l-5.2 25.64-13.38 66.92a1.93 1.93 0 0 1-.11.34l-6.57 16.07a2.59 2.59 0 0 1-.17.33l-11.83 17.73s-94.64-10.43-132.65-8.12a3.72 3.72 0 0 1-3.94-3.56l-1.31-31.39a2.45 2.45 0 0 0-.26-1l-22-45.37a2.59 2.59 0 0 1-.24-.76L140 488.57a2.65 2.65 0 0 1 .2-1.45l4.42-9.87a1.92 1.92 0 0 1 .29-.45l6.28-7.33a2 2 0 0 1 .61-.46l8.12-3.89a1 1 0 0 1 .21-.08L192 454.29l.18-.05 52.09-11.9" />
      <Path d="M451.54 551.93l-40.9-9.67-.21-.06-28.6-10.4-33.43 7.06a1.81 1.81 0 0 1-.23 0L323.71 541M334.27 488.19l18 23.29a2.13 2.13 0 0 0 .33.34l19.43 15a2 2 0 0 0 .3.2l9.53 4.76M141.03 609.71l8.57-8.58 17-19.98M69.83 171.34l63.74 27.21S158.92 209 182.4 210.1M341.2 446.44l10.8-24.15a.87.87 0 0 0 .07-.17l17.09-52a1.46 1.46 0 0 0 .05-.2l6.65-31.77a1.64 1.64 0 0 0 0-.38l.06-21.74 16.69-77.5c0-.07 0-.13.05-.19l21.19-65a1.67 1.67 0 0 1 .08-.2l48.63-107" />
    </G>
    <G fill="none" stroke="#e3e3e3" strokeLinecap="round" strokeMiterlimit={10}>
      <Path
        d="M210.73 271.61l-26.24-59.79a1.12 1.12 0 0 1 .85-1.56c5.83-.87 27.87-4.49 41-10.59 15.28-7.09 35.41-26.1 42.87-42.87s57.65-128 57.65-128M606.24 194.07c-.37 5.6-8.58 51.82-9 57.41s-24.6 90.58-24.6 90.58L375.5 316l-36.5-7.11-128.27-37.28M572.69 342.06l-5.22 31.31-11.55 158.06-6.34 70.82s-5.22 37.28-10.44 54.8c0 0-17.94 51.8-4.73 102.1"
        strokeWidth={9.432}
      />
      <Path
        d="M-59.16 382.83l166.27-13.18 12.89-2.57a1.63 1.63 0 0 0 .39-.13c2.64-1.17 32.17-14.53 46.41-32 14.91-18.27 44-63.37 44-63.37"
        strokeWidth={9.432}
      />
      <Path
        d="M188.31 305.31l8.07 4.95a1.84 1.84 0 0 1 .34.27l9.35 9.35a1.72 1.72 0 0 1 .32.43l9.94 18.4M106.92 369.66l4.17 13.39a1.7 1.7 0 0 0 .37.67c2.36 2.69 20.69 25 37.4 87.32M231.61 658.17a43.42 43.42 0 0 0-2.24-14.54c-2.61-7.83-7.83-28-7.83-28s-1.11-13.42-25.72-10.06-54.82 7.12-54.82 7.12l-74.15 17.15M454.15 551.93h99.93M197.5 291.55l-24.97-17.52"
        strokeWidth={9.432}
      />
      <Path
        strokeWidth={18.863}
        d="M-64.5 44.87l22.64 66.96 98.71 469.38 16.98 71.05L98.98 723l49.99 94.63"
      />
      <Path d="M737.5 713.57l-181.4 38.35-66.34 24.53s-23.58 6.6-62.25 41.18" strokeWidth={9.432} />
    </G>
    <G opacity={0.5} fill="none" stroke="#002b64" strokeMiterlimit={10} strokeWidth={3.144}>
      <Path d="M331.815 64.853l49.862 22.903-19.947 43.428-49.862-22.902zM495.522 354.2l38.576 2.231-9.512 164.465-38.576-2.23zM92.06 562.35l40.56-13.84s12.26-5.65 17 9.44 1.25 4.4 1.25 4.4 7.24 15.4-6.6 20.43-44 14.15-44 14.15l-8.18-24.84zM142.05 376.86c24.41-11.14 43.54-26.31 56.91-45.9 0 0 16 18.86 21.37 40.24l-49 5.66.63 7.86-29.87 3.77z" />
    </G>
    <Path
      fill="#e3e3e3"
      opacity={0.4}
      d="M331.815 64.853l49.862 22.903-19.947 43.428-49.862-22.902zM495.529 354.26l38.575 2.231-9.512 164.465-38.575-2.23zM92.06 562.35l40.56-13.84s12.26-5.65 17 9.44 1.25 4.4 1.25 4.4 7.24 15.4-6.6 20.43-44 14.15-44 14.15l-8.18-24.84zM142.05 376.86c24.41-11.14 43.54-26.31 56.91-45.9 0 0 16 18.86 21.37 40.24l-49 5.66.63 7.86-29.87 3.77z"
    />
    <Path fill="#002b64" d="M176.63 360.98h9.12v10.06h-9.12z" />
    <Path
      d="M176.15 359.64h10.19a1.51 1.51 0 0 1 1.22 1.46v9.74a1.51 1.51 0 0 1-1.14 1.45l-.19.05H176.1a1.52 1.52 0 0 1-1.27-1.58v-9.59a1.51 1.51 0 0 1 1-1.45zm2.33 2.19v8.48h1.71v-3.2h.22c.8 0 1.6 0 2.39-.08a2.37 2.37 0 0 0 2.11-1.91 3.25 3.25 0 0 0 0-1.28 2.26 2.26 0 0 0-1.51-1.84 3.88 3.88 0 0 0-1.36-.17h-3.58z"
      fill="#e3e3e3"
    />
    <Path
      d="M180.2 365.66v-2.39c.69 0 1.38 0 2.06.07a1.05 1.05 0 0 1 .93 1.11 1.1 1.1 0 0 1-.93 1.13 3.94 3.94 0 0 1-.77.07h-1.19z"
      fill="#e3e3e3"
    />
    <Path fill="#002b64" d="M342.32 93.28h9.12v10.06h-9.12z" />
    <Path
      d="M341.52 92.1h10.18a1.51 1.51 0 0 1 1.22 1.47v9.74a1.52 1.52 0 0 1-1.13 1.45h-10.27a1.52 1.52 0 0 1-1.28-1.58v-9.6a1.51 1.51 0 0 1 1-1.44zm2.33 2.18v8.48h1.71v-3.19h.22c.79 0 1.59 0 2.39-.09a2.35 2.35 0 0 0 2.11-1.9 3.45 3.45 0 0 0 0-1.28 2.32 2.32 0 0 0-1.51-1.85 3.91 3.91 0 0 0-1.36-.16h-3.46z"
      fill="#e3e3e3"
    />
    <Path
      d="M345.56 98.12v-2.38c.69 0 1.38 0 2.06.06a1.06 1.06 0 0 1 .93 1.12 1.11 1.11 0 0 1-.93 1.13 6.68 6.68 0 0 1-.77.07h-1.31z"
      fill="#e3e3e3"
    />
    <G>
      <Path fill="#002b64" d="M117.85 567.33h9.12v10.06h-9.12z" />
      <Path
        d="M117.36 565.83h10.19a1.51 1.51 0 0 1 1.22 1.46v9.74a1.5 1.5 0 0 1-1.14 1.45l-.19.05h-10.08A1.52 1.52 0 0 1 116 577v-9.59a1.51 1.51 0 0 1 1-1.45zm2.33 2.18v8.48h1.71v-3.19h.22c.8 0 1.6 0 2.39-.08a2.36 2.36 0 0 0 2.11-1.91 3.25 3.25 0 0 0 0-1.28 2.26 2.26 0 0 0-1.51-1.84 3.86 3.86 0 0 0-1.35-.17h-3.59z"
        fill="#e3e3e3"
      />
      <Path
        d="M121.41 571.85v-2.37c.68 0 1.37 0 2 .07a1 1 0 0 1 .93 1.11 1.1 1.1 0 0 1-.93 1.13 4.9 4.9 0 0 1-.77.07h-1.19z"
        fill="#e3e3e3"
      />
    </G>
    <G>
      <Path fill="#002b64" d="M505.47 432.45h9.12v10.06h-9.12z" />
      <Path
        d="M505 431.27h10.19a1.51 1.51 0 0 1 1.22 1.47v9.74a1.5 1.5 0 0 1-1.14 1.44l-.19.06h-10.13a1.51 1.51 0 0 1-1.27-1.57v-9.6a1.51 1.51 0 0 1 1-1.45zm2.33 2.18v8.48H509v-3.19h.22c.8 0 1.59 0 2.39-.09a2.35 2.35 0 0 0 2.11-1.91 3.44 3.44 0 0 0 0-1.28 2.28 2.28 0 0 0-1.51-1.84 4.17 4.17 0 0 0-1.36-.17h-3.58z"
        fill="#e3e3e3"
      />
      <Path
        d="M509 437.28v-2.37c.69 0 1.38 0 2.06.06a1.05 1.05 0 0 1 .93 1.12 1.11 1.11 0 0 1-.93 1.13 6.48 6.48 0 0 1-.77.07H509z"
        fill="#e3e3e3"
      />
    </G>
    <G>
      <Path
        d="M184.27 567.58c-1.12-1.11-2.76-6.14 2.23-12.3s10.07-7.08 10.44-16.4-3.35-8.2-3-12.3 10.81-14.91 10.81-14.91a14.72 14.72 0 0 1 14.17-2.24c8.2 3 13-5.22 11.18-8.2s-6.71-6.71-2.61-9.32 8.2-1.11 9.32-8.94-1.87-8.58-.37-10.81 3-6 10.81-6.34c1.11 0 4.57 3.79 6.33-.37s0-6.71 5.22-7.46 4.85-2.23 8.57-1.12 6.71-1.49 8.58 1.12 2.61 4.48 1.12 7.08-5 8.27-6 15.29c-.88 6.49.44 11.47 4.48 14.16.37.38 2.31 4.61-7.09 13.05-1.86 1.49-6.76 2.64-8.2 7.83s-7.83 11.55-8.57 12.3-6.36 9-10.07 25c-.74 4.48-.56 6.57 0 15.66.51 8.19-17.14 1.49-24.6 2.24-2.24 0-3.8-2-6.34-5.59-2.74-3.91-9.58-6.51-13-.75-3.35 5.56-9.31 7.8-13.41 3.32z"
        fill="#3959a8"
        opacity={0.4}
      />
      <Path
        d="M215.21 526.58c2.23-.74 3 2.61 7.45-.37 4.73-3.15 8.58-2.61 9.69 2.23.38 1.12-4.57 2.86-1.49 4.48 0 0 9.32 5.22 3.73 9.32-.37.37-3.73 0-4.84 0-.75 0-2.9 6.07-7.46 2.61s-8.57-3.73-8.2-6 2.8-2.25 3-3.73c.35-2.95-3-8.12-1.88-8.54z"
        fill="#acd6ea"
      />
    </G>
    <G>
      <Path
        id="E-Huset"
        fill="#002b64"
        d="M479.13 402.82v-9.32h-4.48v-7.82H441.1v-23.86h26.84v-9.69h-2.98v-7.46h-50.7v-4.1h-13.41v4.1h-11.56v51.44h-7.08v2.99h-15.66v20.12h14.91v35.42h-11.93v17.52h19.76v24.6h9.69v10.44H378.11v8.57h3.72v8.57h73.81v-8.57h2.61v-8.95H441.1v-24.23h38.03v-9.32h-4.48v-7.82H441.1v-23.11h38.03v-9.32h-4.48v-7.83H441.1v-22.37h38.03z"
        onPress={() => handlePress(toggleChangeMap, maps, 3, navigation)}
      />
    </G>
    <G>
      <Path
        id="Karhuset"
        fill="#002b64"
        d="M307.28 198.92l3.73-4.85-8.51-6.28 22.72-46.94-16.65-8.06-31.11 64.27 5.79 2.8-23.74 32.92 44.63 32.19 32.49-45.05-29.35-21z"
        onPress={() => handlePress(toggleChangeMap, maps, 0, navigation)}
      />
    </G>
    <G>
      <Path
        id="StudieC"
        fill="#002b64"
        d="M337.85 336.54l1.98-7.52-7.57-1.99-1.98 7.52-22.85-6.03-13.66 51.85 52.78 13.91 13.66-51.84-22.36-5.9z"
        onPress={() => handlePress(toggleChangeMap, maps, 1, navigation)}
      />
    </G>
    <G>
      <Path
        id="Annexet"
        fill="#002b64"
        d="M150.15 398.259l63.306-5.438 3.915 45.572-63.307 5.438z"
        onPress={() => handlePress(toggleChangeMap, maps, 4, navigation)}
      />
    </G>
  </SvgPanZoom>
)

OverviewMap.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  toggleChangeMap: PropTypes.func.isRequired,
  maps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default OverviewMap