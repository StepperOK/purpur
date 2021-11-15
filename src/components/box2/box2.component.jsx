import React from "react";
import "./box2.style.scss";

import path from "../../image/path1.svg";

import useWebAnimations, { flip } from "@wellyshen/use-web-animations";

const Box2 = () => {
  const { keyframes, timing } = flip;
  const { ref, getAnimation } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 0,
      iterations: 1,
      duration: timing.duration * 2,
    },
  });
  return (
    <div className="box">
      <div className="info">
        <h1>Второй блок</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus, hic, ratione nihil mollitia distinctio porro consectetur ut explicabo eum exercitationem dolorum enim iusto dolore, quas odit officiis iste asperiores!
        </p>

        <button className="readMore">Подробнее</button>
      </div>
      <div
        ref={ref}
        onMouseEnter={() => getAnimation().play()}
        className="laptopImage"
        dangerouslySetInnerHTML={{
          __html: `<svg width="504" height="501" viewBox="0 0 504 501" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="3 1" clip-path="url(#clip0)">
          <path id="Vector" opacity="0.18" d="M36.4645 393.294C36.4645 393.294 -17.5097 326.728 -1.32114 256.272C14.8675 185.816 58.4898 185.757 129.521 119.736C200.553 53.7147 219.238 -12.3506 330.123 -3.34836C441.008 5.65385 514.536 232.197 497.099 293.71C479.662 355.222 464.697 401.736 464.697 401.736L36.4645 393.294Z" fill="#F607FB"/>
          <path id="Vector_2" d="M200.173 77.1007H14.1696C9.70262 77.1007 6.08142 81.461 6.08142 86.8396V239.803C6.08142 245.182 9.70262 249.542 14.1696 249.542H200.173C204.64 249.542 208.261 245.182 208.261 239.803V86.8396C208.261 81.461 204.64 77.1007 200.173 77.1007Z" fill="white"/>
          <path id="Vector_3" opacity="0.52" d="M200.173 77.1007H14.1696C9.70262 77.1007 6.08142 81.461 6.08142 86.8396V239.803C6.08142 245.182 9.70262 249.542 14.1696 249.542H200.173C204.64 249.542 208.261 245.182 208.261 239.803V86.8396C208.261 81.461 204.64 77.1007 200.173 77.1007Z" fill="#CA35E2"/>
          <path id="Vector_4" d="M498.261 385.474H31.3738V397.482H498.261V385.474Z" fill="#13139B"/>
          <path id="Vector_5" d="M485.658 397.482H40.8202V501H485.658V397.482Z" fill="url(#paint00_linear)"/>
          <path id="Vector_6" opacity="0.23" d="M485.658 397.482H40.8202V422.234H485.658V397.482Z" fill="url(#paint11_linear)"/>
          <path id="Vector_7" d="M184.951 385.4H78.4101L83.4025 355.388H181.831L184.951 385.4Z" fill="#8686F8"/>
          <path id="Vector_8" opacity="0.52" d="M184.743 385.4H84.4303L89.1291 355.388H181.807L184.743 385.4Z" fill="url(#paint22_angular)"/>
          <path id="Vector_9" d="M183.385 347.771C183.385 347.771 185.575 272.762 198.069 265.263C210.562 257.764 261.93 260.755 273.138 264.512C284.347 268.269 293.316 321.796 296.191 330.15C301.49 345.517 321.423 354.151 321.423 354.151L319.55 385.651L201.189 384.914C201.189 384.914 187.129 381.526 183.385 347.771Z" fill="url(#paint33_linear)"/>
          <path id="Vector_10" d="M219.507 262.39C218.727 263.809 218.421 265.529 218.65 267.208C219.067 271.913 220.673 276.351 223.251 279.923C225.83 283.464 228.944 286.384 232.428 288.527C233.529 285.256 234.41 279.54 236.699 278.538C239.15 277.862 241.629 277.341 244.126 276.976C244.273 276.74 237.347 275.503 237.115 275.385C232.783 274.103 229.712 270.862 226.763 266.825C226.019 265.889 225.381 264.838 224.866 263.701C224.266 262.228 224.78 260.239 223.067 260.43C222.396 260.459 221.736 260.647 221.125 260.984C220.514 261.32 219.964 261.798 219.507 262.39V262.39Z" fill="url(#paint44_linear)"/>
          <path id="Vector_11" d="M254.429 282.03C254.784 282.531 255.31 283.091 255.799 282.811C255.969 282.684 256.108 282.507 256.203 282.295C257.317 280.056 257.684 277.392 257.231 274.84C256.78 272.304 255.995 269.872 254.906 267.635C253.991 265.467 252.853 263.447 251.517 261.624C250.88 260.813 249.804 260.033 249.069 260.755C248.784 261.105 248.596 261.552 248.531 262.036C247.98 264.644 242.804 274.619 244.101 276.976C244.603 277.904 249.999 277.315 250.905 278.052C252.223 279.18 253.409 280.519 254.429 282.03V282.03Z" fill="url(#paint55_linear)"/>
          <path id="Vector_12" d="M228.145 235.766L224.328 263.849C224.328 263.849 232.893 278.965 243.734 276.711C254.576 274.457 250.587 268.077 250.587 268.077L249.265 244.253C249.265 244.253 240.688 246.713 228.145 235.766Z" fill="#F7AD7E"/>
          <g id="head">
          <path id="Vector_13" d="M264.085 209.814C263.912 205.758 257.105 203.838 256.07 200.794L266.465 200.524C266.465 200.524 267.396 217.006 262.359 224.94L261.351 221.793C262.771 214.162 264.468 219.254 264.085 209.814Z" fill="#984E45"/>
          <path id="Vector_14" opacity="0.52" d="M228.997 246.271L230.518 236.446C242.863 247.67 249.429 243.16 249.429 243.16L252.237 255.97C250.363 258.094 252.463 265.966 245.211 264.92C239.23 264.08 233.74 254.143 228.997 246.271Z" fill="url(#paint6_linear)"/>
          <path id="Vector_15" d="M221.081 215.84C221.721 231.446 234.493 259.258 247.457 258.427C260.42 257.597 264.724 225.479 264.084 209.873C263.444 194.268 256.335 185.238 243.335 186.053C240.253 186.253 237.232 187.183 234.445 188.788C231.658 190.394 229.16 192.644 227.093 195.411C225.026 198.177 223.432 201.405 222.4 204.911C221.368 208.416 220.92 212.13 221.081 215.84V215.84Z" fill="#F7AD7E"/>
          <path id="Vector_16" d="M232.317 186.205C233.117 185.972 233.375 185.227 234.384 184.232C238.308 180.341 243.754 179.696 248.612 180.438C260.744 182.315 263.361 192.704 266.595 191.155C269.83 189.606 275.556 195.864 271.456 202.728C267.357 209.593 260.851 211.334 253.031 206.532C248.018 203.473 241.05 200.974 235.392 202.558C234.944 202.609 234.51 202.772 234.117 203.038C233.725 203.303 233.382 203.664 233.113 204.098C232.297 205.937 232.611 209.584 232.624 211.618C232.744 216.589 233.158 221.543 233.865 226.441C233.216 226.5 232.752 225.723 232.471 225.01C231.779 223.314 231.31 221.491 230.679 219.783C229.931 217.85 228.529 214.783 226.495 216.3C225.984 216.753 225.554 217.324 225.229 217.98C224.904 218.636 224.691 219.363 224.603 220.119C223.969 223.435 224.324 228.232 226.582 230.626C228.396 232.538 228.872 236.1 229.264 238.805C229.396 239.663 230.078 241.918 229.795 242.693C229.281 244.067 227.595 243.882 226.741 243.023C225.79 241.794 225.188 240.233 225.022 238.563C223.495 230.628 221.226 222.93 218.258 215.615C217.511 213.958 216.898 212.217 216.429 210.417C215.722 206.399 216.04 202.215 217.34 198.412C218.326 194.458 220.227 190.922 222.821 188.219C225.733 185.498 228.16 185.965 231.423 186.229C231.72 186.277 232.022 186.269 232.317 186.205V186.205Z" fill="#984E45"/>
          </g>
          <path id="Vector_17" opacity="0.23" d="M234.166 383.411L236.038 354.151L216.105 350.777L209.864 309.891C209.864 309.891 232.918 335.395 252.3 334.717C271.682 334.039 274.105 324.963 274.105 324.963L277.776 382.734L234.166 383.411Z" fill="url(#paint7_linear)"/>
          <path id="tie" d="M237.947 278.037L240.541 283.297L244.383 287.422L251.235 377.444L264.524 376.943L248.017 286.42L249.987 277.58C249.987 277.58 241.679 276.298 237.947 278.037Z" fill="url(#paint88_linear)"/>
          <path id="hand" d="M231.877 364.906C231.877 364.906 248.494 348.905 254.307 350.894C260.119 352.884 266.359 360.398 266.775 362.902C267.191 365.407 264.328 369.4 260.951 369.901C257.574 370.402 253.891 373.908 251.823 372.848C249.755 371.787 244.762 372.848 242.682 375.794C240.602 378.741 231.045 382.793 231.045 382.793C231.045 382.793 224.817 372.405 231.877 364.906Z" fill="#F7AD7E"/>
          <g id="laptop">
          <path id="Vector_18" d="M240.859 385.769H362.071C365.471 385.769 368.226 382.451 368.226 378.358C368.226 374.265 365.471 370.947 362.071 370.947H240.859C237.46 370.947 234.704 374.265 234.704 378.358C234.704 382.451 237.46 385.769 240.859 385.769Z" fill="url(#paint9_linear)"/>
          <path id="Vector_19" d="M240.859 385.769H362.071C365.471 385.769 368.226 382.451 368.226 378.358C368.226 374.265 365.471 370.947 362.071 370.947H240.859C237.46 370.947 234.704 374.265 234.704 378.358C234.704 382.451 237.46 385.769 240.859 385.769Z" fill="url(#paint10_linear)"/>
          <path id="Vector_20" d="M287.785 371.551L289.804 379.419L375.886 385.769L400.42 310.849C400.747 309.851 400.866 308.772 400.768 307.706C400.67 306.64 400.357 305.619 399.856 304.732C399.356 303.845 398.683 303.118 397.896 302.615C397.109 302.112 396.233 301.848 395.342 301.846H322.352C318.817 301.849 315.364 303.131 312.442 305.527C309.52 307.924 307.264 311.323 305.968 315.283L287.785 371.551Z" fill="#5252FB"/>
          <path id="Vector_21" d="M287.785 371.551L289.804 379.419L375.886 385.769L400.42 310.849C400.747 309.851 400.866 308.772 400.768 307.706C400.67 306.64 400.357 305.619 399.856 304.732C399.356 303.845 398.683 303.118 397.896 302.615C397.109 302.112 396.233 301.848 395.342 301.846H322.352C318.817 301.849 315.364 303.131 312.442 305.527C309.52 307.924 307.264 311.323 305.968 315.283L287.785 371.551Z" fill="url(#paint11_linear)"/>
          <path id="Vector_22" d="M287.601 385.857H375.96L399.209 314.694C399.52 313.747 399.634 312.722 399.541 311.71C399.448 310.698 399.151 309.728 398.676 308.885C398.201 308.043 397.561 307.353 396.814 306.876C396.066 306.399 395.233 306.149 394.387 306.149H325.093C321.735 306.148 318.454 307.365 315.678 309.641C312.902 311.916 310.76 315.146 309.529 318.908L287.601 385.857Z" fill="url(#paint12_linear)"/>
          <path id="Vector_23" d="M287.601 385.857H375.96L399.209 314.694C399.52 313.747 399.634 312.722 399.541 311.71C399.448 310.698 399.151 309.728 398.676 308.885C398.201 308.043 397.561 307.353 396.814 306.876C396.066 306.399 395.233 306.149 394.387 306.149H325.093C321.735 306.148 318.454 307.365 315.678 309.641C312.902 311.916 310.76 315.146 309.529 318.908L287.601 385.857Z" fill="url(#paint13_linear)"/>
          </g>
          <path id="largeSpin" d="M462.348 246.581C464.136 243.019 465.495 239.169 466.386 235.148L473.519 233.497L473.593 223.994L473.666 214.491L466.557 212.694C465.727 208.654 464.43 204.776 462.703 201.172L466.777 193.938L461.246 187.16L455.728 180.368L449.61 185.142C446.653 183 443.46 181.368 440.127 180.295L438.756 171.705L430.864 171.602L422.971 171.513L421.491 180.015C418.14 181.03 414.921 182.591 411.922 184.656L405.914 179.749L400.285 186.409L394.657 193.069L398.621 200.435C396.833 203.997 395.474 207.847 394.583 211.869L387.449 213.519L387.376 223.022L387.303 232.525L394.412 234.323C395.241 238.362 396.539 242.24 398.266 245.844L394.241 253.093L399.771 259.871L405.302 266.663L411.42 261.889C414.378 264.029 417.57 265.66 420.903 266.736L422.274 275.326L430.166 275.429L438.059 275.518L439.515 266.943C442.867 265.942 446.088 264.385 449.084 262.316L455.092 267.223L460.72 260.563L466.349 253.903L462.348 246.581ZM416.67 239.833C413.988 236.543 412.176 232.369 411.464 227.839C410.752 223.309 411.172 218.627 412.67 214.385C414.168 210.142 416.678 206.53 419.881 204.005C423.084 201.479 426.838 200.155 430.666 200.198C434.495 200.241 438.227 201.651 441.39 204.248C444.553 206.845 447.006 210.513 448.438 214.789C449.87 219.065 450.216 223.756 449.434 228.268C448.651 232.781 446.775 236.913 444.042 240.142C442.229 242.288 440.082 243.982 437.724 245.127C435.367 246.273 432.845 246.848 430.303 246.819C427.76 246.79 425.248 246.158 422.909 244.96C420.569 243.761 418.449 242.019 416.67 239.833V239.833Z" fill="url(#paint14_linear)"/>
          <path id="smallSpin" d="M391.12 196.001C392.307 193.626 393.209 191.061 393.8 188.383L398.548 187.293V180.958V174.637L393.825 173.429C393.267 170.744 392.402 168.165 391.255 165.767L393.971 160.949L390.3 156.426L386.63 151.918L382.579 155.085C380.61 153.661 378.485 152.575 376.265 151.859L375.348 146.142H370.098H364.837L363.846 151.844C361.61 152.501 359.463 153.538 357.471 154.923L353.469 151.667L349.725 156.087L345.968 160.507L348.611 165.384C347.427 167.762 346.521 170.325 345.919 173.001L341.172 174.092V180.427V186.748L345.907 187.956C346.465 190.641 347.33 193.219 348.477 195.617L345.76 200.435L349.431 204.959L353.102 209.467L357.152 206.285C359.119 207.72 361.245 208.811 363.466 209.526L364.384 215.243H369.633H374.883L375.886 209.541C378.119 208.875 380.265 207.838 382.261 206.461L386.25 209.718L390.007 205.297L393.751 200.877L391.12 196.001ZM360.701 191.58C358.916 189.391 357.71 186.612 357.236 183.597C356.763 180.582 357.042 177.466 358.039 174.642C359.036 171.818 360.707 169.414 362.839 167.733C364.971 166.052 367.469 165.17 370.018 165.199C372.566 165.228 375.05 166.166 377.156 167.895C379.261 169.624 380.894 172.065 381.847 174.911C382.8 177.757 383.03 180.88 382.509 183.883C381.989 186.887 380.74 189.638 378.921 191.787C376.474 194.659 373.18 196.243 369.763 196.19C366.346 196.138 363.086 194.453 360.701 191.507V191.58Z" fill="url(#paint15_linear)"/>
          <g id="graph">
          <path id="Vector_24" d="M12.7747 225.158L11.392 223.051L54.1088 182.431L93.2527 197.076L135.199 148.78L168.285 154.57L197.322 114.303L198.999 116.071L169.167 157.428L135.957 151.623L93.84 200.111L54.5615 185.422L12.7747 225.158Z" fill="white"/>
          <path id="Vector_25" d="M99.4442 197.695C99.5923 199.1 99.3909 200.527 98.8656 201.794C98.3403 203.061 97.5146 204.112 96.4931 204.815C95.4715 205.517 94.2999 205.839 93.1265 205.739C91.953 205.639 90.8305 205.123 89.9009 204.255C88.9712 203.387 88.2762 202.207 87.9038 200.863C87.5313 199.52 87.4982 198.073 87.8085 196.707C88.1188 195.341 88.7587 194.116 89.6472 193.188C90.5357 192.26 91.6328 191.669 92.7999 191.492C94.364 191.254 95.9426 191.774 97.1885 192.937C98.4344 194.1 99.2458 195.812 99.4442 197.695V197.695Z" fill="#5252FB"/>
          <path id="Vector_26" d="M60.1168 183.654C60.2625 185.059 60.0589 186.484 59.5319 187.75C59.0049 189.016 58.178 190.065 57.1559 190.765C56.1338 191.465 54.9623 191.784 53.7894 191.683C52.6166 191.581 51.495 191.063 50.5666 190.194C49.6381 189.326 48.9444 188.145 48.5731 186.801C48.2019 185.458 48.1697 184.012 48.4807 182.647C48.7917 181.281 49.432 180.058 50.3205 179.13C51.209 178.203 52.3059 177.613 53.4725 177.436C55.038 177.203 56.6164 177.726 57.8619 178.892C59.1074 180.057 59.9183 181.77 60.1168 183.654Z" fill="#5252FB"/>
          <path id="Vector_27" d="M94.4518 207.036C93.0634 207.25 91.6534 206.964 90.4003 206.213C89.1471 205.462 88.1073 204.28 87.4124 202.817C86.7175 201.354 86.3989 199.675 86.4967 197.994C86.5946 196.312 87.1047 194.704 87.9623 193.372C88.8199 192.04 89.9865 191.044 91.3144 190.511C92.6422 189.977 94.0717 189.931 95.4217 190.376C96.7717 190.822 97.9815 191.74 98.898 193.014C99.8144 194.288 100.396 195.86 100.57 197.533C100.799 199.769 100.284 202.023 99.1378 203.803C97.9916 205.583 96.307 206.746 94.4518 207.036V207.036ZM92.959 192.818C91.9919 192.949 91.0792 193.424 90.3376 194.183C89.5959 194.942 89.0588 195.949 88.795 197.077C88.5312 198.205 88.5527 199.402 88.8566 200.515C89.1606 201.628 89.7332 202.607 90.5014 203.327C91.2695 204.046 92.1984 204.473 93.1692 204.554C94.1401 204.635 95.1089 204.365 95.9519 203.78C96.7949 203.194 97.4738 202.319 97.9018 201.267C98.3299 200.215 98.4878 199.033 98.3552 197.872C98.1813 196.342 97.516 194.956 96.5024 194.011C95.4888 193.066 94.2077 192.638 92.9345 192.818H92.959Z" fill="white"/>
          <path id="Vector_28" d="M141.427 149.752C141.575 151.157 141.374 152.584 140.848 153.851C140.323 155.118 139.497 156.169 138.476 156.872C137.454 157.574 136.283 157.896 135.109 157.796C133.936 157.696 132.813 157.18 131.884 156.312C130.954 155.444 130.259 154.264 129.886 152.92C129.514 151.577 129.481 150.13 129.791 148.764C130.102 147.398 130.741 146.173 131.63 145.245C132.518 144.317 133.616 143.726 134.783 143.549C135.557 143.429 136.344 143.495 137.098 143.742C137.851 143.989 138.557 144.413 139.174 144.989C139.792 145.566 140.308 146.283 140.695 147.1C141.081 147.918 141.33 148.819 141.427 149.752V149.752Z" fill="#5252FB"/>
          <path id="Vector_29" d="M136.41 159.093C135.022 159.307 133.612 159.021 132.358 158.27C131.105 157.519 130.065 156.337 129.371 154.874C128.676 153.411 128.357 151.732 128.455 150.051C128.553 148.369 129.063 146.761 129.92 145.429C130.778 144.097 131.945 143.101 133.273 142.568C134.6 142.034 136.03 141.988 137.38 142.433C138.73 142.879 139.94 143.797 140.856 145.071C141.773 146.345 142.354 147.917 142.528 149.59C142.757 151.826 142.242 154.08 141.096 155.86C139.95 157.64 138.265 158.803 136.41 159.093V159.093ZM134.929 144.875C133.962 145.006 133.05 145.481 132.308 146.24C131.566 146.999 131.029 148.006 130.765 149.134C130.502 150.262 130.523 151.459 130.827 152.572C131.131 153.685 131.704 154.664 132.472 155.384C133.24 156.103 134.169 156.53 135.14 156.611C136.111 156.692 137.079 156.422 137.922 155.837C138.765 155.251 139.444 154.376 139.872 153.324C140.3 152.272 140.458 151.09 140.326 149.929C140.247 149.17 140.045 148.438 139.731 147.773C139.417 147.109 138.998 146.525 138.497 146.056C137.996 145.587 137.423 145.241 136.811 145.038C136.199 144.836 135.559 144.78 134.929 144.875V144.875Z" fill="white"/>
          <path id="Vector_30" d="M174.318 154.85C174.464 156.255 174.26 157.68 173.733 158.946C173.206 160.211 172.379 161.261 171.357 161.961C170.335 162.661 169.163 162.98 167.991 162.879C166.818 162.777 165.696 162.259 164.768 161.39C163.839 160.522 163.146 159.341 162.774 157.997C162.403 156.654 162.371 155.208 162.682 153.843C162.993 152.477 163.633 151.253 164.522 150.326C165.41 149.399 166.507 148.809 167.674 148.632C169.239 148.403 170.815 148.928 172.06 150.092C173.305 151.257 174.116 152.967 174.318 154.85V154.85Z" fill="#5252FB"/>
          <path id="Vector_31" d="M169.301 164.176C167.916 164.387 166.51 164.099 165.26 163.348C164.011 162.596 162.975 161.416 162.283 159.956C161.591 158.496 161.274 156.821 161.372 155.144C161.47 153.467 161.979 151.862 162.835 150.534C163.69 149.205 164.854 148.211 166.178 147.679C167.503 147.146 168.929 147.098 170.276 147.541C171.623 147.984 172.83 148.898 173.746 150.168C174.661 151.437 175.244 153.005 175.419 154.673C175.651 156.909 175.138 159.165 173.991 160.947C172.844 162.728 171.158 163.889 169.301 164.176V164.176ZM167.869 149.973C166.921 150.116 166.028 150.595 165.306 151.349C164.583 152.104 164.062 153.099 163.81 154.21C163.557 155.32 163.583 156.496 163.886 157.588C164.189 158.681 164.753 159.641 165.509 160.346C166.265 161.052 167.177 161.472 168.131 161.553C169.085 161.634 170.038 161.372 170.868 160.801C171.699 160.23 172.37 159.375 172.797 158.344C173.223 157.314 173.387 156.154 173.266 155.012C173.187 154.254 172.985 153.522 172.671 152.858C172.357 152.194 171.938 151.612 171.436 151.144C170.935 150.676 170.362 150.331 169.75 150.13C169.138 149.929 168.499 149.876 167.869 149.973V149.973Z" fill="white"/>
          <path id="Vector_32" d="M55.1367 193.024C53.7483 193.239 52.3382 192.952 51.0851 192.201C49.832 191.45 48.7922 190.268 48.0973 188.805C47.4024 187.342 47.0837 185.663 47.1816 183.982C47.2795 182.301 47.7895 180.692 48.6471 179.36C49.5047 178.028 50.6713 177.032 51.9992 176.499C53.3271 175.966 54.7565 175.919 56.1065 176.365C57.4565 176.81 58.6664 177.728 59.5828 179.002C60.4993 180.276 61.0812 181.849 61.2548 183.521C61.4837 185.757 60.9688 188.011 59.8226 189.791C58.6764 191.572 56.9919 192.734 55.1367 193.024V193.024ZM53.6439 178.807C52.6768 178.938 51.7641 179.413 51.0224 180.171C50.2807 180.93 49.7437 181.938 49.4799 183.066C49.2161 184.193 49.2376 185.39 49.5415 186.504C49.8454 187.617 50.4181 188.596 51.1862 189.315C51.9544 190.034 52.8832 190.462 53.8541 190.542C54.825 190.623 55.7938 190.353 56.6368 189.768C57.4797 189.183 58.1586 188.308 58.5867 187.255C59.0148 186.203 59.1726 185.021 59.0401 183.86C58.9614 183.102 58.7594 182.369 58.4456 181.705C58.1319 181.04 57.7124 180.457 57.2113 179.987C56.7102 179.518 56.1373 179.172 55.5252 178.97C54.913 178.767 54.2738 178.712 53.6439 178.807V178.807Z" fill="white"/>
          </g>
          </g>
          <defs>
          <linearGradient id="paint00_linear" x1="263.239" y1="397.482" x2="263.239" y2="501" gradientUnits="userSpaceOnUse">
          <stop stop-color="#5347DB" stop-opacity="0.78"/>
          <stop offset="1" stop-color="#3F3FE8"/>
          </linearGradient>
          <linearGradient id="paint11_linear" x1="261.526" y1="356.773" x2="268.475" y2="505.747" gradientUnits="userSpaceOnUse">
          <stop offset="0.01" stop-color="#1515A5"/>
          <stop offset="0.83" stop-opacity="0.07"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <radialGradient id="paint22_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11182.1 8082.64) rotate(117.528) scale(1408.59 3792.36)">
          <stop offset="0.01" stop-color="#E02FEF"/>
          </radialGradient>
          <linearGradient id="paint33_linear" x1="252.404" y1="260.625" x2="252.404" y2="385.651" gradientUnits="userSpaceOnUse">
          <stop stop-color="#907EFF"/>
          <stop offset="0.953125" stop-color="#5E5EFF"/>
          </linearGradient>
          <linearGradient id="paint44_linear" x1="219.727" y1="301.375" x2="242.08" y2="260.774" gradientUnits="userSpaceOnUse">
          <stop offset="0.01"/>
          <stop offset="0.12" stop-opacity="0.75"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint55_linear" x1="3198.78" y1="4656.53" x2="2950.02" y2="4617.49" gradientUnits="userSpaceOnUse">
          <stop offset="0.01"/>
          <stop offset="0.12" stop-opacity="0.75"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint6_linear" x1="4572.72" y1="4681.39" x2="5019.81" y2="6119.41" gradientUnits="userSpaceOnUse">
          <stop offset="0.01"/>
          <stop offset="0.83" stop-opacity="0.07"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint7_linear" x1="13856.6" y1="23525.4" x2="13735.7" y2="14354" gradientUnits="userSpaceOnUse">
          <stop offset="0.01"/>
          <stop offset="0.83" stop-opacity="0.07"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint88_linear" x1="5312.86" y1="23544.2" x2="6529.06" y2="23522.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.01"/>
          <stop offset="0.12" stop-opacity="0.75"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint9_linear" x1="301.465" y1="385.769" x2="301.465" y2="370.947" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C71BE3"/>
          <stop offset="0.807292" stop-color="#EB8BFB"/>
          </linearGradient>
          <linearGradient id="paint10_linear" x1="33209.4" y1="4452.61" x2="33210.1" y2="4141.35" gradientUnits="userSpaceOnUse">
          <stop offset="0.01" stop-color="#EF26C3"/>
          <stop offset="0.12" stop-opacity="0.75"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint11_linear" x1="30937.8" y1="17282.7" x2="32420.1" y2="24000.9" gradientUnits="userSpaceOnUse">
          <stop offset="0.01"/>
          <stop offset="0.12" stop-opacity="0.75"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint12_linear" x1="343.587" y1="306.149" x2="343.587" y2="385.857" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F199FF"/>
          <stop offset="1" stop-color="#C71BE3"/>
          </linearGradient>
          <linearGradient id="paint13_linear" x1="31633.9" y1="23289.3" x2="31810.5" y2="16996.3" gradientUnits="userSpaceOnUse">
          <stop offset="0.01"/>
          <stop offset="0.12" stop-opacity="0.75"/>
          <stop offset="1" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint14_linear" x1="430.484" y1="171.513" x2="430.484" y2="275.518" gradientUnits="userSpaceOnUse">
          <stop stop-color="#5252FB"/>
          <stop offset="1" stop-color="#8080FF"/>
          </linearGradient>
          <linearGradient id="paint15_linear" x1="369.86" y1="146.142" x2="369.86" y2="215.243" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CF26DE"/>
          <stop offset="1" stop-color="#F68FFF" stop-opacity="0.99"/>
          </linearGradient>
          <clipPath id="clip0">
          <rect width="504" height="501" fill="white"/>
          </clipPath>
          </defs>
          </svg>`,
        }}
      />

      <img className="path1" src={path} alt="path" />
    </div>
  );
};

export default Box2;