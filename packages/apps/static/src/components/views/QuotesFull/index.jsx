import React from "react";
import Slider from "react-slick";
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
        <Atom.Container maxWidth={700} py={4}>
        <Atom.Flex center column my={4}>
            <Atom.Image card circle maxWidth={200} my={3} p={1} alt='Vitalik' src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F41563522%2F960x0.jpg%3Ffit%3Dscale"
            />
            <Atom.Paragraph center>
            <em>
                The killerness of the ecosystem is not the nodes, it's the
                links - it's the fact that, every single application that
                gets built is not just an application in its own right, it's
                also a component that every future thing in the Ethereum
                ecosystem can benefit from..
            </em>
            </Atom.Paragraph>
            <cite>Vitalik Buterin - Etheruem Founder</cite>
        </Atom.Flex>
        </Atom.Container>
        </div>
        <div>
        <Atom.Container maxWidth={700} py={4}>
        <Atom.Flex center column my={4}>
            <Atom.Image card circle maxWidth={200} my={3} p={1} alt='Joe Lubin' src="https://media.xconomy.com/wordpress/wp-content/images/2017/10/06153519/Joe-Lubin.jpg"
            />
            <Atom.Paragraph center>
            <em>
            The killer characteristic of the Ethereum ecosystem is
                    composability - the fact that you can glue or compose a
                    bunch of different protocols or products together into a
                    more complex product, or that they can easily build upon one
                    another, permissionlessly, is a breakthrough. It was
                    described that the internet was architected in a way that if
                    it saw censorship, it would route around that censorship and
                    treat it as damage to the system. The decentralized world
                    wide web will see silos as damage, and route around those..
            </em>
            </Atom.Paragraph>
            <cite>Joe Lubin - Etheruem Founder</cite>
        </Atom.Flex>
        </Atom.Container>
        </div>
      </Slider>
    );
  }
}


export default SimpleSlider