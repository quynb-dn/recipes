export interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 210}
      height={height || 250}
      viewBox="0 0 210 250"
    >
      <path
        fill="#171614"
        d="M118 8c3.691 1.967 7.037 4.037 10 7h3.438C135 15 135 15 138 17c.512 2.383.512 2.383.688 5.125l.199 2.758L139 27l2.563.625C150.632 31.253 154.75 38.529 159 47c1.02 2.387 2.02 4.783 3 7.188 3.077 7.434 7.093 12.905 12.75 18.562 6.239 6.239 6.699 13.637 7.707 22.074.524 4.262 1.29 8.461 2.106 12.676l.42 2.203c.336 1.766.676 3.532 1.017 5.297-3.75 1.125-3.75 1.125-6 0l-.313 2.188c-.76 3.112-1.815 5.22-3.687 7.812l-3 1-1.375 2.563C170 131 170 131 167.687 131.625c-3.836-.892-5.725-3.05-8.687-5.625l-.008 3.629c-.203 11.389-2.01 20.154-6.992 30.371l-1.074 2.352a64.38 64.38 0 0 1-4.469 7.996c-3.635 5.586-6.335 10.799-5.457 17.652 1.925 3.399 3.754 4.577 7.375 5.875 4.68 1.947 6.909 3.831 9.625 8.125.313 2.875.313 2.875 0 5-3.124 1.867-4.93 2.156-8.5 1.563-3.18-.518-5.41-.525-8.5.437l-2-4-2.016-.076a4641.96 4641.96 0 0 1-9.109-.362l-3.172-.119c-4.19-.172-8.176-.341-12.3-1.138L110 203l-2.313 2.563L105 208c-3.75-.688-3.75-.688-6.059-1.375-3.94-.837-7.736-.835-11.754-.813H84.94c-3.441.032-6.651.109-9.94 1.188l-1 4-3.25.438c-3.509.416-3.509.416-5.813 1.25-3.036.49-5.164-.482-7.937-1.688-2.5-3.75-2.536-5.559-2-10 2.313-2.625 2.313-2.625 5-5 4.47-5.994 2.962-11.947 2-19-.89-4.72-1.981-9.384-3.063-14.063C55.324 146.27 53.915 128.901 57 112l-3.125 1.813c-9.06 4.506-21.998 7.48-31.969 4.578-1.843-.766-1.843-.766-4.906-2.391l-2.375-1.063C13 114 13 114 12 112c-.04-2-.043-4 0-6l-4-2c.466-5.707 1.938-9.16 5-14h2l.754-1.79c1.42-2.52 2.925-3.794 5.184-5.585C24.42 79.694 26.098 77.166 28 73c2.913-3.443 6.16-5.82 9.875-8.313 4.163-2.838 7.222-5.827 10.406-9.703 3.648-4.212 8.047-7.662 12.407-11.109 2.442-1.914 2.442-1.914 4.937-4.5C68 37 68 37 71 35l-.063-3.313C71 28 71 28 72.688 25.188 75 23 75 23 77.434 22.134c3.06-1.351 4.059-2.714 5.941-5.445C92.26 4.672 104.348 2.773 118 8ZM91 182l-1 1c-.042 5.27-.042 5.27 2.383 9.746 1.854 1.534 3.325 2.508 5.617 3.254 3.701-.931 3.701-.931 7-3l2.75-.875c2.968-1.484 3.905-3.137 5.25-6.125l-1-2-1.8.07c-5.905.129-11.274-.491-17.048-1.73L91 182Z"
      />
      <path
        fill="#4A382F"
        d="m111.438 12.25 3.933.203c3.687.556 5.78 1.154 8.629 3.547v4h3v6h9l-1-6h-6l-1-4c6.625-1.25 6.625-1.25 10 1 .512 2.383.512 2.383.688 5.125l.199 2.758L139 27l2.563.625C148.65 30.46 152.742 35.223 156 42v2h-2c-3-5.75-3-5.75-3-8-2.842-1.573-2.842-1.573-6-2 .36.52.722 1.039 1.094 1.574 4.609 6.927 4.609 6.927 3.906 11.426l-3 1c-2.188-1.125-2.188-1.125-4-3-.25-2.688-.25-2.688 0-5h-2l-1-2c-2.527-.656-2.527-.656-5-1 1.088 3.25 1.088 3.25 3 6 .04 1.666.043 3.334 0 5-4.38-.5-6.842-1.932-10-5v-3c-3.91-.908-7.614-1.195-11.625-1.25l-3.414-.078c-2.933.082-2.933.082-4.816 1.644-1.65 2.428-1.825 4.807-2.145 7.684h2v-3h4v2l3.313-.625C119 46 119 46 122 48c.34 2.155.34 2.155.293 4.79l-.03 2.85c-.024.985-.05 1.97-.076 2.985l-.04 3.008A689.737 689.737 0 0 1 122 69l-6 1v4l-8-1 .125 2.188c-.138 3.097-.954 4.95-2.125 7.812-.526 2.363-.996 4.73-1.438 7.11L104 92l-2 1-.586-1.898-.789-2.477-.773-2.46c-.75-2.33-.75-2.33-2.852-4.165-2.108.319-2.108.319-4 1v-2l-3 2c-2.445-.207-2.445-.207-5.125-.813l-2.695-.582C80 81 80 81 79 80c.059-7.668 1.743-13.614 6-20h2l1-2 2.188 2.375C92.832 62.845 94.603 63.933 98 65c.517-6.072-.814-10.769-4-16l-3-2a78.037 78.037 0 0 1-2-5l-1-1c-.208-2.767-.325-5.48-.375-8.25l-.113-2.316c-.067-4.304.06-5.908 2.875-9.368L93 19l2.188-1.813C97 16 97 16 99 16l1-3c3.615-1.591 7.585-.98 11.438-.75Z"
      />
      <path
        fill="#684D42"
        d="M62 174h2c3.161 14.282 3.161 14.282 0 21l3.5-1c7.063-1.61 14.304-1.159 21.5-1l1-5 2.25 2.375c2.294 2.19 3.872 3.452 6.75 4.625l2-2a95.547 95.547 0 0 1 4.5-1.25c2.416-.683 2.416-.683 4.5-1.75 1.68-3.029 1.68-3.029 2-6l3 1v4l1-2 6 1v2c2.791.248 5.581.474 8.375.688l2.406.22c2.57.22 2.57.22 6.219.092l2-3 .938 1.75c2.185 2.384 3.489 2.958 6.437 4.125 4.68 1.947 6.909 3.831 9.625 8.125.313 2.875.313 2.875 0 5-3.124 1.867-4.93 2.156-8.5 1.563-3.18-.518-5.41-.525-8.5.437l-2-4-2.016-.076a4641.96 4641.96 0 0 1-9.109-.362l-3.172-.119c-4.19-.172-8.176-.341-12.3-1.138L110 203l-2.313 2.563L105 208c-3.75-.688-3.75-.688-6.059-1.375-3.94-.837-7.736-.835-11.754-.813H84.94c-3.441.032-6.651.109-9.94 1.188l-1 4-3.25.438c-3.509.416-3.509.416-5.813 1.25-3.036.49-5.164-.482-7.937-1.688-2.5-3.75-2.536-5.559-2-10 2.313-2.625 2.313-2.625 5-5 3.654-4.543 3.208-8.314 2.688-13.813l-.186-2.388A460.825 460.825 0 0 0 62 174Z"
      />
      <path
        fill="#58473B"
        d="M115 48c2.375.25 2.375.25 5 1 2.75 3.643 2.225 7.904 2.125 12.25l-.027 2.258c-.024 1.83-.06 3.661-.098 5.492l-6 1v4l-8-1 .125 2.188c-.138 3.097-.954 4.95-2.125 7.812-.526 2.363-.996 4.73-1.438 7.11L104 92l-2 1-.586-1.898-.789-2.477-.773-2.46c-.75-2.33-.75-2.33-2.852-4.165-2.108.319-2.108.319-4 1v-2l-3 2c-2.445-.207-2.445-.207-5.125-.813l-2.695-.582C80 81 80 81 79 80c.059-7.668 1.743-13.614 6-20h2l1-2c4 4.75 4 4.75 4 7h2l1 2a206.38 206.38 0 0 0 5 2c1.683.972 3.354 1.966 5 3-1.143-3.537-1.143-3.537-3.563-6.219C98.273 61.861 99.873 54.655 100 50h15v-2Z"
      />
      <path
        fill="#282221"
        d="M118 8c3.691 1.967 7.037 4.037 10 7 .625 2.125.625 2.125 1 4h7v7h-9v-6h-3v-4c-4.2-1.983-7.946-2.408-12.563-2.688l-3.94-.261c-3.865-.065-3.865-.065-7.497.949a282.478 282.478 0 0 0-5 5l-2.75 1.438c-2.465 1.368-2.465 1.368-3 4L89 28l-.563 6.375C88.29 36.25 88.144 38.125 88 40h-1l-.184-2.52-.254-3.292c-.08-1.08-.162-2.158-.246-3.27C86.098 27.94 86.098 27.94 85 25c2.7-7.561 2.7-7.561 6-10h2v-2c1.5-1.625 1.5-1.625 3-3l-7 2v3h-2l-.875 1.875C85 19 85 19 83 21c-.203 2.57-.124 4.59.625 7.063.497 2.567-.298 3.752-1.625 5.937h2l1 13c-4.403 0-6.2-.263-10-2v3l-5 2 1-3-3-1 1-4 1.938-.313L73 41l1-3c-4.824 1.27-4.824 1.27-8 5h-2v2c-1.813 1.688-1.813 1.688-4 3l-3-1 2.688-2.188c2.122-1.761 4.04-3.54 6-5.5C68 37 68 37 71 35l-.063-3.313C71 28 71 28 72.688 25.188 75 23 75 23 77.434 22.134c3.06-1.351 4.059-2.714 5.941-5.445C92.26 4.672 104.348 2.773 118 8Z"
      />
      <path
        fill="#38312B"
        d="m126 165 2 1v2h-2v-3Zm-45 3c1.638 2.457 2.62 4.346 3.625 7.063l.79 2.097C86 179 86 179 86 181l2-1c2.672-.134 5.323-.043 8 0v2c11.71.92 11.71.92 22.008-3.445 1.968-2.781 3.57-5.463 4.992-8.555l1-2h2c2.125 6.625 2.125 6.625 1 10h3l.438 2.313c.525 2.769.525 2.769 1.562 5.687h-2c1.67 3.224 1.67 3.224 4.625 3.688L137 190l-.625-1.75c-.462-2.77.196-3.896 1.625-6.25h2c.027 1.48.046 2.958.063 4.438l.035 2.496C140 191 140 191 139 192c-5.894.376-11.263-.707-17-2v-2c-3.629-.151-3.629-.151-7 1l-1-4-2.238.07c-7.17.128-13.762-.527-20.762-2.07l-.148 2.152-.227 2.786c-.07.916-.14 1.833-.21 2.777-.138.754-.274 1.508-.415 2.285-3.066 1.533-6.267 1.058-9.625 1-5.558-.055-10.877.084-16.375 1l2-9h1v6c7.066.138 13.974-.252 21-1v-6l-6 1v-3h-2v2h-2v2l-9 2v-3h2l.813-1.813C73 182 73 182 74.5 180.563c1.891-1.97 2.506-4.043 3.5-6.562l2-1c.656-2.527.656-2.527 1-5Z"
      />
      <path
        fill="#4C3830"
        d="M85 112c1.648 2.967 2.443 5.656 3 9h4l.313-1.938L93 117l3-1 1 2h5c3.177 5.249 3.657 10.015 4 16h-2v7c-2.709 1.354-5.01 1.065-8 1v2h-4v-6h-5c-3.671-8.399-5.818-15.81-6-25l4-1Z"
      />
      <path
        fill="#7F5F52"
        d="M115 48c2.375.25 2.375.25 5 1 2.75 3.643 2.225 7.904 2.125 12.25l-.027 2.258c-.024 1.83-.06 3.661-.098 5.492h-6v-2l-3 1 1 4c-6.154-.37-8.727-1.829-13-6-2.231-4.462-1.043-11.22-1-16h15v-2Z"
      />
      <path
        fill="#545255"
        d="M160 52c1.942 1.942 2.639 3.178 3.75 5.625 2.797 5.729 6.436 10.56 10.938 15.063 6.278 6.278 6.754 13.641 7.769 22.136.524 4.262 1.29 8.461 2.106 12.676l.42 2.203c.336 1.766.676 3.532 1.017 5.297-3.75 1.125-3.75 1.125-6 0l-.313 2.188c-.76 3.112-1.815 5.22-3.687 7.812l-3 1-1.375 2.563C170 131 170 131 167.75 131.688c-4.16-1.04-6.72-3.753-9.75-6.688 3.01-.934 3.867-1.044 7 0v2h2l-1.063-2.313C165 122 165 122 166 119c3.058-.544 5.888-1 9-1l.332-1.715.48-2.222.458-2.215L177 110l3-1-.459-2.722c-.56-3.328-1.12-6.657-1.677-9.986l-.728-4.324c-.349-2.07-.696-4.14-1.042-6.21l-.635-3.777C175 79 175 79 175 77l-2.938-.375L169 76l-1-2h2v-2h-2l-.75-2.25c-1.09-2.823-1.09-2.823-3.25-4.75-3.182-3.182-3.957-5.854-4.125-10.313L160 52Z"
      />
      <path
        fill="#2E241C"
        d="M122 53h1v14l3-1c-.313 1.875-.313 1.875-1 4l-3 2c-.728 2.548-.728 2.548-1.063 5.438-.517 3.698-.824 5.393-2.937 8.562-.666 2.275-.666 2.275-1.125 4.688l-.508 2.449L116 95l-4 1c-2.52-3.78-2.467-7.617-2-12 1-2.5 1-2.5 2-4-3.535 1.768-4.067 6.183-5.375 9.75C105 93 105 93 102.812 93.938L101 94l-2-3-2 1-2-3c-2.525-2.525-4.735-3.043-8.125-4.125l-3.32-1.07L81 83v-2l1.863.254 2.45.308 2.425.317c2.43.269 2.43.269 5.262-.879v2l5-2c2.96 3.364 3.923 6.692 5 11l.586-2.633.789-3.492.773-3.445c.798-3.214 1.76-6.306 2.852-9.43l8 1v-4l6-1V53Z"
      />
      <path
        fill="#6C4939"
        d="m140 188 1.438 1.75c2.442 2.144 4.043 2.952 7 4.125 4.636 1.95 6.866 3.864 9.562 8.125.313 2.875.313 2.875 0 5-3.124 1.867-4.93 2.156-8.5 1.563-3.18-.518-5.41-.525-8.5.437-1-4.75-1-4.75-1-7l-3-1-1.766 1.023c-3.31 1.447-5.545.496-8.984-.398l-3.547-.898L120 200v-4l8 1v2c1.423-.03 1.423-.03 2.875-.063C134 199 134 199 136 200c-1.498-4.662-4.885-5.866-9-8v-1h12l1-3Z"
      />
      <path
        fill="#8E634F"
        d="m112.25 14.938 3.828.027L119 15c2.505 6.71 3.872 11.92 2 19l-3.938.25c-5.203.553-9.432 2.397-14.062 4.75l1-5h2v-2l6-2v-2c-4.572 1.6-8.211 2.94-12 6h-2v-5h4v-2l9-3v-2l-11 1 4-4-3-1v-2c3.754-1.204 7.332-1.099 11.25-1.063Z"
      />
      <path
        fill="#392E26"
        d="m78 22 2 1v3l4 1a84.76 84.76 0 0 1-2 7h2l1 13c-4.403 0-6.2-.263-10-2v3l-5 2 1-3-3-1 1-4 1.938-.313L73 41l1-3c-4.824 1.27-4.824 1.27-8 5h-2v2c-1.813 1.688-1.813 1.688-4 3l-3-1 2.688-2.188c2.122-1.761 4.04-3.54 6-5.5C68 37 68 37 71 35l-.063-3.313c.075-4.383.97-5.682 4.063-8.687l3-1Z"
      />
      <path
        fill="#302C2D"
        d="M137 16c2.168 3.613 2.193 6.86 2 11l2.563.625C148.65 30.46 152.742 35.223 156 42v2h-2c-3-5.75-3-5.75-3-8-2.842-1.573-2.842-1.573-6-2 .36.52.722 1.039 1.094 1.574 4.609 6.927 4.609 6.927 3.906 11.426l-3 1c-2.188-1.125-2.188-1.125-4-3-.25-2.688-.25-2.688 0-5h-2l-1-2c-2.527-.656-2.527-.656-5-1l-1 3-5-2v-2l8-3v-2l-6-1v2c-3.875-1.875-3.875-1.875-5-3a74.456 74.456 0 0 1-.063-4.563l.028-2.503L126 20h1v6h9l-1-6h-6l-1-4c3.308-1.103 5.701-1.215 9 0Z"
      />
      <path
        fill="#775546"
        d="m100 16 1 2c2.025.652 2.025.652 4 1l-2 3h8v2l-9 3v2h-4v5l2 1-1.375 1.563C96.618 39.572 95.873 42.508 95 46h-3l-.875-2.438C90.267 40.867 90.267 40.867 88 40a343.43 343.43 0 0 1-.313-7.688l-.126-2.185c-.095-4.134.073-5.66 2.72-9.033 3.235-2.491 5.922-3.68 9.719-5.094Z"
      />
      <path
        fill="#69534D"
        d="m90 188 2.125 2.313c2.706 2.798 2.706 2.798 6 4.187 4.26 2.223 5.398 5.07 6.875 9.5l-1 1 3 1-2 2a240.516 240.516 0 0 1-5.938-1.418C92.475 205.33 85.689 205.292 79 205v-1l9-1-2-1v-2a292.931 292.931 0 0 0-4.375-.125l-2.46-.07c-2.378-.019-2.378-.019-4.165 2.195l-2-1-1 3-2-1v-3h4l1-5c1.454.03 1.454.03 2.938.063 2.937.293 2.937.293 4.062-1.063 2.328-.368 4.662-.702 7-1l1-5Z"
      />
      <path
        fill="#382A1E"
        d="M100 34h2c-.665 4.389-2.188 7.981-4 12l5-1 .188-1.75c1.188-3.292 2.89-4.365 5.812-6.25 3.55-.39 3.55-.39 7.313-.25l3.8.11L123 37v1l-2.738.113-3.575.2-3.55.175c-3.086.265-3.086.265-5.012 1.856-1.639 2.413-1.807 4.798-2.125 7.656h2v-3h4v2l3.313-.625C119 46 119 46 122 48c.188 2.625.188 2.625 0 5l-1.25-1.938c-1.928-2.272-2.864-2.664-5.75-3.062v2c-2.124.194-4.25.38-6.375.563l-3.586.316C102 51 102 51 100 50c.06 2.627.147 5.25.25 7.875l.043 2.262c.067 2.434.067 2.434.707 5.863 1.906 1.603 1.906 1.603 4 2v4c-2.867-.573-3.861-.861-6-3-1.65-.707-3.316-1.38-5-2v-2h-2l1-2 5 2c.517-6.072-.814-10.769-4-16l-3-2c-1.125-2.5-1.125-2.5-2-5l-1-2 4 2v4h3l.25-3.188c.807-4.1 1.827-5.89 4.75-8.812Z"
      />
      <path
        fill="#2C251D"
        d="M77 48v2h9l1 2-1 2h3l3 9-4-4c-3.015.66-3.015.66-4.055 2.61-1.25 3.16-2.16 6.365-3.07 9.64l-1.07 3.828L79 78c-2.977-2.664-2.977-2.664-3.188-5.688L76 70l1.938-.625c2.411-1.27 2.411-1.27 2.812-4.5L81 62l-11-2v-6h-3c.188-1.875.188-1.875 1-4 3.298-1.783 5.177-2 9-2Z"
      />
      <path
        fill="#402B23"
        d="M94 116h2l1 2h5c3.177 5.249 3.657 10.015 4 16h-2v7l-7 1-.402-3.648-.535-4.727-.264-2.406c-.403-4.242-.403-4.242-1.799-8.219-3.03-.658-3.03-.658-6-1l4-1 .438-1.938C93 117 93 117 94 116Z"
      />
      <path
        fill="#3A3534"
        d="m16 87 1 2a158.623 158.623 0 0 1-3 5v2h2c.107 5.118-.288 9.93-1 15l5-1v2l3 1-1 1 3 1 1-3v2c6.312 1.767 12.492 2.114 19 2-6.316 3.644-13.895 3.599-21 3-2.61-.739-4.575-1.713-7-3l-2.375-1.063C13 114 13 114 12 112c-.04-2-.043-4 0-6l-4-2c.466-5.707 1.938-9.16 5-14h2l1-3Z"
      />
      <path
        fill="#392E28"
        d="M86 86v2h3c1.422 1.61 1.422 1.61 2.75 3.75l1.36 2.11C94 96 94 96 93.78 98.155 92.568 101.02 90.771 101.74 88 103c-2.75.25-2.75.25-5 0l-1-1a103.535 103.535 0 0 0-5.063-.563l-2.785-.253L72 101v-1l14-1-1-6-1.75 1.063c-2.646 1.102-3.626.987-6.25-.063l-2-2-5 3 1-3 2-1 .813-2C75 87 75 87 77.25 86.25c2.934-.267 5.805-.318 8.75-.25Z"
      />
      <path
        fill="#27221E"
        d="M99 6v2l1.715.332 2.222.48 2.215.458L107 10l1 3-3.688.188c-4.538.55-6.287 2.379-9.312 5.812l-2.75 1.438c-2.465 1.368-2.465 1.368-3 4L89 28l-.563 6.375C88.29 36.25 88.144 38.125 88 40h-1l-.184-2.52-.254-3.292c-.08-1.08-.162-2.158-.246-3.27C86.098 27.94 86.098 27.94 85 25c2.7-7.561 2.7-7.561 6-10h2v-2c1.5-1.625 1.5-1.625 3-3l-7 2v3h-2l-.875 1.875C85 19 85 19 83 21c-.648 2.57-.648 2.57-1 5h-2c-.719-1.691-.719-1.691-1-4 3.919-6.694 11.489-16 20-16Z"
      />
      <path
        fill="#282522"
        d="M148 50h4l.55 2.012c1.92 6.853 1.92 6.853 5.45 12.988l2 1v-2h2l2 6-4 1v9c-4 1-4 1-6.25.063L152 79c.095-.603.19-1.207.29-1.828l.335-2.422.352-2.39c.027-2.766-.689-3.94-1.977-6.36a153.107 153.107 0 0 1-1.625-6.563c-.26-1.135-.52-2.27-.79-3.44C148 53 148 53 148 50Z"
      />
      <path
        fill="#7C5B4A"
        d="m112.25 14.938 3.828.027L119 15c2.542 6.808 3.806 11.775 2 19h-9c2-2 2-2 5-3l2-12-7-1v4l6-1v3h-7v-2l-11 1 4-4-3-1v-2c3.754-1.204 7.332-1.099 11.25-1.063Z"
      />
      <path
        fill="#5E433A"
        d="M140 198h4v2h4l2-2 7 2 1 7c-3.124 1.867-4.93 2.156-8.5 1.563-3.18-.518-5.41-.525-8.5.437l-1-5h3l-1-4h-2v-2Z"
      />
      <path
        fill="#2A1F18"
        d="m127 173 1 2-1 3h3l.438 2.313c.525 2.769.525 2.769 1.562 5.687h-2c1.67 3.224 1.67 3.224 4.625 3.688L137 190l-.625-1.75c-.462-2.77.196-3.896 1.625-6.25h2c.027 1.48.046 2.958.063 4.438l.035 2.496C140 191 140 191 139 192c-5.894.376-11.263-.707-17-2l-2-7c1.313-1.5 1.313-1.5 3-3h3l-.625-2.375L125 175l2-2Z"
      />
      <path
        fill="#362F2A"
        d="m137 29 7 1 .75 2.063c1 2.35 2.045 4.282 3.375 6.437 1.789 3.34 2.32 4.828 1.875 8.5l-3 1c-2.188-1.125-2.188-1.125-4-3-.25-2.688-.25-2.688 0-5h-2l-1-2c-2.527-.656-2.527-.656-5-1l-1 3-5-2v-2l8-3v-4Z"
      />
      <path
        fill="#2A2A2B"
        d="M158 126c3.804 11.413-1.155 23.733-6 34l-1.074 2.363c-2.199 4.63-4.877 8.977-7.559 13.34A80.545 80.545 0 0 0 140 182c-.18-3.947-.094-6.598 2-10h2l.25-1.938c1.232-5.03 3.047-10.359 6.75-14.062.377-2.336.505-4.643.656-7.004L152 147l2-1c.434-1.804.434-1.804.563-3.965l.226-2.424.211-2.548c.138-1.656.283-3.311.438-4.965l.183-2.234C156 128 156 128 158 126Z"
      />
      <path
        fill="#343337"
        d="M160 52c1.942 1.942 2.639 3.178 3.75 5.625 2.797 5.729 6.436 10.56 10.938 15.063 4.368 4.368 5.974 8.106 6.312 14.312-1 2.188-1 2.188-2 4 .324 1.336.657 2.67 1 4l-2 3-3-21-6-1-1-2h2v-2h-2l-.75-2.25c-1.09-2.823-1.09-2.823-3.25-4.75-3.182-3.182-3.957-5.854-4.125-10.313L160 52Z"
      />
      <path
        fill="#221D1C"
        d="M144 32c7.812 3.98 7.812 3.98 10 9v3l3-1 3 9-3-2-3 7c-2-2-2-2-2.125-4.625L152 50h-4l2 8c-2.675-1.337-2.989-2.733-4.188-5.438l-1.105-2.433C144 48 144 48 145 46l4 1c-.439-5.484-1.802-8.564-5-13v-2Z"
      />
      <path
        fill="#533E2E"
        d="m116.313 36.75 3.8.11L123 37v1l-2.738.113-3.575.2-3.55.175c-3.086.265-3.086.265-5.012 1.856-1.639 2.413-1.807 4.798-2.125 7.656h2v-3h4v2l3.313-.625C119 46 119 46 122 48c.188 2.625.188 2.625 0 5l-1.25-1.938c-1.928-2.272-2.864-2.664-5.75-3.062v2c-2.124.194-4.25.38-6.375.563l-3.586.316C102 51 102 51 100 50v7c-2.68-4.019-2.156-6.242-2-11l5-1 .188-1.75c2.229-6.174 7.245-6.72 13.124-6.5Z"
      />
      <path
        fill="#2D2723"
        d="M139 101h4v3h-2c.752 3.278.752 3.278 4 5v2h2c.08 2.124.14 4.25.188 6.375l.105 3.586L147 124l-3 2 1-5-4 4-2-1 1-1c.072-1.52.084-3.042.063-4.563l-.028-2.503L140 114h-3c.14-1.98.287-3.959.438-5.938.08-1.102.162-2.204.246-3.34C138 102 138 102 139 101Z"
      />
      <path
        fill="#272729"
        d="M58 122h1l1 19h1v6h-2c1.448 1.448 3.04 1.557 5 2v3l-4 2c.308 1.48.622 2.96.938 4.438l.527 2.496c.343 2.043.343 2.043 1.535 3.066.233 1.682.413 3.371.563 5.063l.253 2.785L64 174h-2c-4.437-17.167-7.76-33.14-5-51l1-1Z"
      />
      <path
        fill="#4B3D32"
        d="m85 60 1 3-2 3 5 2-.219 1.758C88.253 74.2 87.885 78.516 88 83l-9-3c.54-7.896 1.558-13.337 6-20Z"
      />
      <path
        fill="#4D3732"
        d="m106.625 194.438 2.477.308L111 195v2l6-1v5l-3.375.813c-3.843.845-3.843.845-5.625 4.187-3.125.188-3.125.188-6 0l-1-2h4l-1.938-2.25c-1.845-2.461-2.623-3.785-3.062-6.75 2.52-1.26 3.854-.919 6.625-.563Z"
      />
      <path
        fill="#33241C"
        d="M80 183h2v3l6-1v6c-6.017 3.008-14.547 2.32-21 1v-6h2v3l9-2v-2h2v-2Z"
      />
      <path
        fill="#6D4B3F"
        d="m122 27 2 1-1 7c-2.822.599-5.49 1.036-8.375 1.25-4.37.904-7.433 2.63-10.625 5.75l-1 3-5 1c.665-4.389 2.188-7.981 4-12l-2-1a287.503 287.503 0 0 1 3.75-2.5l2.11-1.406C108 28 108 28 112 28v2c-3 2-3 2-6 2v2l-2 1v3l3.438-2c4.586-2.33 8.51-2.421 13.562-2l-1-3c.938-2.188.938-2.188 2-4Z"
      />
      <path
        fill="#3C3229"
        d="M108 75c.563 1.938.563 1.938 1 4l-1 1c-.537 3.063-.966 6.136-1.402 9.215C106 92 106 92 104 94c-2.063-.25-2.063-.25-4-1l-1-2-2 1-2-3c-2.525-2.525-4.735-3.043-8.125-4.125l-3.32-1.07L81 83v-2l1.863.254 2.45.308 2.425.317c2.43.269 2.43.269 5.262-.879v2l5-2c2.96 3.364 3.923 6.692 5 11l.586-2.703.789-3.547.773-3.516c.71-2.695 1.483-4.83 2.852-7.234Z"
      />
      <path
        fill="#563B30"
        d="M94 122c3.935 5.903 3.124 13.136 3 20h-4l-1-17h-2l-1 3-5-1v-5c3.76-1.254 6.154-.839 10 0Z"
      />
      <path
        fill="#735143"
        d="M91.25 194.875 93 197l3 1v2c-1.624.195-3.25.38-4.875.563l-2.742.316C86 201 86 201 84 200c-3.5-.25-3.5-.25-7 0l-2 2-2-1-1 3-2-1v-3h4l1-5c1.454.03 1.454.03 2.938.063 2.937.293 2.937.293 4.062-1.063 6.335-1.554 6.335-1.554 9.25.875Z"
      />
      <path fill="#80675D" d="M102 58h5l-1 2h-2v2l17-1v5h-11v4l-8-4v-8Z" />
      <path
        fill="#61443C"
        d="m112 184 3 1v4l1-2 6 1v2h5v1l-2.082-.07-2.73-.055-2.708-.07c-2.734.012-2.734.012-5.48 2.195l-1 3 2 1h-4v-2h-11l1-2a69.934 69.934 0 0 1 4.438-1.25c2.443-.684 2.443-.684 4.562-1.75 1.68-3.029 1.68-3.029 2-6Zm3 11h3c2.125 6.75 2.125 6.75 1 9l-6-1 3-2c.73-2.563.73-2.563 1-5l-2-1Z"
      />
      <path
        fill="#2B2A2A"
        d="M16 110h4v2l3 1-1 1 3 1 1-3v2c6.312 1.767 12.492 2.114 19 2-6.529 3.766-15.91 4.335-23.16 2.434-3.15-1.278-5.692-2.78-7.84-5.434 1-2 1-2 2-3Z"
      />
      <path
        fill="#323132"
        d="m180 106 1 4-3 1-2 10-7-1 1 11c-5.625 0-5.625 0-8.813-3l-1.832-1.688L158 125c3.01-.934 3.867-1.044 7 0v2h2l-1.063-2.313C165 122 165 122 166 119c3.058-.544 5.888-1 9-1l.332-1.715.48-2.222.458-2.215L177 110l3-1v-3Z"
      />
      <path
        fill="#55443D"
        d="m78 22 2 1v3h3v3l-5 1v8h4l1 7c-2.962-.613-4.38-1.254-7-3a65.357 65.357 0 0 1-.688-7.625l-.103-2.14c-.083-1.745-.147-3.49-.209-5.235l-3 1c1.015-2.536 1.685-3.794 4-5.313L78 22Z"
      />
      <path
        fill="#2D2D2F"
        d="m53 50 1 3c-1.75 2.688-1.75 2.688-4 5h-3v2l2 1c-2.647 1.46-3.894 2-7 2v2a742.324 742.324 0 0 1-6 4 139.281 139.281 0 0 0-5 5l-3-1c3.03-3.333 6.118-5.815 9.875-8.313 4.22-2.874 7.436-5.939 10.652-9.89C49.931 53.085 51.41 51.538 53 50ZM27 74l2 2c-2.411 4.42-5.373 8.494-9 12h-2c1.143-2.805 2.292-4.285 4.5-6.438C24.952 79.05 25.962 77.305 27 74Z"
      />
      <path
        fill="#332B27"
        d="M80 51h4l.188 1.875L85 55l2.438.875C90 57 90 57 91.311 60.125L92 63l-4-4-3 1v-2l-1.688 1.063C80.404 60.242 78.99 59.822 76 59l-2.313-.563L72 58v-4l3.438-.375L79 53l1-2Z"
      />
      <path
        fill="#564339"
        d="m91 20 2 1-2 2c-.042 2.333-.04 4.667 0 7l-1 3h2l1-3h3v2h-2a292.931 292.931 0 0 0-.125 4.375l-.07 2.46C93.786 41.214 93.786 41.214 96 43l-1 3h-3l-.875-2.438C90.267 40.867 90.267 40.867 88 40c-.081-2.584-.14-5.165-.188-7.75l-.076-2.21c-.046-3.385.01-5.619 1.776-8.556L91 20Z"
      />
      <path
        fill="#664534"
        d="M111 22v2l-9 3v2h-4v5l2 1-4 7-3-1 1-9h2v-2l-2-1c3.786-5.678 10.383-7 17-7Z"
      />
      <path
        fill="#362E28"
        d="M112 79c1.875.125 1.875.125 4 1 2.882 5.24 1.569 9.57 0 15l-4 1c-2.496-3.744-2.447-7.66-2-12 1-3 1-3 2-5Z"
      />
      <path
        fill="#524238"
        d="M112 67h4v2l3 1h-3v4l-8-1 .125 2.188c-.136 3.068-.979 4.98-2.125 7.812-.381 2.326-.725 4.66-1 7h-1l-1-16h-2l-1-4 5 2 1-3 8 3-2-5Z"
      />
      <path
        fill="#624436"
        d="M88 193v1c-8.429 2.429-8.429 2.429-13 1l-1 5-1.938.313L70 201l-1 3h-3v-6l-4-2c8.652-3.494 16.848-3.307 26-3Z"
      />
      <path
        fill="#434343"
        d="M180 87c2.35 3.76 2.575 7.695 3 12l.352 2.637.335 2.675.325 2.489C184 109 184 109 182 112h-2l.063-2.75c.068-3.056.068-3.056-.567-5.168-.548-2.3-.56-4.285-.496-6.644.08-2.942-.049-4.585-1-7.438l2-3Z"
      />
      <path
        fill="#37322C"
        d="M152 61h2c4.795 10.64 4.795 10.64 4 17l-2 2c-2.125-.375-2.125-.375-4-1l.254-1.898.309-2.477.316-2.46c.303-2.214.303-2.214-.879-4.165-.04-2.333-.043-4.667 0-7Z"
      />
      <path
        fill="#634136"
        d="m84 199 2 1v2l3 1v1H79v2h-5l-1-5c3.638-2.328 6.76-2.236 11-2Z"
      />
      <path
        fill="#282824"
        d="m72 112 1 9 3 1v8c-1.938-.938-1.938-.938-4-3-.662-2.986-.872-5.949-1-9h-1l-1 6h-1l-1-10-4-1c3.073-.91 5.801-1.089 9-1Z"
      />
      <path
        fill="#303031"
        d="M160 52c1.942 1.942 2.639 3.178 3.75 5.625 1.908 3.946 4.276 7.274 6.98 10.71C172 70 172 70 173 72l-1 3 1 2-5-2 2-1v-2h-2l-.75-2.25c-1.09-2.823-1.09-2.823-3.25-4.75-3.182-3.182-3.957-5.854-4.125-10.313L160 52Z"
      />
      <path
        fill="#1D1E1E"
        d="m54 108 1 2h3v8h-1v-6l-3.438 2c-4.586 2.33-8.51 2.421-13.562 2l1.953-.383L44 115l.75-1.875c2.02-3.434 5.574-3.997 9.25-5.125Z"
      />
      <path
        fill="#433A30"
        d="M80 175h2l1 6h2v5h-3v-3h-2v2c-4.625 2.125-4.625 2.125-8 1l2.875-2.125c3.124-2.571 4.199-4.892 5.125-8.875Z"
      />
      <path
        fill="#685549"
        d="M98 70h2l1 4h2c1.067 3.462 1.102 6.64 1.063 10.25l-.028 3.266L104 90c-2.195-2.195-2.608-3.457-3.5-6.375-.735-2.388-1.45-4.53-2.617-6.742-1.207-2.575-.626-4.207.117-6.883Z"
      />
      <path
        fill="#262019"
        d="M82 83c4.112 1.129 8.064 2.36 12 4l3 1 4 5 3 1v2h-4l-1-2-1.938-.938C95 92 95 92 93 89l-3-1-1 2v-2h-3v-2h-5l1-3Z"
      />
      <path
        fill="#885A46"
        d="m109 24 1 2h3l-1 4v-2c-4.572 1.6-8.211 2.94-12 6h-2v-5h4v-2l7-3Zm1 6 2 1h-3l1-1Z"
      />
      <path
        fill="#60524F"
        d="m66 205 3.813-.125 2.144-.07C74 205 74 205 77 207h-2l-1 4c-3.053.981-4.947.981-8 0v-6Z"
      />
      <path
        fill="#664F48"
        d="m140 188 1.438 1.75c2.983 2.62 5.866 3.801 9.539 5.223C153 196 153 196 155 199h-3a103.73 103.73 0 0 0-5 2l-1.375-2.938c-1.283-3.133-1.283-3.133-3.625-4.062v-2l-3-1 1-3Z"
      />
      <path
        fill="#332921"
        d="M142.313 36.563 145 38c0 4 0 4-2 7v-5h-2l-1-2c-2.527-.656-2.527-.656-5-1l-1 3-5-2v-2c5.312-2.58 8.067-1.912 13.313.563Z"
      />
      <path
        fill="#433531"
        d="m76 26 1 17h-2v-6h-5l.5-2.25c.62-2.94.62-2.94.5-6.75 3.875-2 3.875-2 5-2Z"
      />
      <path
        fill="#0F0D0F"
        d="m144 164 2 1-2 7h-2l-.375 1.75c-.646 2.324-1.352 4.2-2.625 6.25l-3 1 .5-3.313c.567-3.562.567-3.562.5-6.687a374.925 374.925 0 0 1 6-4l1-3Z"
      />
      <path
        fill="#583D35"
        d="M122 25c2.463 1.827 3.834 3.23 4.488 6.27.237 2.245.416 4.475.512 6.73l-2 1-2-1c-2.037-.229-4.08-.41-6.125-.563l-3.32-.253L111 37c3.089-2.06 3.71-2.239 7.188-2.125L122 35c.938-5.05.938-5.05 0-10Z"
      />
      <path
        fill="#141217"
        d="M99 5c5.625-.25 5.625-.25 9 2 1.988.702 3.987 1.374 6 2l-1.938.375L110 10l-1 2-9-2-1-5Z"
      />
      <path
        fill="#4E372C"
        d="M66 186h1v6h23c-2 2-2 2-5.414 2.16a360.043 360.043 0 0 1-4.211-.097c-5.569-.09-10.864.019-16.375.937l2-9Z"
      />
      <path
        fill="#5C4B42"
        d="M121 64h1v5h-6v-2l-3 1 1 4c-6.523-.492-6.523-.492-8.938-3.063L104 67l6 3v-4h11v-2Z"
      />
      <path
        fill="#432923"
        d="M123 37v1l-2.738.113-3.575.2-3.55.175c-3.086.265-3.086.265-5.012 1.856-1.639 2.413-1.807 4.798-2.125 7.656h2l1-3v4l-7-1c.18-3.867.823-5.768 3.188-8.875C110.12 35.313 117.136 36.639 123 37Z"
      />
      <path
        fill="#3F2B27"
        d="M138 182h2c.027 1.48.046 2.958.063 4.438l.035 2.496C140 191 140 191 139 192c-5.894.376-11.263-.707-17-2v-1l15 1-1-4c.938-2.25.938-2.25 2-4Z"
      />
      <path
        fill="#624E44"
        d="m112 184 3 1v4l1-2 6 1v2h5v1l-2.082-.07-2.73-.055-2.708-.07c-2.734.012-2.734.012-5.48 2.195l-2 3v-3l-2-1 4-4h-2v-4Z"
      />
      <path
        fill="#141312"
        d="m96 10-1 3h-2v2a212.95 212.95 0 0 1-4.398 3.625C86.408 20.508 84.719 22.686 83 25c-.403-3.523-.134-4.8 1.875-7.813L87 15h2v-3c3-2 3-2 7-2Z"
      />
      <path
        fill="#906A63"
        d="M102 58h5l-1 2h-2v2h13l-1 3c-1.417.027-2.833.047-4.25.063l-2.39.035c-2.267-.094-4.189-.466-6.36-1.098l-1-6Z"
      />
      <path fill="#885D49" d="m103 17 5 1v2h4v2l6-1v3h-7v-2l-11 1 4-4-1-2Z" />
      <path
        fill="#403634"
        d="M88 180h8v2l4 1c-3.478 1.16-5.459.708-9 0l-1 8-4 1 2-1v-11Z"
      />
      <path fill="#4D4137" d="M112 67h4v2l3 1h-3v4l-8-1-1 2-3-1 1-5 9 3-2-5Z" />
      <path
        fill="#54352E"
        d="M117 196v5l-3.375.875c-3.628.817-3.628.817-5.625 3.125-.2-3.716-.152-4.772 2-8 2.407-.662 4.507-1 7-1Z"
      />
      <path
        fill="#312C27"
        d="m126 165 2 1v2h-2v-3Zm-2 3h2c.8 3.287 1.097 4.71 0 8v4l-3-1v-5l-2 3-2-1c.783-1.339 1.577-2.67 2.375-4 .44-.743.882-1.485 1.336-2.25L124 168Z"
      />
      <path
        fill="#3F3E40"
        d="M168 120h1l1 11c-5.625 0-5.625 0-8.813-3l-1.832-1.688L158 125c3.01-.934 3.867-1.044 7 0l2 3c1.354-2.709 1.065-5.01 1-8Z"
      />
      <path fill="#0F0C08" d="m86 42 3 1 1 3 2 1v5l-6 2V42Z" />
      <path
        fill="#433D3D"
        d="m138 25 1 2 2.625.75C148.727 30.38 152.783 35.31 156 42v2h-2c-3-5.75-3-5.75-3-8l-1.813-.813C147 34 147 34 145.5 32.376c-1.652-1.825-1.652-1.825-5.5-1.375-2-3-2-3-2-6Z"
      />
      <path
        fill="#4B4A4C"
        d="m183 109 2 1c.625 2.563.625 2.563 1 5-3.75 1.125-3.75 1.125-6 0v3l-3 1 1-8h4l1-2Z"
      />
      <path
        fill="#27201A"
        d="m76 48 1 2h9l1 2-1 2h3v2l-5-1v-4h-4l-1 3h-5l2-6Z"
      />
      <path
        fill="#3A3026"
        d="M126 20h1v6h7v3l2 1h-5v2c-3.875-1.875-3.875-1.875-5-3a74.456 74.456 0 0 1-.063-4.563l.028-2.503L126 20Z"
      />
      <path
        fill="#353234"
        d="m91 9 2 1-4 2v3h-2l-.875 1.875C85 19 85 19 83 21c-.648 2.57-.648 2.57-1 5h-2c-.73-1.684-.73-1.684-1-4 1.512-2.473 1.512-2.473 3.688-5.063l2.136-2.597A35.84 35.84 0 0 1 91 9Z"
      />
      <path
        fill="#271C12"
        d="M88 185v5l-10 1c2-4 2-4 4.438-5.25C85 185 85 185 88 185Z"
      />
      <path
        fill="#432B22"
        d="M90 125h2c.832 5.72 1.12 11.222 1 17h3v2h-4v-6h-2v-13Z"
      />
      <path
        fill="#5C473E"
        d="m100 16 1 2h2v2l-5 1v-2c-2.581 1.731-2.581 1.731-5 4v4l-2 1c-.813-2.188-.813-2.188-1-5 2.881-3.644 5.579-5.61 10-7Z"
      />
      <path
        fill="#5D463E"
        d="m90 188 5 5 1.75 1.563c1.515 1.742 1.862 3.186 2.25 5.437h-3v-2l-1.813-.125C92 197 92 197 90.188 194.125 89 191 89 191 90 188Z"
      />
      <path
        fill="#363535"
        d="m16 87 1 2a158.623 158.623 0 0 1-3 5v2h2v2l-3 2-2 2c-1.25-2.063-1.25-2.063-2-5 1.046-2.61 2.426-4.64 4-7h2l1-3Z"
      />
      <path
        fill="#6E574D"
        d="M115 48c2.375.25 2.375.25 5 1 2.195 3.204 2.216 5.942 2.125 9.75l-.055 2.984L122 64l-1-4h-3v-2h3c-.195-1.95-.195-1.95-1-4-1.984-1.284-1.984-1.284-4-2l1-1-2-1v-2Z"
      />
      <path
        fill="#3A3125"
        d="M92 63c1.938.375 1.938.375 4 1l1 2h4c2.25 1 2.25 1 4 2v4c-2.867-.573-3.861-.861-6-3-1.65-.707-3.316-1.38-5-2v-2h-2v-2Z"
      />
      <path
        fill="#38271D"
        d="M83 27c1 3 1 3 .063 5.188L82 34h2l-1 4v-3h-2v2h-3v-7l5-1v-2Z"
      />
      <path fill="#715341" d="M97 29h1v5l2 1-4 7-3-1 1-7 3-1v-4Z" />
      <path
        fill="#3E2E25"
        d="m111.75 12.438 2.113.158c1.713.129 3.425.266 5.137.404v1l-2.563.113C109.636 14.507 104.27 15.397 98 18l-2-1 3-1 1-3c3.688-1.67 7.822-.885 11.75-.563Z"
      />
      <path
        fill="#6D4B3E"
        d="M96 200v2h2v2c-1.437.081-2.874.14-4.313.188l-2.425.105c-2.74-.355-3.554-1.187-5.262-3.293 3.473-1.158 6.36-1.069 10-1Z"
      />
      <path fill="#805849" d="M86 195c3.719.507 6.735 1.116 10 3v2h-9l-1-5Z" />
      <path
        fill="#353434"
        d="m58 155 2 1a220.523 220.523 0 0 1 2 7l1 1c.233 1.682.413 3.371.563 5.063l.253 2.785L64 174h-2c-.671-2.603-1.337-5.207-2-7.813l-.578-2.236C58.647 160.895 58 158.166 58 155Z"
      />
      <path
        fill="#21211F"
        d="M17 86h1v8l4-1v2l-9 2c.607-4.128 2.038-7.332 4-11Z"
      />
      <path
        fill="#150B09"
        d="m80 116 2 1c.633 2.941.633 2.941 1.125 6.563l.508 3.628L84 130l-3 1c-1.442-2.884-1.094-5.417-1.063-8.625l.028-3.602L80 116Z"
      />
      <path
        fill="#27201B"
        d="M94 112h2c1.625 2.5 1.625 2.5 3 5l5-4v8l-2-1v-2l-5 1c-3-4.75-3-4.75-3-7Z"
      />
      <path
        fill="#44322A"
        d="M109 45h3v2l3.313-.625C119 46 119 46 122 48c.188 2.625.188 2.625 0 5l-1.176-1.984c-1.657-2.256-1.657-2.256-4.304-2.407l-2.707.141-2.731.11L109 49v-4Z"
      />
      <path
        fill="#1B0B07"
        d="m111 39 2 1-2 2 7 1v1l-9 1-1 3h-2c-.313-2.813-.313-2.813 0-6 2.375-1.938 2.375-1.938 5-3Z"
      />
      <path
        fill="#693C28"
        d="M112 28v2c-3 2-3 2-6 2v2l-4 2v-2l-2-1a287.503 287.503 0 0 1 3.75-2.5l2.11-1.406C108 28 108 28 112 28Z"
      />
      <path
        fill="#140F0C"
        d="M88 140h3v5h5c-2.762 2.762-5.207 2.579-9 3l-1 4v-6h2l2-5-2-1Z"
      />
      <path
        fill="#362D24"
        d="m80 67 2 1-3 10c-3-3-3-3-3.438-5.5C76 70 76 70 78 68.187L80 67Z"
      />
      <path
        fill="#3D332D"
        d="M134 40c2 1.188 2 1.188 4 3 .25 2.688.25 2.688 0 5-4.833-.414-6.827-2.464-10-6 4.75 1.875 4.75 1.875 7 3l-1-5Z"
      />
      <path
        fill="#574138"
        d="M106 14h15c.733 3.666 1.104 6.367 1 10l-2-1c-.594-2.649-.742-5.292-1-8h-13v-1Z"
      />
      <path fill="#563D35" d="m80 200-1 6h-5l-1-5c4.75-1 4.75-1 7-1Z" />
      <path fill="#534A45" d="m154 199 3 1 1 7-5 2-1-3h4v-3l-3-1 1-3Z" />
      <path
        fill="#5A3E36"
        d="m127 191 15 1v2l3 1c-3.72 1.378-5.43.507-9-1-2.983-.748-5.987-1.383-9-2v-1Z"
      />
      <path fill="#2D211C" d="M105 128h1v6h-2v7l-6 1v-4l5 1v-6h2v-5Z" />
      <path
        fill="#484343"
        d="m8 100 2 1v2l3 1 2 10h-2c-1.354-2.709-1.065-5.01-1-8l-4-2v-4Z"
      />
      <path
        fill="#7A5A49"
        d="m114 50-2 6-4-1 1-3h-7v-1c4.041-.634 7.907-1.124 12-1Z"
      />
      <path
        fill="#8B6657"
        d="m114 50 4 1-.5 1.813c-.611 2.3-.611 2.3-.5 5.187l-5-1c.875-4.75.875-4.75 2-7Z"
      />
      <path
        fill="#52494A"
        d="m137 16 1 2-4-1v3h-5l-1-4c3.31-1.103 5.655-.994 9 0Z"
      />
      <path
        fill="#695348"
        d="m62 193 2 1-1 5h-2v2h-5c1.443-3.366 3.333-5.51 6-8Z"
      />
      <path fill="#221B15" d="m73 180-2 6h-5l-1-3c4.625-3 4.625-3 8-3Z" />
      <path
        fill="#333131"
        d="M16 110h4l1 7c-3.27-.564-4.826-1.5-7-4 1-2 1-2 2-3Z"
      />
      <path
        fill="#343333"
        d="m68 37 2 1a105.022 105.022 0 0 1-4 5h-2v2c-1.813 1.688-1.813 1.688-4 3l-3-1 2.688-2.188C62.638 42.36 65.328 39.752 68 37Z"
      />
      <path
        fill="#323132"
        d="M146 166h2c-1.57 4.315-3.698 8.044-6 12a169.854 169.854 0 0 0-2 4c-.18-3.947-.094-6.598 2-10h2l.438-2.438C145 167 145 167 146 166Z"
      />
      <path
        fill="#453C37"
        d="M114 81h1c.08 1.624.14 3.25.188 4.875l.105 2.742L115 91l-3 2a280.282 280.282 0 0 1-.125-4.313l-.07-2.425C112 84 112 84 114 81Z"
      />
      <path
        fill="#523A33"
        d="m102 194 9 1-1 3c-1.938.75-1.938.75-4 1l-2-1v-3l-2-1Z"
      />
      <path fill="#4E423B" d="M76 89h4v2l3 1-2 3-4-1-1-5Z" />
      <path
        fill="#241914"
        d="M86 20c1.078 3.227.949 4.981-.313 8.125l-.8 2.07C84 32 84 32 82 34l.563-3.438L83 27l-1-1a99.984 99.984 0 0 1 0-5l2 2 2-3Z"
      />
      <path fill="#16110F" d="M135 19h1v7l-8-1 1-3h5l1-3Z" />
      <path fill="#1A100E" d="m115 11 8 1v2h3v4h-2v-2l-9-3v-2Z" />
      <path
        fill="#232323"
        d="M151 156c.688 1.625.688 1.625 1 4-1.438 3.25-1.438 3.25-3 6h-2c-.412-3.603-.154-4.784 2-7.813l2-2.187Z"
      />
      <path
        fill="#62483A"
        d="m87 121 2 2c-.375 2.625-.375 2.625-1 5l-4-1v-5l3-1Z"
      />
      <path
        fill="#693C28"
        d="M111 22v2c-6.4 3.077-6.4 3.077-9.438 2.688L100 26c1-2 1-2 3.813-3.125C107 22 107 22 111 22Z"
      />
      <path fill="#473D37" d="M152 203h4v3l-3 1v2l-6-1c1-2 1-2 4-3l1-2Z" />
      <path fill="#332D25" d="M122 53h1v14l3-1-1 4h-3V53Z" />
      <path fill="#7A4C45" d="M114 59v3h-10v-2c3.38-1.04 6.478-1.08 10-1Z" />
      <path fill="#423834" d="M141 32h3l4 7h-3l-2-4h-3l1-3Z" />
      <path
        fill="#604A45"
        d="m149 201 2 1v5l-7 1c1.293-2.884 2.66-4.872 5-7Z"
      />
      <path
        fill="#6F5E59"
        d="M112 188h2c-.914 2.284-1.618 3.72-3.625 5.188-3.428 1.172-6.77 1.452-10.375 1.812 1-2 1-2 2.996-2.781l2.442-.719c3.656-1.073 3.656-1.073 6.562-3.5Z"
      />
      <path
        fill="#242422"
        d="m66 169 2 2c-.255 4.585-.86 7.587-4 11v-8h1l1-5Z"
      />
      <path
        fill="#443D35"
        d="M123 173h1c.313 2.813.313 2.813 0 6-2.375 1.938-2.375 1.938-5 3l-2-1a962.085 962.085 0 0 1 2.938-4l1.652-2.25L123 173Z"
      />
      <path
        fill="#47362F"
        d="m91 20 2 1-2 2 .063 3.438C91 30 91 30 89.496 31.723L88 33c-.473-8.193-.473-8.193 1.5-11.563L91 20Z"
      />
      <path
        fill="#76635D"
        d="M66 206h7c-2.462 3.815-2.462 3.815-5.188 4.75L66 211v-5Z"
      />
      <path fill="#735B4D" d="m137 200 4 2-1 5-1-2h-3v-2l-2-1 3-2Z" />
      <path fill="#5A3E31" d="m116 187 6 1v2h5v1h-12l1-4Z" />
      <path
        fill="#0E0D0C"
        d="M61 154h1c2.271 5.395 2.204 10.262 2 16h-1c-1.868-5.487-2.236-10.222-2-16Z"
      />
      <path
        fill="#1E1E20"
        d="M165 120c1.46 2.647 2 3.894 2 7h-2v-2l-7-1 1-2c1.658-.373 3.326-.707 5-1l1-1Z"
      />
      <path
        fill="#23201D"
        d="M146 111h1c.08 2.124.14 4.25.188 6.375l.105 3.586L147 124l-3 2c-.194-5.527.252-9.756 2-15Z"
      />
      <path fill="#342014" d="M105 42h1v6h2l1-3v4l-7-1v-3h2l1-3Z" />
      <path fill="#1F1C18" d="m93 14 2 1-1 4-7 1c3.75-4.875 3.75-4.875 6-6Z" />
      <path fill="#54423F" d="m143 202 1 2 2 1-2 4-4-1v-4h3v-2Z" />
      <path
        fill="#614C43"
        d="M125 201c4.219-.196 7.17.198 11 2l-1 2-8-1v-2l-2-1Z"
      />
      <path
        fill="#2B2A2C"
        d="m172 119-3 1 .125 3.375C169 127 169 127 167 129c-2.125-6.625-2.125-6.625-1-10 2.49-1.245 3.41-.777 6 0Z"
      />
      <path
        fill="#64574C"
        d="m110 66 1 3h3v3c-6.523-.492-6.523-.492-8.938-3.063L104 67l6 3v-4Z"
      />
      <path fill="#583929" d="M140 198h4v2h2l1 4h-3v-2h-2v-2h-2v-2Z" />
      <path
        fill="#34342F"
        d="M68 113h3l-.438 2.125c-.577 2.95-1.079 5.908-1.562 8.875h-1c-.194-1.645-.38-3.291-.563-4.938l-.316-2.777L67 114l1-1Z"
      />
      <path fill="#3D3730" d="M157 71h1v7l-4 2c.557-3.344 1.352-6.033 3-9Z" />
      <path
        fill="#251E18"
        d="M138 43h1c.366 3.938.302 5.565-2 8.875L135 54c-1-1-1-1-1.063-3.563L134 48h4v-5Z"
      />
      <path fill="#78584B" d="m100 195 1 7-3 1-2-1v-2l2-1-1-3c2-1 2-1 3-1Z" />
      <path fill="#443A2F" d="m105 69 6 2v2h-3l-1 2-3-1 1-5Z" />
      <path fill="#55463F" d="M130 40h4l2 3-1 3c-2.5-1.313-2.5-1.313-5-3v-3Z" />
      <path
        fill="#502E20"
        d="M100 34h2c-.75 4.75-.75 4.75-3 7l-3-2a105.022 105.022 0 0 1 4-5Z"
      />
      <path fill="#815E4E" d="m98 29 6 1a90.488 90.488 0 0 1-4 4h-2v-5Z" />
      <path
        fill="#745A4F"
        d="M93 26h3a56.54 56.54 0 0 1-4 7h-2c.75-4.75.75-4.75 3-7Z"
      />
      <path fill="#69493D" d="m131 193 9 1-2 1v2c-3.619-.624-4.17-1.17-7-4Z" />
      <path fill="#3C3637" d="M138 182h2v8l-4-2 2-6Z" />
      <path fill="#4D4B4E" d="m169 120 7 1c-1 2-1 2-4.063 3.125L169 125v-5Z" />
      <path fill="#3F372C" d="M130 26h4v3l2 1h-5l-1 2v-6Z" />
      <path fill="#462F28" d="M100 195h4v3h2v2l-5-1-1-4Z" />
      <path fill="#402F2A" d="M66 186h1v6l2 1h-2v2h-3l2-9Z" />
      <path
        fill="#3A2C22"
        d="m120 180 3 1-2 3c.308 2.153.308 2.153 1 4l-3-1c-.813-1.875-.813-1.875-1-4l2-3Z"
      />
      <path fill="#363638" d="m158 124 7 1v4c-2.884-1.293-4.872-2.66-7-5Z" />
      <path fill="#A2746F" d="m117 62-1 3-8-1c3.435-2.29 4.985-2.178 9-2Z" />
      <path fill="#2A1B17" d="M109 44h9l1 2-7 1v-2l-3-1Z" />
      <path
        fill="#655147"
        d="M77 39c2.622 1.049 3.794 1.65 5.25 4.125L83 45c-2.169-.506-4-1-6-2v-4Z"
      />
      <path
        fill="#765245"
        d="m120 23 2 1c.08 3.522.04 6.62-1 10l-4-1 1.5-1.625c1.875-2.969 1.735-4.928 1.5-8.375Z"
      />
      <path fill="#694D41" d="m100 16 1 2h2v2l-5 1v-2l-2-1 4-2Z" />
      <path
        fill="#684D49"
        d="M109 199h4v3l-3 1-2 2a99.984 99.984 0 0 1 0-5l1-1Z"
      />
      <path fill="#2D261E" d="m84 177 2 4h2v4h-3l-1-8Z" />
      <path
        fill="#261D19"
        d="m116 174 2 3c-.75 1.938-.75 1.938-2 4-2.125.75-2.125.75-4 1l2-1c.6-1.902.6-1.902 1-4l1-3Z"
      />
      <path
        fill="#120B0A"
        d="m93 174 2 1c.625 2.063.625 2.063 1 4h-7l2-1c1.134-2.017 1.134-2.017 2-4Z"
      />
      <path fill="#45342A" d="m83 126 5 2-1 7c-2.686-2.686-3.06-5.376-4-9Z" />
      <path
        fill="#3F3D41"
        d="M172 72c5.785 3.446 5.785 3.446 6.875 6.25L179 80l-2.313-1.938c-2.57-2.204-2.57-2.204-5.687-3.062l1-3Z"
      />
      <path
        fill="#0F0F0E"
        d="m64 47-1 3c-3.563 1.188-3.563 1.188-7 2v-3c5.75-2 5.75-2 8-2Z"
      />
      <path
        fill="#262623"
        d="m61 120 1 2-1 3 3 1-3 3c-1-1-1-1-1.125-4.5C60 121 60 121 61 120Z"
      />
      <path fill="#5C4F41" d="M89 64h3v5l2 1-4 1-1-7Z" />
      <path fill="#39332C" d="M72 54h5l-2 4h-3v-4Z" />
      <path
        fill="#212123"
        d="m55 48 2 1-1 2 2 1v2l-4 1c-.043-2-.04-4 0-6l1-1Z"
      />
      <path fill="#211009" d="m75 45 5 1 1 3-6-1v-3Z" />
      <path
        fill="#654F3E"
        d="M94 34c1.563 1.75 1.563 1.75 3 4-.313 2.25-.313 2.25-1 4l-3-1 1-7Z"
      />
      <path
        fill="#8F6554"
        d="M106.563 33.938 109 34l-5 5c-.563-1.938-.563-1.938-1-4 1-1 1-1 3.563-1.063Z"
      />
      <path
        fill="#54382B"
        d="M93 30h3v2h-2l-.375 1.938L93 36l-2 1c.875-5.875.875-5.875 2-7Z"
      />
      <path fill="#2D231C" d="m136 24 .313 1.938L137 28l3 1-1 2-5-2v-3h2v-2Z" />
      <path
        fill="#282626"
        d="M118 9c5.75 1.625 5.75 1.625 8 5-3.375-.547-5.082-1.055-8-3V9Z"
      />
    </svg>
  );
};
