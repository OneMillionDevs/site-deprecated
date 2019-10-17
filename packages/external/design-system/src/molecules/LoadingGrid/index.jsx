import React from 'react'
import styled from 'styled-components'


const LoadingGrid = styled.div`
& {
  width: 40vw;
  height: 40vw;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  position: absolute;
  left: calc(50% - 20vw);
  top: calc(50% - 20vw);
}
& .square, & .inner {
  display: inline-block;
  float: left;
  width: 5vw;
  height: 5vw;
  position: relative;
}
& .square .inner, & .inner .inner {
  position: absolute;
  width: 75%;
  height: 75%;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
}
& .square:nth-of-type(1):before, & .square:nth-of-type(1):after, & .square:nth-of-type(1) .inner:before, & .square:nth-of-type(1) .inner:after, & .inner:nth-of-type(1):before, & .inner:nth-of-type(1):after, & .inner:nth-of-type(1) .inner:before, & .inner:nth-of-type(1) .inner:after {
  -webkit-animation-delay: -0.0181818182s;
          animation-delay: -0.0181818182s;
}
& .square:nth-of-type(1):before, & .square:nth-of-type(1) .inner:before, & .inner:nth-of-type(1):before, & .inner:nth-of-type(1) .inner:before {
  box-shadow: inset -2px 0 0 #f7ff00, -2px 0 0 #f7ff00, inset 2px 0 0 #f7ff00, 2px 0 0 #f7ff00;
}
& .square:nth-of-type(1):after, & .square:nth-of-type(1) .inner:after, & .inner:nth-of-type(1):after, & .inner:nth-of-type(1) .inner:after {
  box-shadow: inset 0 2px 0 0 #f7ff00, 0 2px 0 0 #f7ff00, inset 0 -2px 0 0 #f7ff00, 0 -2px 0 0 #f7ff00;
}
& .square:nth-of-type(2):before, & .square:nth-of-type(2):after, & .square:nth-of-type(2) .inner:before, & .square:nth-of-type(2) .inner:after, & .inner:nth-of-type(2):before, & .inner:nth-of-type(2):after, & .inner:nth-of-type(2) .inner:before, & .inner:nth-of-type(2) .inner:after {
  -webkit-animation-delay: -0.0363636364s;
          animation-delay: -0.0363636364s;
}
& .square:nth-of-type(2):before, & .square:nth-of-type(2) .inner:before, & .inner:nth-of-type(2):before, & .inner:nth-of-type(2) .inner:before {
  box-shadow: inset -2px 0 0 #eeff00, -2px 0 0 #eeff00, inset 2px 0 0 #eeff00, 2px 0 0 #eeff00;
}
& .square:nth-of-type(2):after, & .square:nth-of-type(2) .inner:after, & .inner:nth-of-type(2):after, & .inner:nth-of-type(2) .inner:after {
  box-shadow: inset 0 2px 0 0 #eeff00, 0 2px 0 0 #eeff00, inset 0 -2px 0 0 #eeff00, 0 -2px 0 0 #eeff00;
}
& .square:nth-of-type(3):before, & .square:nth-of-type(3):after, & .square:nth-of-type(3) .inner:before, & .square:nth-of-type(3) .inner:after, & .inner:nth-of-type(3):before, & .inner:nth-of-type(3):after, & .inner:nth-of-type(3) .inner:before, & .inner:nth-of-type(3) .inner:after {
  -webkit-animation-delay: -0.0545454545s;
          animation-delay: -0.0545454545s;
}
& .square:nth-of-type(3):before, & .square:nth-of-type(3) .inner:before, & .inner:nth-of-type(3):before, & .inner:nth-of-type(3) .inner:before {
  box-shadow: inset -2px 0 0 #e6ff00, -2px 0 0 #e6ff00, inset 2px 0 0 #e6ff00, 2px 0 0 #e6ff00;
}
& .square:nth-of-type(3):after, & .square:nth-of-type(3) .inner:after, & .inner:nth-of-type(3):after, & .inner:nth-of-type(3) .inner:after {
  box-shadow: inset 0 2px 0 0 #e6ff00, 0 2px 0 0 #e6ff00, inset 0 -2px 0 0 #e6ff00, 0 -2px 0 0 #e6ff00;
}
& .square:nth-of-type(4):before, & .square:nth-of-type(4):after, & .square:nth-of-type(4) .inner:before, & .square:nth-of-type(4) .inner:after, & .inner:nth-of-type(4):before, & .inner:nth-of-type(4):after, & .inner:nth-of-type(4) .inner:before, & .inner:nth-of-type(4) .inner:after {
  -webkit-animation-delay: -0.0727272727s;
          animation-delay: -0.0727272727s;
}
& .square:nth-of-type(4):before, & .square:nth-of-type(4) .inner:before, & .inner:nth-of-type(4):before, & .inner:nth-of-type(4) .inner:before {
  box-shadow: inset -2px 0 0 #ddff00, -2px 0 0 #ddff00, inset 2px 0 0 #ddff00, 2px 0 0 #ddff00;
}
& .square:nth-of-type(4):after, & .square:nth-of-type(4) .inner:after, & .inner:nth-of-type(4):after, & .inner:nth-of-type(4) .inner:after {
  box-shadow: inset 0 2px 0 0 #ddff00, 0 2px 0 0 #ddff00, inset 0 -2px 0 0 #ddff00, 0 -2px 0 0 #ddff00;
}
& .square:nth-of-type(5):before, & .square:nth-of-type(5):after, & .square:nth-of-type(5) .inner:before, & .square:nth-of-type(5) .inner:after, & .inner:nth-of-type(5):before, & .inner:nth-of-type(5):after, & .inner:nth-of-type(5) .inner:before, & .inner:nth-of-type(5) .inner:after {
  -webkit-animation-delay: -0.0909090909s;
          animation-delay: -0.0909090909s;
}
& .square:nth-of-type(5):before, & .square:nth-of-type(5) .inner:before, & .inner:nth-of-type(5):before, & .inner:nth-of-type(5) .inner:before {
  box-shadow: inset -2px 0 0 #d5ff00, -2px 0 0 #d5ff00, inset 2px 0 0 #d5ff00, 2px 0 0 #d5ff00;
}
& .square:nth-of-type(5):after, & .square:nth-of-type(5) .inner:after, & .inner:nth-of-type(5):after, & .inner:nth-of-type(5) .inner:after {
  box-shadow: inset 0 2px 0 0 #d5ff00, 0 2px 0 0 #d5ff00, inset 0 -2px 0 0 #d5ff00, 0 -2px 0 0 #d5ff00;
}
& .square:nth-of-type(6):before, & .square:nth-of-type(6):after, & .square:nth-of-type(6) .inner:before, & .square:nth-of-type(6) .inner:after, & .inner:nth-of-type(6):before, & .inner:nth-of-type(6):after, & .inner:nth-of-type(6) .inner:before, & .inner:nth-of-type(6) .inner:after {
  -webkit-animation-delay: -0.1090909091s;
          animation-delay: -0.1090909091s;
}
& .square:nth-of-type(6):before, & .square:nth-of-type(6) .inner:before, & .inner:nth-of-type(6):before, & .inner:nth-of-type(6) .inner:before {
  box-shadow: inset -2px 0 0 #ccff00, -2px 0 0 #ccff00, inset 2px 0 0 #ccff00, 2px 0 0 #ccff00;
}
& .square:nth-of-type(6):after, & .square:nth-of-type(6) .inner:after, & .inner:nth-of-type(6):after, & .inner:nth-of-type(6) .inner:after {
  box-shadow: inset 0 2px 0 0 #ccff00, 0 2px 0 0 #ccff00, inset 0 -2px 0 0 #ccff00, 0 -2px 0 0 #ccff00;
}
& .square:nth-of-type(7):before, & .square:nth-of-type(7):after, & .square:nth-of-type(7) .inner:before, & .square:nth-of-type(7) .inner:after, & .inner:nth-of-type(7):before, & .inner:nth-of-type(7):after, & .inner:nth-of-type(7) .inner:before, & .inner:nth-of-type(7) .inner:after {
  -webkit-animation-delay: -0.1272727273s;
          animation-delay: -0.1272727273s;
}
& .square:nth-of-type(7):before, & .square:nth-of-type(7) .inner:before, & .inner:nth-of-type(7):before, & .inner:nth-of-type(7) .inner:before {
  box-shadow: inset -2px 0 0 #c4ff00, -2px 0 0 #c4ff00, inset 2px 0 0 #c4ff00, 2px 0 0 #c4ff00;
}
& .square:nth-of-type(7):after, & .square:nth-of-type(7) .inner:after, & .inner:nth-of-type(7):after, & .inner:nth-of-type(7) .inner:after {
  box-shadow: inset 0 2px 0 0 #c4ff00, 0 2px 0 0 #c4ff00, inset 0 -2px 0 0 #c4ff00, 0 -2px 0 0 #c4ff00;
}
& .square:nth-of-type(8):before, & .square:nth-of-type(8):after, & .square:nth-of-type(8) .inner:before, & .square:nth-of-type(8) .inner:after, & .inner:nth-of-type(8):before, & .inner:nth-of-type(8):after, & .inner:nth-of-type(8) .inner:before, & .inner:nth-of-type(8) .inner:after {
  -webkit-animation-delay: -0.1454545455s;
          animation-delay: -0.1454545455s;
}
& .square:nth-of-type(8):before, & .square:nth-of-type(8) .inner:before, & .inner:nth-of-type(8):before, & .inner:nth-of-type(8) .inner:before {
  box-shadow: inset -2px 0 0 #bbff00, -2px 0 0 #bbff00, inset 2px 0 0 #bbff00, 2px 0 0 #bbff00;
}
& .square:nth-of-type(8):after, & .square:nth-of-type(8) .inner:after, & .inner:nth-of-type(8):after, & .inner:nth-of-type(8) .inner:after {
  box-shadow: inset 0 2px 0 0 #bbff00, 0 2px 0 0 #bbff00, inset 0 -2px 0 0 #bbff00, 0 -2px 0 0 #bbff00;
}
& .square:nth-of-type(9):before, & .square:nth-of-type(9):after, & .square:nth-of-type(9) .inner:before, & .square:nth-of-type(9) .inner:after, & .inner:nth-of-type(9):before, & .inner:nth-of-type(9):after, & .inner:nth-of-type(9) .inner:before, & .inner:nth-of-type(9) .inner:after {
  -webkit-animation-delay: -0.1636363636s;
          animation-delay: -0.1636363636s;
}
& .square:nth-of-type(9):before, & .square:nth-of-type(9) .inner:before, & .inner:nth-of-type(9):before, & .inner:nth-of-type(9) .inner:before {
  box-shadow: inset -2px 0 0 #b3ff00, -2px 0 0 #b3ff00, inset 2px 0 0 #b3ff00, 2px 0 0 #b3ff00;
}
& .square:nth-of-type(9):after, & .square:nth-of-type(9) .inner:after, & .inner:nth-of-type(9):after, & .inner:nth-of-type(9) .inner:after {
  box-shadow: inset 0 2px 0 0 #b3ff00, 0 2px 0 0 #b3ff00, inset 0 -2px 0 0 #b3ff00, 0 -2px 0 0 #b3ff00;
}
& .square:nth-of-type(10):before, & .square:nth-of-type(10):after, & .square:nth-of-type(10) .inner:before, & .square:nth-of-type(10) .inner:after, & .inner:nth-of-type(10):before, & .inner:nth-of-type(10):after, & .inner:nth-of-type(10) .inner:before, & .inner:nth-of-type(10) .inner:after {
  -webkit-animation-delay: -0.1818181818s;
          animation-delay: -0.1818181818s;
}
& .square:nth-of-type(10):before, & .square:nth-of-type(10) .inner:before, & .inner:nth-of-type(10):before, & .inner:nth-of-type(10) .inner:before {
  box-shadow: inset -2px 0 0 #aaff00, -2px 0 0 #aaff00, inset 2px 0 0 #aaff00, 2px 0 0 #aaff00;
}
& .square:nth-of-type(10):after, & .square:nth-of-type(10) .inner:after, & .inner:nth-of-type(10):after, & .inner:nth-of-type(10) .inner:after {
  box-shadow: inset 0 2px 0 0 #aaff00, 0 2px 0 0 #aaff00, inset 0 -2px 0 0 #aaff00, 0 -2px 0 0 #aaff00;
}
& .square:nth-of-type(11):before, & .square:nth-of-type(11):after, & .square:nth-of-type(11) .inner:before, & .square:nth-of-type(11) .inner:after, & .inner:nth-of-type(11):before, & .inner:nth-of-type(11):after, & .inner:nth-of-type(11) .inner:before, & .inner:nth-of-type(11) .inner:after {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
& .square:nth-of-type(11):before, & .square:nth-of-type(11) .inner:before, & .inner:nth-of-type(11):before, & .inner:nth-of-type(11) .inner:before {
  box-shadow: inset -2px 0 0 #a2ff00, -2px 0 0 #a2ff00, inset 2px 0 0 #a2ff00, 2px 0 0 #a2ff00;
}
& .square:nth-of-type(11):after, & .square:nth-of-type(11) .inner:after, & .inner:nth-of-type(11):after, & .inner:nth-of-type(11) .inner:after {
  box-shadow: inset 0 2px 0 0 #a2ff00, 0 2px 0 0 #a2ff00, inset 0 -2px 0 0 #a2ff00, 0 -2px 0 0 #a2ff00;
}
& .square:nth-of-type(12):before, & .square:nth-of-type(12):after, & .square:nth-of-type(12) .inner:before, & .square:nth-of-type(12) .inner:after, & .inner:nth-of-type(12):before, & .inner:nth-of-type(12):after, & .inner:nth-of-type(12) .inner:before, & .inner:nth-of-type(12) .inner:after {
  -webkit-animation-delay: -0.2181818182s;
          animation-delay: -0.2181818182s;
}
& .square:nth-of-type(12):before, & .square:nth-of-type(12) .inner:before, & .inner:nth-of-type(12):before, & .inner:nth-of-type(12) .inner:before {
  box-shadow: inset -2px 0 0 #99ff00, -2px 0 0 #99ff00, inset 2px 0 0 #99ff00, 2px 0 0 #99ff00;
}
& .square:nth-of-type(12):after, & .square:nth-of-type(12) .inner:after, & .inner:nth-of-type(12):after, & .inner:nth-of-type(12) .inner:after {
  box-shadow: inset 0 2px 0 0 #99ff00, 0 2px 0 0 #99ff00, inset 0 -2px 0 0 #99ff00, 0 -2px 0 0 #99ff00;
}
& .square:nth-of-type(13):before, & .square:nth-of-type(13):after, & .square:nth-of-type(13) .inner:before, & .square:nth-of-type(13) .inner:after, & .inner:nth-of-type(13):before, & .inner:nth-of-type(13):after, & .inner:nth-of-type(13) .inner:before, & .inner:nth-of-type(13) .inner:after {
  -webkit-animation-delay: -0.2363636364s;
          animation-delay: -0.2363636364s;
}
& .square:nth-of-type(13):before, & .square:nth-of-type(13) .inner:before, & .inner:nth-of-type(13):before, & .inner:nth-of-type(13) .inner:before {
  box-shadow: inset -2px 0 0 #91ff00, -2px 0 0 #91ff00, inset 2px 0 0 #91ff00, 2px 0 0 #91ff00;
}
& .square:nth-of-type(13):after, & .square:nth-of-type(13) .inner:after, & .inner:nth-of-type(13):after, & .inner:nth-of-type(13) .inner:after {
  box-shadow: inset 0 2px 0 0 #91ff00, 0 2px 0 0 #91ff00, inset 0 -2px 0 0 #91ff00, 0 -2px 0 0 #91ff00;
}
& .square:nth-of-type(14):before, & .square:nth-of-type(14):after, & .square:nth-of-type(14) .inner:before, & .square:nth-of-type(14) .inner:after, & .inner:nth-of-type(14):before, & .inner:nth-of-type(14):after, & .inner:nth-of-type(14) .inner:before, & .inner:nth-of-type(14) .inner:after {
  -webkit-animation-delay: -0.2545454545s;
          animation-delay: -0.2545454545s;
}
& .square:nth-of-type(14):before, & .square:nth-of-type(14) .inner:before, & .inner:nth-of-type(14):before, & .inner:nth-of-type(14) .inner:before {
  box-shadow: inset -2px 0 0 #88ff00, -2px 0 0 #88ff00, inset 2px 0 0 #88ff00, 2px 0 0 #88ff00;
}
& .square:nth-of-type(14):after, & .square:nth-of-type(14) .inner:after, & .inner:nth-of-type(14):after, & .inner:nth-of-type(14) .inner:after {
  box-shadow: inset 0 2px 0 0 #88ff00, 0 2px 0 0 #88ff00, inset 0 -2px 0 0 #88ff00, 0 -2px 0 0 #88ff00;
}
& .square:nth-of-type(15):before, & .square:nth-of-type(15):after, & .square:nth-of-type(15) .inner:before, & .square:nth-of-type(15) .inner:after, & .inner:nth-of-type(15):before, & .inner:nth-of-type(15):after, & .inner:nth-of-type(15) .inner:before, & .inner:nth-of-type(15) .inner:after {
  -webkit-animation-delay: -0.2727272727s;
          animation-delay: -0.2727272727s;
}
& .square:nth-of-type(15):before, & .square:nth-of-type(15) .inner:before, & .inner:nth-of-type(15):before, & .inner:nth-of-type(15) .inner:before {
  box-shadow: inset -2px 0 0 #80ff00, -2px 0 0 #80ff00, inset 2px 0 0 #80ff00, 2px 0 0 #80ff00;
}
& .square:nth-of-type(15):after, & .square:nth-of-type(15) .inner:after, & .inner:nth-of-type(15):after, & .inner:nth-of-type(15) .inner:after {
  box-shadow: inset 0 2px 0 0 #80ff00, 0 2px 0 0 #80ff00, inset 0 -2px 0 0 #80ff00, 0 -2px 0 0 #80ff00;
}
& .square:nth-of-type(16):before, & .square:nth-of-type(16):after, & .square:nth-of-type(16) .inner:before, & .square:nth-of-type(16) .inner:after, & .inner:nth-of-type(16):before, & .inner:nth-of-type(16):after, & .inner:nth-of-type(16) .inner:before, & .inner:nth-of-type(16) .inner:after {
  -webkit-animation-delay: -0.2909090909s;
          animation-delay: -0.2909090909s;
}
& .square:nth-of-type(16):before, & .square:nth-of-type(16) .inner:before, & .inner:nth-of-type(16):before, & .inner:nth-of-type(16) .inner:before {
  box-shadow: inset -2px 0 0 #77ff00, -2px 0 0 #77ff00, inset 2px 0 0 #77ff00, 2px 0 0 #77ff00;
}
& .square:nth-of-type(16):after, & .square:nth-of-type(16) .inner:after, & .inner:nth-of-type(16):after, & .inner:nth-of-type(16) .inner:after {
  box-shadow: inset 0 2px 0 0 #77ff00, 0 2px 0 0 #77ff00, inset 0 -2px 0 0 #77ff00, 0 -2px 0 0 #77ff00;
}
& .square:nth-of-type(17):before, & .square:nth-of-type(17):after, & .square:nth-of-type(17) .inner:before, & .square:nth-of-type(17) .inner:after, & .inner:nth-of-type(17):before, & .inner:nth-of-type(17):after, & .inner:nth-of-type(17) .inner:before, & .inner:nth-of-type(17) .inner:after {
  -webkit-animation-delay: -0.3090909091s;
          animation-delay: -0.3090909091s;
}
& .square:nth-of-type(17):before, & .square:nth-of-type(17) .inner:before, & .inner:nth-of-type(17):before, & .inner:nth-of-type(17) .inner:before {
  box-shadow: inset -2px 0 0 #6fff00, -2px 0 0 #6fff00, inset 2px 0 0 #6fff00, 2px 0 0 #6fff00;
}
& .square:nth-of-type(17):after, & .square:nth-of-type(17) .inner:after, & .inner:nth-of-type(17):after, & .inner:nth-of-type(17) .inner:after {
  box-shadow: inset 0 2px 0 0 #6fff00, 0 2px 0 0 #6fff00, inset 0 -2px 0 0 #6fff00, 0 -2px 0 0 #6fff00;
}
& .square:nth-of-type(18):before, & .square:nth-of-type(18):after, & .square:nth-of-type(18) .inner:before, & .square:nth-of-type(18) .inner:after, & .inner:nth-of-type(18):before, & .inner:nth-of-type(18):after, & .inner:nth-of-type(18) .inner:before, & .inner:nth-of-type(18) .inner:after {
  -webkit-animation-delay: -0.3272727273s;
          animation-delay: -0.3272727273s;
}
& .square:nth-of-type(18):before, & .square:nth-of-type(18) .inner:before, & .inner:nth-of-type(18):before, & .inner:nth-of-type(18) .inner:before {
  box-shadow: inset -2px 0 0 #66ff00, -2px 0 0 #66ff00, inset 2px 0 0 #66ff00, 2px 0 0 #66ff00;
}
& .square:nth-of-type(18):after, & .square:nth-of-type(18) .inner:after, & .inner:nth-of-type(18):after, & .inner:nth-of-type(18) .inner:after {
  box-shadow: inset 0 2px 0 0 #66ff00, 0 2px 0 0 #66ff00, inset 0 -2px 0 0 #66ff00, 0 -2px 0 0 #66ff00;
}
& .square:nth-of-type(19):before, & .square:nth-of-type(19):after, & .square:nth-of-type(19) .inner:before, & .square:nth-of-type(19) .inner:after, & .inner:nth-of-type(19):before, & .inner:nth-of-type(19):after, & .inner:nth-of-type(19) .inner:before, & .inner:nth-of-type(19) .inner:after {
  -webkit-animation-delay: -0.3454545455s;
          animation-delay: -0.3454545455s;
}
& .square:nth-of-type(19):before, & .square:nth-of-type(19) .inner:before, & .inner:nth-of-type(19):before, & .inner:nth-of-type(19) .inner:before {
  box-shadow: inset -2px 0 0 #5eff00, -2px 0 0 #5eff00, inset 2px 0 0 #5eff00, 2px 0 0 #5eff00;
}
& .square:nth-of-type(19):after, & .square:nth-of-type(19) .inner:after, & .inner:nth-of-type(19):after, & .inner:nth-of-type(19) .inner:after {
  box-shadow: inset 0 2px 0 0 #5eff00, 0 2px 0 0 #5eff00, inset 0 -2px 0 0 #5eff00, 0 -2px 0 0 #5eff00;
}
& .square:nth-of-type(20):before, & .square:nth-of-type(20):after, & .square:nth-of-type(20) .inner:before, & .square:nth-of-type(20) .inner:after, & .inner:nth-of-type(20):before, & .inner:nth-of-type(20):after, & .inner:nth-of-type(20) .inner:before, & .inner:nth-of-type(20) .inner:after {
  -webkit-animation-delay: -0.3636363636s;
          animation-delay: -0.3636363636s;
}
& .square:nth-of-type(20):before, & .square:nth-of-type(20) .inner:before, & .inner:nth-of-type(20):before, & .inner:nth-of-type(20) .inner:before {
  box-shadow: inset -2px 0 0 #55ff00, -2px 0 0 #55ff00, inset 2px 0 0 #55ff00, 2px 0 0 #55ff00;
}
& .square:nth-of-type(20):after, & .square:nth-of-type(20) .inner:after, & .inner:nth-of-type(20):after, & .inner:nth-of-type(20) .inner:after {
  box-shadow: inset 0 2px 0 0 #55ff00, 0 2px 0 0 #55ff00, inset 0 -2px 0 0 #55ff00, 0 -2px 0 0 #55ff00;
}
& .square:nth-of-type(21):before, & .square:nth-of-type(21):after, & .square:nth-of-type(21) .inner:before, & .square:nth-of-type(21) .inner:after, & .inner:nth-of-type(21):before, & .inner:nth-of-type(21):after, & .inner:nth-of-type(21) .inner:before, & .inner:nth-of-type(21) .inner:after {
  -webkit-animation-delay: -0.3818181818s;
          animation-delay: -0.3818181818s;
}
& .square:nth-of-type(21):before, & .square:nth-of-type(21) .inner:before, & .inner:nth-of-type(21):before, & .inner:nth-of-type(21) .inner:before {
  box-shadow: inset -2px 0 0 #4dff00, -2px 0 0 #4dff00, inset 2px 0 0 #4dff00, 2px 0 0 #4dff00;
}
& .square:nth-of-type(21):after, & .square:nth-of-type(21) .inner:after, & .inner:nth-of-type(21):after, & .inner:nth-of-type(21) .inner:after {
  box-shadow: inset 0 2px 0 0 #4dff00, 0 2px 0 0 #4dff00, inset 0 -2px 0 0 #4dff00, 0 -2px 0 0 #4dff00;
}
& .square:nth-of-type(22):before, & .square:nth-of-type(22):after, & .square:nth-of-type(22) .inner:before, & .square:nth-of-type(22) .inner:after, & .inner:nth-of-type(22):before, & .inner:nth-of-type(22):after, & .inner:nth-of-type(22) .inner:before, & .inner:nth-of-type(22) .inner:after {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
& .square:nth-of-type(22):before, & .square:nth-of-type(22) .inner:before, & .inner:nth-of-type(22):before, & .inner:nth-of-type(22) .inner:before {
  box-shadow: inset -2px 0 0 #44ff00, -2px 0 0 #44ff00, inset 2px 0 0 #44ff00, 2px 0 0 #44ff00;
}
& .square:nth-of-type(22):after, & .square:nth-of-type(22) .inner:after, & .inner:nth-of-type(22):after, & .inner:nth-of-type(22) .inner:after {
  box-shadow: inset 0 2px 0 0 #44ff00, 0 2px 0 0 #44ff00, inset 0 -2px 0 0 #44ff00, 0 -2px 0 0 #44ff00;
}
& .square:nth-of-type(23):before, & .square:nth-of-type(23):after, & .square:nth-of-type(23) .inner:before, & .square:nth-of-type(23) .inner:after, & .inner:nth-of-type(23):before, & .inner:nth-of-type(23):after, & .inner:nth-of-type(23) .inner:before, & .inner:nth-of-type(23) .inner:after {
  -webkit-animation-delay: -0.4181818182s;
          animation-delay: -0.4181818182s;
}
& .square:nth-of-type(23):before, & .square:nth-of-type(23) .inner:before, & .inner:nth-of-type(23):before, & .inner:nth-of-type(23) .inner:before {
  box-shadow: inset -2px 0 0 #3cff00, -2px 0 0 #3cff00, inset 2px 0 0 #3cff00, 2px 0 0 #3cff00;
}
& .square:nth-of-type(23):after, & .square:nth-of-type(23) .inner:after, & .inner:nth-of-type(23):after, & .inner:nth-of-type(23) .inner:after {
  box-shadow: inset 0 2px 0 0 #3cff00, 0 2px 0 0 #3cff00, inset 0 -2px 0 0 #3cff00, 0 -2px 0 0 #3cff00;
}
& .square:nth-of-type(24):before, & .square:nth-of-type(24):after, & .square:nth-of-type(24) .inner:before, & .square:nth-of-type(24) .inner:after, & .inner:nth-of-type(24):before, & .inner:nth-of-type(24):after, & .inner:nth-of-type(24) .inner:before, & .inner:nth-of-type(24) .inner:after {
  -webkit-animation-delay: -0.4363636364s;
          animation-delay: -0.4363636364s;
}
& .square:nth-of-type(24):before, & .square:nth-of-type(24) .inner:before, & .inner:nth-of-type(24):before, & .inner:nth-of-type(24) .inner:before {
  box-shadow: inset -2px 0 0 #33ff00, -2px 0 0 #33ff00, inset 2px 0 0 #33ff00, 2px 0 0 #33ff00;
}
& .square:nth-of-type(24):after, & .square:nth-of-type(24) .inner:after, & .inner:nth-of-type(24):after, & .inner:nth-of-type(24) .inner:after {
  box-shadow: inset 0 2px 0 0 #33ff00, 0 2px 0 0 #33ff00, inset 0 -2px 0 0 #33ff00, 0 -2px 0 0 #33ff00;
}
& .square:nth-of-type(25):before, & .square:nth-of-type(25):after, & .square:nth-of-type(25) .inner:before, & .square:nth-of-type(25) .inner:after, & .inner:nth-of-type(25):before, & .inner:nth-of-type(25):after, & .inner:nth-of-type(25) .inner:before, & .inner:nth-of-type(25) .inner:after {
  -webkit-animation-delay: -0.4545454545s;
          animation-delay: -0.4545454545s;
}
& .square:nth-of-type(25):before, & .square:nth-of-type(25) .inner:before, & .inner:nth-of-type(25):before, & .inner:nth-of-type(25) .inner:before {
  box-shadow: inset -2px 0 0 #2bff00, -2px 0 0 #2bff00, inset 2px 0 0 #2bff00, 2px 0 0 #2bff00;
}
& .square:nth-of-type(25):after, & .square:nth-of-type(25) .inner:after, & .inner:nth-of-type(25):after, & .inner:nth-of-type(25) .inner:after {
  box-shadow: inset 0 2px 0 0 #2bff00, 0 2px 0 0 #2bff00, inset 0 -2px 0 0 #2bff00, 0 -2px 0 0 #2bff00;
}
& .square:nth-of-type(26):before, & .square:nth-of-type(26):after, & .square:nth-of-type(26) .inner:before, & .square:nth-of-type(26) .inner:after, & .inner:nth-of-type(26):before, & .inner:nth-of-type(26):after, & .inner:nth-of-type(26) .inner:before, & .inner:nth-of-type(26) .inner:after {
  -webkit-animation-delay: -0.4727272727s;
          animation-delay: -0.4727272727s;
}
& .square:nth-of-type(26):before, & .square:nth-of-type(26) .inner:before, & .inner:nth-of-type(26):before, & .inner:nth-of-type(26) .inner:before {
  box-shadow: inset -2px 0 0 #22ff00, -2px 0 0 #22ff00, inset 2px 0 0 #22ff00, 2px 0 0 #22ff00;
}
& .square:nth-of-type(26):after, & .square:nth-of-type(26) .inner:after, & .inner:nth-of-type(26):after, & .inner:nth-of-type(26) .inner:after {
  box-shadow: inset 0 2px 0 0 #22ff00, 0 2px 0 0 #22ff00, inset 0 -2px 0 0 #22ff00, 0 -2px 0 0 #22ff00;
}
& .square:nth-of-type(27):before, & .square:nth-of-type(27):after, & .square:nth-of-type(27) .inner:before, & .square:nth-of-type(27) .inner:after, & .inner:nth-of-type(27):before, & .inner:nth-of-type(27):after, & .inner:nth-of-type(27) .inner:before, & .inner:nth-of-type(27) .inner:after {
  -webkit-animation-delay: -0.4909090909s;
          animation-delay: -0.4909090909s;
}
& .square:nth-of-type(27):before, & .square:nth-of-type(27) .inner:before, & .inner:nth-of-type(27):before, & .inner:nth-of-type(27) .inner:before {
  box-shadow: inset -2px 0 0 #1aff00, -2px 0 0 #1aff00, inset 2px 0 0 #1aff00, 2px 0 0 #1aff00;
}
& .square:nth-of-type(27):after, & .square:nth-of-type(27) .inner:after, & .inner:nth-of-type(27):after, & .inner:nth-of-type(27) .inner:after {
  box-shadow: inset 0 2px 0 0 #1aff00, 0 2px 0 0 #1aff00, inset 0 -2px 0 0 #1aff00, 0 -2px 0 0 #1aff00;
}
& .square:nth-of-type(28):before, & .square:nth-of-type(28):after, & .square:nth-of-type(28) .inner:before, & .square:nth-of-type(28) .inner:after, & .inner:nth-of-type(28):before, & .inner:nth-of-type(28):after, & .inner:nth-of-type(28) .inner:before, & .inner:nth-of-type(28) .inner:after {
  -webkit-animation-delay: -0.5090909091s;
          animation-delay: -0.5090909091s;
}
& .square:nth-of-type(28):before, & .square:nth-of-type(28) .inner:before, & .inner:nth-of-type(28):before, & .inner:nth-of-type(28) .inner:before {
  box-shadow: inset -2px 0 0 #11ff00, -2px 0 0 #11ff00, inset 2px 0 0 #11ff00, 2px 0 0 #11ff00;
}
& .square:nth-of-type(28):after, & .square:nth-of-type(28) .inner:after, & .inner:nth-of-type(28):after, & .inner:nth-of-type(28) .inner:after {
  box-shadow: inset 0 2px 0 0 #11ff00, 0 2px 0 0 #11ff00, inset 0 -2px 0 0 #11ff00, 0 -2px 0 0 #11ff00;
}
& .square:nth-of-type(29):before, & .square:nth-of-type(29):after, & .square:nth-of-type(29) .inner:before, & .square:nth-of-type(29) .inner:after, & .inner:nth-of-type(29):before, & .inner:nth-of-type(29):after, & .inner:nth-of-type(29) .inner:before, & .inner:nth-of-type(29) .inner:after {
  -webkit-animation-delay: -0.5272727273s;
          animation-delay: -0.5272727273s;
}
& .square:nth-of-type(29):before, & .square:nth-of-type(29) .inner:before, & .inner:nth-of-type(29):before, & .inner:nth-of-type(29) .inner:before {
  box-shadow: inset -2px 0 0 #09ff00, -2px 0 0 #09ff00, inset 2px 0 0 #09ff00, 2px 0 0 #09ff00;
}
& .square:nth-of-type(29):after, & .square:nth-of-type(29) .inner:after, & .inner:nth-of-type(29):after, & .inner:nth-of-type(29) .inner:after {
  box-shadow: inset 0 2px 0 0 #09ff00, 0 2px 0 0 #09ff00, inset 0 -2px 0 0 #09ff00, 0 -2px 0 0 #09ff00;
}
& .square:nth-of-type(30):before, & .square:nth-of-type(30):after, & .square:nth-of-type(30) .inner:before, & .square:nth-of-type(30) .inner:after, & .inner:nth-of-type(30):before, & .inner:nth-of-type(30):after, & .inner:nth-of-type(30) .inner:before, & .inner:nth-of-type(30) .inner:after {
  -webkit-animation-delay: -0.5454545455s;
          animation-delay: -0.5454545455s;
}
& .square:nth-of-type(30):before, & .square:nth-of-type(30) .inner:before, & .inner:nth-of-type(30):before, & .inner:nth-of-type(30) .inner:before {
  box-shadow: inset -2px 0 0 lime, -2px 0 0 lime, inset 2px 0 0 lime, 2px 0 0 lime;
}
& .square:nth-of-type(30):after, & .square:nth-of-type(30) .inner:after, & .inner:nth-of-type(30):after, & .inner:nth-of-type(30) .inner:after {
  box-shadow: inset 0 2px 0 0 lime, 0 2px 0 0 lime, inset 0 -2px 0 0 lime, 0 -2px 0 0 lime;
}
& .square:nth-of-type(31):before, & .square:nth-of-type(31):after, & .square:nth-of-type(31) .inner:before, & .square:nth-of-type(31) .inner:after, & .inner:nth-of-type(31):before, & .inner:nth-of-type(31):after, & .inner:nth-of-type(31) .inner:before, & .inner:nth-of-type(31) .inner:after {
  -webkit-animation-delay: -0.5636363636s;
          animation-delay: -0.5636363636s;
}
& .square:nth-of-type(31):before, & .square:nth-of-type(31) .inner:before, & .inner:nth-of-type(31):before, & .inner:nth-of-type(31) .inner:before {
  box-shadow: inset -2px 0 0 #00ff09, -2px 0 0 #00ff09, inset 2px 0 0 #00ff09, 2px 0 0 #00ff09;
}
& .square:nth-of-type(31):after, & .square:nth-of-type(31) .inner:after, & .inner:nth-of-type(31):after, & .inner:nth-of-type(31) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff09, 0 2px 0 0 #00ff09, inset 0 -2px 0 0 #00ff09, 0 -2px 0 0 #00ff09;
}
& .square:nth-of-type(32):before, & .square:nth-of-type(32):after, & .square:nth-of-type(32) .inner:before, & .square:nth-of-type(32) .inner:after, & .inner:nth-of-type(32):before, & .inner:nth-of-type(32):after, & .inner:nth-of-type(32) .inner:before, & .inner:nth-of-type(32) .inner:after {
  -webkit-animation-delay: -0.5818181818s;
          animation-delay: -0.5818181818s;
}
& .square:nth-of-type(32):before, & .square:nth-of-type(32) .inner:before, & .inner:nth-of-type(32):before, & .inner:nth-of-type(32) .inner:before {
  box-shadow: inset -2px 0 0 #00ff11, -2px 0 0 #00ff11, inset 2px 0 0 #00ff11, 2px 0 0 #00ff11;
}
& .square:nth-of-type(32):after, & .square:nth-of-type(32) .inner:after, & .inner:nth-of-type(32):after, & .inner:nth-of-type(32) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff11, 0 2px 0 0 #00ff11, inset 0 -2px 0 0 #00ff11, 0 -2px 0 0 #00ff11;
}
& .square:nth-of-type(33):before, & .square:nth-of-type(33):after, & .square:nth-of-type(33) .inner:before, & .square:nth-of-type(33) .inner:after, & .inner:nth-of-type(33):before, & .inner:nth-of-type(33):after, & .inner:nth-of-type(33) .inner:before, & .inner:nth-of-type(33) .inner:after {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
}
& .square:nth-of-type(33):before, & .square:nth-of-type(33) .inner:before, & .inner:nth-of-type(33):before, & .inner:nth-of-type(33) .inner:before {
  box-shadow: inset -2px 0 0 #00ff1a, -2px 0 0 #00ff1a, inset 2px 0 0 #00ff1a, 2px 0 0 #00ff1a;
}
& .square:nth-of-type(33):after, & .square:nth-of-type(33) .inner:after, & .inner:nth-of-type(33):after, & .inner:nth-of-type(33) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff1a, 0 2px 0 0 #00ff1a, inset 0 -2px 0 0 #00ff1a, 0 -2px 0 0 #00ff1a;
}
& .square:nth-of-type(34):before, & .square:nth-of-type(34):after, & .square:nth-of-type(34) .inner:before, & .square:nth-of-type(34) .inner:after, & .inner:nth-of-type(34):before, & .inner:nth-of-type(34):after, & .inner:nth-of-type(34) .inner:before, & .inner:nth-of-type(34) .inner:after {
  -webkit-animation-delay: -0.6181818182s;
          animation-delay: -0.6181818182s;
}
& .square:nth-of-type(34):before, & .square:nth-of-type(34) .inner:before, & .inner:nth-of-type(34):before, & .inner:nth-of-type(34) .inner:before {
  box-shadow: inset -2px 0 0 #00ff22, -2px 0 0 #00ff22, inset 2px 0 0 #00ff22, 2px 0 0 #00ff22;
}
& .square:nth-of-type(34):after, & .square:nth-of-type(34) .inner:after, & .inner:nth-of-type(34):after, & .inner:nth-of-type(34) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff22, 0 2px 0 0 #00ff22, inset 0 -2px 0 0 #00ff22, 0 -2px 0 0 #00ff22;
}
& .square:nth-of-type(35):before, & .square:nth-of-type(35):after, & .square:nth-of-type(35) .inner:before, & .square:nth-of-type(35) .inner:after, & .inner:nth-of-type(35):before, & .inner:nth-of-type(35):after, & .inner:nth-of-type(35) .inner:before, & .inner:nth-of-type(35) .inner:after {
  -webkit-animation-delay: -0.6363636364s;
          animation-delay: -0.6363636364s;
}
& .square:nth-of-type(35):before, & .square:nth-of-type(35) .inner:before, & .inner:nth-of-type(35):before, & .inner:nth-of-type(35) .inner:before {
  box-shadow: inset -2px 0 0 #00ff2b, -2px 0 0 #00ff2b, inset 2px 0 0 #00ff2b, 2px 0 0 #00ff2b;
}
& .square:nth-of-type(35):after, & .square:nth-of-type(35) .inner:after, & .inner:nth-of-type(35):after, & .inner:nth-of-type(35) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff2b, 0 2px 0 0 #00ff2b, inset 0 -2px 0 0 #00ff2b, 0 -2px 0 0 #00ff2b;
}
& .square:nth-of-type(36):before, & .square:nth-of-type(36):after, & .square:nth-of-type(36) .inner:before, & .square:nth-of-type(36) .inner:after, & .inner:nth-of-type(36):before, & .inner:nth-of-type(36):after, & .inner:nth-of-type(36) .inner:before, & .inner:nth-of-type(36) .inner:after {
  -webkit-animation-delay: -0.6545454545s;
          animation-delay: -0.6545454545s;
}
& .square:nth-of-type(36):before, & .square:nth-of-type(36) .inner:before, & .inner:nth-of-type(36):before, & .inner:nth-of-type(36) .inner:before {
  box-shadow: inset -2px 0 0 #00ff33, -2px 0 0 #00ff33, inset 2px 0 0 #00ff33, 2px 0 0 #00ff33;
}
& .square:nth-of-type(36):after, & .square:nth-of-type(36) .inner:after, & .inner:nth-of-type(36):after, & .inner:nth-of-type(36) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff33, 0 2px 0 0 #00ff33, inset 0 -2px 0 0 #00ff33, 0 -2px 0 0 #00ff33;
}
& .square:nth-of-type(37):before, & .square:nth-of-type(37):after, & .square:nth-of-type(37) .inner:before, & .square:nth-of-type(37) .inner:after, & .inner:nth-of-type(37):before, & .inner:nth-of-type(37):after, & .inner:nth-of-type(37) .inner:before, & .inner:nth-of-type(37) .inner:after {
  -webkit-animation-delay: -0.6727272727s;
          animation-delay: -0.6727272727s;
}
& .square:nth-of-type(37):before, & .square:nth-of-type(37) .inner:before, & .inner:nth-of-type(37):before, & .inner:nth-of-type(37) .inner:before {
  box-shadow: inset -2px 0 0 #00ff3c, -2px 0 0 #00ff3c, inset 2px 0 0 #00ff3c, 2px 0 0 #00ff3c;
}
& .square:nth-of-type(37):after, & .square:nth-of-type(37) .inner:after, & .inner:nth-of-type(37):after, & .inner:nth-of-type(37) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff3c, 0 2px 0 0 #00ff3c, inset 0 -2px 0 0 #00ff3c, 0 -2px 0 0 #00ff3c;
}
& .square:nth-of-type(38):before, & .square:nth-of-type(38):after, & .square:nth-of-type(38) .inner:before, & .square:nth-of-type(38) .inner:after, & .inner:nth-of-type(38):before, & .inner:nth-of-type(38):after, & .inner:nth-of-type(38) .inner:before, & .inner:nth-of-type(38) .inner:after {
  -webkit-animation-delay: -0.6909090909s;
          animation-delay: -0.6909090909s;
}
& .square:nth-of-type(38):before, & .square:nth-of-type(38) .inner:before, & .inner:nth-of-type(38):before, & .inner:nth-of-type(38) .inner:before {
  box-shadow: inset -2px 0 0 #00ff44, -2px 0 0 #00ff44, inset 2px 0 0 #00ff44, 2px 0 0 #00ff44;
}
& .square:nth-of-type(38):after, & .square:nth-of-type(38) .inner:after, & .inner:nth-of-type(38):after, & .inner:nth-of-type(38) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff44, 0 2px 0 0 #00ff44, inset 0 -2px 0 0 #00ff44, 0 -2px 0 0 #00ff44;
}
& .square:nth-of-type(39):before, & .square:nth-of-type(39):after, & .square:nth-of-type(39) .inner:before, & .square:nth-of-type(39) .inner:after, & .inner:nth-of-type(39):before, & .inner:nth-of-type(39):after, & .inner:nth-of-type(39) .inner:before, & .inner:nth-of-type(39) .inner:after {
  -webkit-animation-delay: -0.7090909091s;
          animation-delay: -0.7090909091s;
}
& .square:nth-of-type(39):before, & .square:nth-of-type(39) .inner:before, & .inner:nth-of-type(39):before, & .inner:nth-of-type(39) .inner:before {
  box-shadow: inset -2px 0 0 #00ff4d, -2px 0 0 #00ff4d, inset 2px 0 0 #00ff4d, 2px 0 0 #00ff4d;
}
& .square:nth-of-type(39):after, & .square:nth-of-type(39) .inner:after, & .inner:nth-of-type(39):after, & .inner:nth-of-type(39) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff4d, 0 2px 0 0 #00ff4d, inset 0 -2px 0 0 #00ff4d, 0 -2px 0 0 #00ff4d;
}
& .square:nth-of-type(40):before, & .square:nth-of-type(40):after, & .square:nth-of-type(40) .inner:before, & .square:nth-of-type(40) .inner:after, & .inner:nth-of-type(40):before, & .inner:nth-of-type(40):after, & .inner:nth-of-type(40) .inner:before, & .inner:nth-of-type(40) .inner:after {
  -webkit-animation-delay: -0.7272727273s;
          animation-delay: -0.7272727273s;
}
& .square:nth-of-type(40):before, & .square:nth-of-type(40) .inner:before, & .inner:nth-of-type(40):before, & .inner:nth-of-type(40) .inner:before {
  box-shadow: inset -2px 0 0 #00ff55, -2px 0 0 #00ff55, inset 2px 0 0 #00ff55, 2px 0 0 #00ff55;
}
& .square:nth-of-type(40):after, & .square:nth-of-type(40) .inner:after, & .inner:nth-of-type(40):after, & .inner:nth-of-type(40) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff55, 0 2px 0 0 #00ff55, inset 0 -2px 0 0 #00ff55, 0 -2px 0 0 #00ff55;
}
& .square:nth-of-type(41):before, & .square:nth-of-type(41):after, & .square:nth-of-type(41) .inner:before, & .square:nth-of-type(41) .inner:after, & .inner:nth-of-type(41):before, & .inner:nth-of-type(41):after, & .inner:nth-of-type(41) .inner:before, & .inner:nth-of-type(41) .inner:after {
  -webkit-animation-delay: -0.7454545455s;
          animation-delay: -0.7454545455s;
}
& .square:nth-of-type(41):before, & .square:nth-of-type(41) .inner:before, & .inner:nth-of-type(41):before, & .inner:nth-of-type(41) .inner:before {
  box-shadow: inset -2px 0 0 #00ff5e, -2px 0 0 #00ff5e, inset 2px 0 0 #00ff5e, 2px 0 0 #00ff5e;
}
& .square:nth-of-type(41):after, & .square:nth-of-type(41) .inner:after, & .inner:nth-of-type(41):after, & .inner:nth-of-type(41) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff5e, 0 2px 0 0 #00ff5e, inset 0 -2px 0 0 #00ff5e, 0 -2px 0 0 #00ff5e;
}
& .square:nth-of-type(42):before, & .square:nth-of-type(42):after, & .square:nth-of-type(42) .inner:before, & .square:nth-of-type(42) .inner:after, & .inner:nth-of-type(42):before, & .inner:nth-of-type(42):after, & .inner:nth-of-type(42) .inner:before, & .inner:nth-of-type(42) .inner:after {
  -webkit-animation-delay: -0.7636363636s;
          animation-delay: -0.7636363636s;
}
& .square:nth-of-type(42):before, & .square:nth-of-type(42) .inner:before, & .inner:nth-of-type(42):before, & .inner:nth-of-type(42) .inner:before {
  box-shadow: inset -2px 0 0 #00ff66, -2px 0 0 #00ff66, inset 2px 0 0 #00ff66, 2px 0 0 #00ff66;
}
& .square:nth-of-type(42):after, & .square:nth-of-type(42) .inner:after, & .inner:nth-of-type(42):after, & .inner:nth-of-type(42) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff66, 0 2px 0 0 #00ff66, inset 0 -2px 0 0 #00ff66, 0 -2px 0 0 #00ff66;
}
& .square:nth-of-type(43):before, & .square:nth-of-type(43):after, & .square:nth-of-type(43) .inner:before, & .square:nth-of-type(43) .inner:after, & .inner:nth-of-type(43):before, & .inner:nth-of-type(43):after, & .inner:nth-of-type(43) .inner:before, & .inner:nth-of-type(43) .inner:after {
  -webkit-animation-delay: -0.7818181818s;
          animation-delay: -0.7818181818s;
}
& .square:nth-of-type(43):before, & .square:nth-of-type(43) .inner:before, & .inner:nth-of-type(43):before, & .inner:nth-of-type(43) .inner:before {
  box-shadow: inset -2px 0 0 #00ff6f, -2px 0 0 #00ff6f, inset 2px 0 0 #00ff6f, 2px 0 0 #00ff6f;
}
& .square:nth-of-type(43):after, & .square:nth-of-type(43) .inner:after, & .inner:nth-of-type(43):after, & .inner:nth-of-type(43) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff6f, 0 2px 0 0 #00ff6f, inset 0 -2px 0 0 #00ff6f, 0 -2px 0 0 #00ff6f;
}
& .square:nth-of-type(44):before, & .square:nth-of-type(44):after, & .square:nth-of-type(44) .inner:before, & .square:nth-of-type(44) .inner:after, & .inner:nth-of-type(44):before, & .inner:nth-of-type(44):after, & .inner:nth-of-type(44) .inner:before, & .inner:nth-of-type(44) .inner:after {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
}
& .square:nth-of-type(44):before, & .square:nth-of-type(44) .inner:before, & .inner:nth-of-type(44):before, & .inner:nth-of-type(44) .inner:before {
  box-shadow: inset -2px 0 0 #00ff77, -2px 0 0 #00ff77, inset 2px 0 0 #00ff77, 2px 0 0 #00ff77;
}
& .square:nth-of-type(44):after, & .square:nth-of-type(44) .inner:after, & .inner:nth-of-type(44):after, & .inner:nth-of-type(44) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff77, 0 2px 0 0 #00ff77, inset 0 -2px 0 0 #00ff77, 0 -2px 0 0 #00ff77;
}
& .square:nth-of-type(45):before, & .square:nth-of-type(45):after, & .square:nth-of-type(45) .inner:before, & .square:nth-of-type(45) .inner:after, & .inner:nth-of-type(45):before, & .inner:nth-of-type(45):after, & .inner:nth-of-type(45) .inner:before, & .inner:nth-of-type(45) .inner:after {
  -webkit-animation-delay: -0.8181818182s;
          animation-delay: -0.8181818182s;
}
& .square:nth-of-type(45):before, & .square:nth-of-type(45) .inner:before, & .inner:nth-of-type(45):before, & .inner:nth-of-type(45) .inner:before {
  box-shadow: inset -2px 0 0 #00ff80, -2px 0 0 #00ff80, inset 2px 0 0 #00ff80, 2px 0 0 #00ff80;
}
& .square:nth-of-type(45):after, & .square:nth-of-type(45) .inner:after, & .inner:nth-of-type(45):after, & .inner:nth-of-type(45) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff80, 0 2px 0 0 #00ff80, inset 0 -2px 0 0 #00ff80, 0 -2px 0 0 #00ff80;
}
& .square:nth-of-type(46):before, & .square:nth-of-type(46):after, & .square:nth-of-type(46) .inner:before, & .square:nth-of-type(46) .inner:after, & .inner:nth-of-type(46):before, & .inner:nth-of-type(46):after, & .inner:nth-of-type(46) .inner:before, & .inner:nth-of-type(46) .inner:after {
  -webkit-animation-delay: -0.8363636364s;
          animation-delay: -0.8363636364s;
}
& .square:nth-of-type(46):before, & .square:nth-of-type(46) .inner:before, & .inner:nth-of-type(46):before, & .inner:nth-of-type(46) .inner:before {
  box-shadow: inset -2px 0 0 #00ff88, -2px 0 0 #00ff88, inset 2px 0 0 #00ff88, 2px 0 0 #00ff88;
}
& .square:nth-of-type(46):after, & .square:nth-of-type(46) .inner:after, & .inner:nth-of-type(46):after, & .inner:nth-of-type(46) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff88, 0 2px 0 0 #00ff88, inset 0 -2px 0 0 #00ff88, 0 -2px 0 0 #00ff88;
}
& .square:nth-of-type(47):before, & .square:nth-of-type(47):after, & .square:nth-of-type(47) .inner:before, & .square:nth-of-type(47) .inner:after, & .inner:nth-of-type(47):before, & .inner:nth-of-type(47):after, & .inner:nth-of-type(47) .inner:before, & .inner:nth-of-type(47) .inner:after {
  -webkit-animation-delay: -0.8545454545s;
          animation-delay: -0.8545454545s;
}
& .square:nth-of-type(47):before, & .square:nth-of-type(47) .inner:before, & .inner:nth-of-type(47):before, & .inner:nth-of-type(47) .inner:before {
  box-shadow: inset -2px 0 0 #00ff91, -2px 0 0 #00ff91, inset 2px 0 0 #00ff91, 2px 0 0 #00ff91;
}
& .square:nth-of-type(47):after, & .square:nth-of-type(47) .inner:after, & .inner:nth-of-type(47):after, & .inner:nth-of-type(47) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff91, 0 2px 0 0 #00ff91, inset 0 -2px 0 0 #00ff91, 0 -2px 0 0 #00ff91;
}
& .square:nth-of-type(48):before, & .square:nth-of-type(48):after, & .square:nth-of-type(48) .inner:before, & .square:nth-of-type(48) .inner:after, & .inner:nth-of-type(48):before, & .inner:nth-of-type(48):after, & .inner:nth-of-type(48) .inner:before, & .inner:nth-of-type(48) .inner:after {
  -webkit-animation-delay: -0.8727272727s;
          animation-delay: -0.8727272727s;
}
& .square:nth-of-type(48):before, & .square:nth-of-type(48) .inner:before, & .inner:nth-of-type(48):before, & .inner:nth-of-type(48) .inner:before {
  box-shadow: inset -2px 0 0 #00ff99, -2px 0 0 #00ff99, inset 2px 0 0 #00ff99, 2px 0 0 #00ff99;
}
& .square:nth-of-type(48):after, & .square:nth-of-type(48) .inner:after, & .inner:nth-of-type(48):after, & .inner:nth-of-type(48) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ff99, 0 2px 0 0 #00ff99, inset 0 -2px 0 0 #00ff99, 0 -2px 0 0 #00ff99;
}
& .square:nth-of-type(49):before, & .square:nth-of-type(49):after, & .square:nth-of-type(49) .inner:before, & .square:nth-of-type(49) .inner:after, & .inner:nth-of-type(49):before, & .inner:nth-of-type(49):after, & .inner:nth-of-type(49) .inner:before, & .inner:nth-of-type(49) .inner:after {
  -webkit-animation-delay: -0.8909090909s;
          animation-delay: -0.8909090909s;
}
& .square:nth-of-type(49):before, & .square:nth-of-type(49) .inner:before, & .inner:nth-of-type(49):before, & .inner:nth-of-type(49) .inner:before {
  box-shadow: inset -2px 0 0 #00ffa2, -2px 0 0 #00ffa2, inset 2px 0 0 #00ffa2, 2px 0 0 #00ffa2;
}
& .square:nth-of-type(49):after, & .square:nth-of-type(49) .inner:after, & .inner:nth-of-type(49):after, & .inner:nth-of-type(49) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffa2, 0 2px 0 0 #00ffa2, inset 0 -2px 0 0 #00ffa2, 0 -2px 0 0 #00ffa2;
}
& .square:nth-of-type(50):before, & .square:nth-of-type(50):after, & .square:nth-of-type(50) .inner:before, & .square:nth-of-type(50) .inner:after, & .inner:nth-of-type(50):before, & .inner:nth-of-type(50):after, & .inner:nth-of-type(50) .inner:before, & .inner:nth-of-type(50) .inner:after {
  -webkit-animation-delay: -0.9090909091s;
          animation-delay: -0.9090909091s;
}
& .square:nth-of-type(50):before, & .square:nth-of-type(50) .inner:before, & .inner:nth-of-type(50):before, & .inner:nth-of-type(50) .inner:before {
  box-shadow: inset -2px 0 0 #00ffaa, -2px 0 0 #00ffaa, inset 2px 0 0 #00ffaa, 2px 0 0 #00ffaa;
}
& .square:nth-of-type(50):after, & .square:nth-of-type(50) .inner:after, & .inner:nth-of-type(50):after, & .inner:nth-of-type(50) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffaa, 0 2px 0 0 #00ffaa, inset 0 -2px 0 0 #00ffaa, 0 -2px 0 0 #00ffaa;
}
& .square:nth-of-type(51):before, & .square:nth-of-type(51):after, & .square:nth-of-type(51) .inner:before, & .square:nth-of-type(51) .inner:after, & .inner:nth-of-type(51):before, & .inner:nth-of-type(51):after, & .inner:nth-of-type(51) .inner:before, & .inner:nth-of-type(51) .inner:after {
  -webkit-animation-delay: -0.9272727273s;
          animation-delay: -0.9272727273s;
}
& .square:nth-of-type(51):before, & .square:nth-of-type(51) .inner:before, & .inner:nth-of-type(51):before, & .inner:nth-of-type(51) .inner:before {
  box-shadow: inset -2px 0 0 #00ffb3, -2px 0 0 #00ffb3, inset 2px 0 0 #00ffb3, 2px 0 0 #00ffb3;
}
& .square:nth-of-type(51):after, & .square:nth-of-type(51) .inner:after, & .inner:nth-of-type(51):after, & .inner:nth-of-type(51) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffb3, 0 2px 0 0 #00ffb3, inset 0 -2px 0 0 #00ffb3, 0 -2px 0 0 #00ffb3;
}
& .square:nth-of-type(52):before, & .square:nth-of-type(52):after, & .square:nth-of-type(52) .inner:before, & .square:nth-of-type(52) .inner:after, & .inner:nth-of-type(52):before, & .inner:nth-of-type(52):after, & .inner:nth-of-type(52) .inner:before, & .inner:nth-of-type(52) .inner:after {
  -webkit-animation-delay: -0.9454545455s;
          animation-delay: -0.9454545455s;
}
& .square:nth-of-type(52):before, & .square:nth-of-type(52) .inner:before, & .inner:nth-of-type(52):before, & .inner:nth-of-type(52) .inner:before {
  box-shadow: inset -2px 0 0 #00ffbb, -2px 0 0 #00ffbb, inset 2px 0 0 #00ffbb, 2px 0 0 #00ffbb;
}
& .square:nth-of-type(52):after, & .square:nth-of-type(52) .inner:after, & .inner:nth-of-type(52):after, & .inner:nth-of-type(52) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffbb, 0 2px 0 0 #00ffbb, inset 0 -2px 0 0 #00ffbb, 0 -2px 0 0 #00ffbb;
}
& .square:nth-of-type(53):before, & .square:nth-of-type(53):after, & .square:nth-of-type(53) .inner:before, & .square:nth-of-type(53) .inner:after, & .inner:nth-of-type(53):before, & .inner:nth-of-type(53):after, & .inner:nth-of-type(53) .inner:before, & .inner:nth-of-type(53) .inner:after {
  -webkit-animation-delay: -0.9636363636s;
          animation-delay: -0.9636363636s;
}
& .square:nth-of-type(53):before, & .square:nth-of-type(53) .inner:before, & .inner:nth-of-type(53):before, & .inner:nth-of-type(53) .inner:before {
  box-shadow: inset -2px 0 0 #00ffc4, -2px 0 0 #00ffc4, inset 2px 0 0 #00ffc4, 2px 0 0 #00ffc4;
}
& .square:nth-of-type(53):after, & .square:nth-of-type(53) .inner:after, & .inner:nth-of-type(53):after, & .inner:nth-of-type(53) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffc4, 0 2px 0 0 #00ffc4, inset 0 -2px 0 0 #00ffc4, 0 -2px 0 0 #00ffc4;
}
& .square:nth-of-type(54):before, & .square:nth-of-type(54):after, & .square:nth-of-type(54) .inner:before, & .square:nth-of-type(54) .inner:after, & .inner:nth-of-type(54):before, & .inner:nth-of-type(54):after, & .inner:nth-of-type(54) .inner:before, & .inner:nth-of-type(54) .inner:after {
  -webkit-animation-delay: -0.9818181818s;
          animation-delay: -0.9818181818s;
}
& .square:nth-of-type(54):before, & .square:nth-of-type(54) .inner:before, & .inner:nth-of-type(54):before, & .inner:nth-of-type(54) .inner:before {
  box-shadow: inset -2px 0 0 #00ffcc, -2px 0 0 #00ffcc, inset 2px 0 0 #00ffcc, 2px 0 0 #00ffcc;
}
& .square:nth-of-type(54):after, & .square:nth-of-type(54) .inner:after, & .inner:nth-of-type(54):after, & .inner:nth-of-type(54) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffcc, 0 2px 0 0 #00ffcc, inset 0 -2px 0 0 #00ffcc, 0 -2px 0 0 #00ffcc;
}
& .square:nth-of-type(55):before, & .square:nth-of-type(55):after, & .square:nth-of-type(55) .inner:before, & .square:nth-of-type(55) .inner:after, & .inner:nth-of-type(55):before, & .inner:nth-of-type(55):after, & .inner:nth-of-type(55) .inner:before, & .inner:nth-of-type(55) .inner:after {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
& .square:nth-of-type(55):before, & .square:nth-of-type(55) .inner:before, & .inner:nth-of-type(55):before, & .inner:nth-of-type(55) .inner:before {
  box-shadow: inset -2px 0 0 #00ffd5, -2px 0 0 #00ffd5, inset 2px 0 0 #00ffd5, 2px 0 0 #00ffd5;
}
& .square:nth-of-type(55):after, & .square:nth-of-type(55) .inner:after, & .inner:nth-of-type(55):after, & .inner:nth-of-type(55) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffd5, 0 2px 0 0 #00ffd5, inset 0 -2px 0 0 #00ffd5, 0 -2px 0 0 #00ffd5;
}
& .square:nth-of-type(56):before, & .square:nth-of-type(56):after, & .square:nth-of-type(56) .inner:before, & .square:nth-of-type(56) .inner:after, & .inner:nth-of-type(56):before, & .inner:nth-of-type(56):after, & .inner:nth-of-type(56) .inner:before, & .inner:nth-of-type(56) .inner:after {
  -webkit-animation-delay: -1.0181818182s;
          animation-delay: -1.0181818182s;
}
& .square:nth-of-type(56):before, & .square:nth-of-type(56) .inner:before, & .inner:nth-of-type(56):before, & .inner:nth-of-type(56) .inner:before {
  box-shadow: inset -2px 0 0 #00ffdd, -2px 0 0 #00ffdd, inset 2px 0 0 #00ffdd, 2px 0 0 #00ffdd;
}
& .square:nth-of-type(56):after, & .square:nth-of-type(56) .inner:after, & .inner:nth-of-type(56):after, & .inner:nth-of-type(56) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffdd, 0 2px 0 0 #00ffdd, inset 0 -2px 0 0 #00ffdd, 0 -2px 0 0 #00ffdd;
}
& .square:nth-of-type(57):before, & .square:nth-of-type(57):after, & .square:nth-of-type(57) .inner:before, & .square:nth-of-type(57) .inner:after, & .inner:nth-of-type(57):before, & .inner:nth-of-type(57):after, & .inner:nth-of-type(57) .inner:before, & .inner:nth-of-type(57) .inner:after {
  -webkit-animation-delay: -1.0363636364s;
          animation-delay: -1.0363636364s;
}
& .square:nth-of-type(57):before, & .square:nth-of-type(57) .inner:before, & .inner:nth-of-type(57):before, & .inner:nth-of-type(57) .inner:before {
  box-shadow: inset -2px 0 0 #00ffe6, -2px 0 0 #00ffe6, inset 2px 0 0 #00ffe6, 2px 0 0 #00ffe6;
}
& .square:nth-of-type(57):after, & .square:nth-of-type(57) .inner:after, & .inner:nth-of-type(57):after, & .inner:nth-of-type(57) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffe6, 0 2px 0 0 #00ffe6, inset 0 -2px 0 0 #00ffe6, 0 -2px 0 0 #00ffe6;
}
& .square:nth-of-type(58):before, & .square:nth-of-type(58):after, & .square:nth-of-type(58) .inner:before, & .square:nth-of-type(58) .inner:after, & .inner:nth-of-type(58):before, & .inner:nth-of-type(58):after, & .inner:nth-of-type(58) .inner:before, & .inner:nth-of-type(58) .inner:after {
  -webkit-animation-delay: -1.0545454545s;
          animation-delay: -1.0545454545s;
}
& .square:nth-of-type(58):before, & .square:nth-of-type(58) .inner:before, & .inner:nth-of-type(58):before, & .inner:nth-of-type(58) .inner:before {
  box-shadow: inset -2px 0 0 #00ffee, -2px 0 0 #00ffee, inset 2px 0 0 #00ffee, 2px 0 0 #00ffee;
}
& .square:nth-of-type(58):after, & .square:nth-of-type(58) .inner:after, & .inner:nth-of-type(58):after, & .inner:nth-of-type(58) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ffee, 0 2px 0 0 #00ffee, inset 0 -2px 0 0 #00ffee, 0 -2px 0 0 #00ffee;
}
& .square:nth-of-type(59):before, & .square:nth-of-type(59):after, & .square:nth-of-type(59) .inner:before, & .square:nth-of-type(59) .inner:after, & .inner:nth-of-type(59):before, & .inner:nth-of-type(59):after, & .inner:nth-of-type(59) .inner:before, & .inner:nth-of-type(59) .inner:after {
  -webkit-animation-delay: -1.0727272727s;
          animation-delay: -1.0727272727s;
}
& .square:nth-of-type(59):before, & .square:nth-of-type(59) .inner:before, & .inner:nth-of-type(59):before, & .inner:nth-of-type(59) .inner:before {
  box-shadow: inset -2px 0 0 #00fff7, -2px 0 0 #00fff7, inset 2px 0 0 #00fff7, 2px 0 0 #00fff7;
}
& .square:nth-of-type(59):after, & .square:nth-of-type(59) .inner:after, & .inner:nth-of-type(59):after, & .inner:nth-of-type(59) .inner:after {
  box-shadow: inset 0 2px 0 0 #00fff7, 0 2px 0 0 #00fff7, inset 0 -2px 0 0 #00fff7, 0 -2px 0 0 #00fff7;
}
& .square:nth-of-type(60):before, & .square:nth-of-type(60):after, & .square:nth-of-type(60) .inner:before, & .square:nth-of-type(60) .inner:after, & .inner:nth-of-type(60):before, & .inner:nth-of-type(60):after, & .inner:nth-of-type(60) .inner:before, & .inner:nth-of-type(60) .inner:after {
  -webkit-animation-delay: -1.0909090909s;
          animation-delay: -1.0909090909s;
}
& .square:nth-of-type(60):before, & .square:nth-of-type(60) .inner:before, & .inner:nth-of-type(60):before, & .inner:nth-of-type(60) .inner:before {
  box-shadow: inset -2px 0 0 cyan, -2px 0 0 cyan, inset 2px 0 0 cyan, 2px 0 0 cyan;
}
& .square:nth-of-type(60):after, & .square:nth-of-type(60) .inner:after, & .inner:nth-of-type(60):after, & .inner:nth-of-type(60) .inner:after {
  box-shadow: inset 0 2px 0 0 cyan, 0 2px 0 0 cyan, inset 0 -2px 0 0 cyan, 0 -2px 0 0 cyan;
}
& .square:nth-of-type(61):before, & .square:nth-of-type(61):after, & .square:nth-of-type(61) .inner:before, & .square:nth-of-type(61) .inner:after, & .inner:nth-of-type(61):before, & .inner:nth-of-type(61):after, & .inner:nth-of-type(61) .inner:before, & .inner:nth-of-type(61) .inner:after {
  -webkit-animation-delay: -1.1090909091s;
          animation-delay: -1.1090909091s;
}
& .square:nth-of-type(61):before, & .square:nth-of-type(61) .inner:before, & .inner:nth-of-type(61):before, & .inner:nth-of-type(61) .inner:before {
  box-shadow: inset -2px 0 0 #00f7ff, -2px 0 0 #00f7ff, inset 2px 0 0 #00f7ff, 2px 0 0 #00f7ff;
}
& .square:nth-of-type(61):after, & .square:nth-of-type(61) .inner:after, & .inner:nth-of-type(61):after, & .inner:nth-of-type(61) .inner:after {
  box-shadow: inset 0 2px 0 0 #00f7ff, 0 2px 0 0 #00f7ff, inset 0 -2px 0 0 #00f7ff, 0 -2px 0 0 #00f7ff;
}
& .square:nth-of-type(62):before, & .square:nth-of-type(62):after, & .square:nth-of-type(62) .inner:before, & .square:nth-of-type(62) .inner:after, & .inner:nth-of-type(62):before, & .inner:nth-of-type(62):after, & .inner:nth-of-type(62) .inner:before, & .inner:nth-of-type(62) .inner:after {
  -webkit-animation-delay: -1.1272727273s;
          animation-delay: -1.1272727273s;
}
& .square:nth-of-type(62):before, & .square:nth-of-type(62) .inner:before, & .inner:nth-of-type(62):before, & .inner:nth-of-type(62) .inner:before {
  box-shadow: inset -2px 0 0 #00eeff, -2px 0 0 #00eeff, inset 2px 0 0 #00eeff, 2px 0 0 #00eeff;
}
& .square:nth-of-type(62):after, & .square:nth-of-type(62) .inner:after, & .inner:nth-of-type(62):after, & .inner:nth-of-type(62) .inner:after {
  box-shadow: inset 0 2px 0 0 #00eeff, 0 2px 0 0 #00eeff, inset 0 -2px 0 0 #00eeff, 0 -2px 0 0 #00eeff;
}
& .square:nth-of-type(63):before, & .square:nth-of-type(63):after, & .square:nth-of-type(63) .inner:before, & .square:nth-of-type(63) .inner:after, & .inner:nth-of-type(63):before, & .inner:nth-of-type(63):after, & .inner:nth-of-type(63) .inner:before, & .inner:nth-of-type(63) .inner:after {
  -webkit-animation-delay: -1.1454545455s;
          animation-delay: -1.1454545455s;
}
& .square:nth-of-type(63):before, & .square:nth-of-type(63) .inner:before, & .inner:nth-of-type(63):before, & .inner:nth-of-type(63) .inner:before {
  box-shadow: inset -2px 0 0 #00e6ff, -2px 0 0 #00e6ff, inset 2px 0 0 #00e6ff, 2px 0 0 #00e6ff;
}
& .square:nth-of-type(63):after, & .square:nth-of-type(63) .inner:after, & .inner:nth-of-type(63):after, & .inner:nth-of-type(63) .inner:after {
  box-shadow: inset 0 2px 0 0 #00e6ff, 0 2px 0 0 #00e6ff, inset 0 -2px 0 0 #00e6ff, 0 -2px 0 0 #00e6ff;
}
& .square:nth-of-type(64):before, & .square:nth-of-type(64):after, & .square:nth-of-type(64) .inner:before, & .square:nth-of-type(64) .inner:after, & .inner:nth-of-type(64):before, & .inner:nth-of-type(64):after, & .inner:nth-of-type(64) .inner:before, & .inner:nth-of-type(64) .inner:after {
  -webkit-animation-delay: -1.1636363636s;
          animation-delay: -1.1636363636s;
}
& .square:nth-of-type(64):before, & .square:nth-of-type(64) .inner:before, & .inner:nth-of-type(64):before, & .inner:nth-of-type(64) .inner:before {
  box-shadow: inset -2px 0 0 #00ddff, -2px 0 0 #00ddff, inset 2px 0 0 #00ddff, 2px 0 0 #00ddff;
}
& .square:nth-of-type(64):after, & .square:nth-of-type(64) .inner:after, & .inner:nth-of-type(64):after, & .inner:nth-of-type(64) .inner:after {
  box-shadow: inset 0 2px 0 0 #00ddff, 0 2px 0 0 #00ddff, inset 0 -2px 0 0 #00ddff, 0 -2px 0 0 #00ddff;
}
& .square:before, & .square:after, & .inner:before, & .inner:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-animation: scaling1 2s ease-in-out infinite alternate;
          animation: scaling1 2s ease-in-out infinite alternate;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
}
@-webkit-keyframes scaling1 {
  50% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}
@keyframes scaling1 {
  50% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}
& .square:after, & .inner:after {
  -webkit-animation: scaling2 2s ease-in-out infinite alternate;
          animation: scaling2 2s ease-in-out infinite alternate;
  -webkit-transform: scaleX(0);
          transform: scaleX(0);
}
@-webkit-keyframes scaling2 {
  50% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
}
@keyframes scaling2 {
  50% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
}

`

LoadingGrid.defaultProps ={
  dimensions: 10
}

export default props =>
<LoadingGrid className='wrap'>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
  <div className='square'>
    <div className='inner'></div>
  </div>
</LoadingGrid>
