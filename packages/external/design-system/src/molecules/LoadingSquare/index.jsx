import React from 'react'
import styled from 'styled-components'


const LoadingSquares = styled.svg`
  -webkit-transform: rotate(45deg) scale(1);
          transform: rotate(45deg) scale(1);


.stroke-still {
  stroke: #4568dc;
  stroke:  #b06ab3;
}

&.slow .stroke-animation {
  -webkit-animation: stroke-slow 12.2s ease-in, stroke-colors 4.8s linear;
          animation: stroke-slow 12.2s ease-in, stroke-colors 4.8s linear;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
  -webkit-animation-direction: normal;
          animation-direction: normal;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-play-state: running;
          animation-play-state: running;
  -webkit-transform-origin: center center;
          transform-origin: center center;
}



@-webkit-keyframes stroke-slow {
  0% {
    stroke-dasharray: 0 200;
  }
  45% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200 200;
  }
  90% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
  100% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
}

@keyframes stroke-slow {
  0% {
    stroke-dasharray: 0 200;
  }
  45% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200 200;
  }
  90% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
  100% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
}

@-webkit-keyframes stroke-colors {
  0%  { stroke: #3498DB; }
  24% { stroke: #643232; }
  25% { stroke: #327864; }
  49% { stroke: #327864; }
  50% { stroke: #32326e; }
  74% { stroke: #32326e; }
  75% { stroke: #78325a; }
  99% { stroke: #78325a; }
}

@keyframes stroke-colors {
  0%  { stroke: #3498DB; }
  24% { stroke: #643232; }
  25% { stroke: #327864; }
  49% { stroke: #327864; }
  50% { stroke: #32326e; }
  74% { stroke: #32326e; }
  75% { stroke: #78325a; }
  99% { stroke: #78325a; }
}



&.active .stroke-animation {
  -webkit-animation: stroke-spacing 1.2s ease-in, stroke-color 3.1s linear;
          animation: stroke-spacing 1.2s ease-in, stroke-color 3.1s linear;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-delay: 0;
          animation-delay: 0;
  -webkit-animation-direction: normal;
          animation-direction: normal;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-play-state: running;
          animation-play-state: running;
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

@-webkit-keyframes stroke-spacing {
  0% {
    stroke-dasharray: 0 200;
  }
  45% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200 200;
  }
  90% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
  100% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
}

@keyframes stroke-spacing {
  0% {
    stroke-dasharray: 0 200;
  }
  45% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200 200;
  }
  90% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
  100% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
}

@-webkit-keyframes stroke-color {
  0%  { stroke: #3498DB; }
  24% { stroke: #f4516c; }
  25% { stroke: #f4516c; }
  49% { stroke: #f4516c; }
  50% { stroke: #f4516c; }
  74% { stroke: #32326e; }
  75% { stroke: #78325a; }
  99% { stroke: #78325a; }
}

@keyframes stroke-color {
  0%  { stroke: #3498DB; }
  24% { stroke: #f4516c; }
  25% { stroke: #f4516c; }
  49% { stroke: #f4516c; }
  50% { stroke: #f4516c; }
  74% { stroke: #32326e; }
  75% { stroke: #78325a; }
  99% { stroke: #78325a; }
}
`

LoadingSquares.defaultProps ={
  dimensions: 10
}

export default props =>
<LoadingSquares className={`loading-squares ${props.className}`} width={props.dimensions || 10} height={props.dimensions || 10} viewBox="0 0 100 100">
  <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="40" fill="none"></polyline>
  <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="40" fill="none"></polyline>
  <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="40" fill="none"></polyline>
  <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="40" fill="none"></polyline>
</LoadingSquares>