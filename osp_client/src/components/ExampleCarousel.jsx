import React from "react";
import Slider from "react-slick";
import Ex1 from '../photoAssets/examples/Ex1.jpg';
import Ex2 from '../photoAssets/examples/Ex2.jpg';
import Ex3 from '../photoAssets/examples/Ex3.jpg';
import Ex4 from '../photoAssets/examples/Ex4.jpg';
import Ex5 from '../photoAssets/examples/Ex5.jpg';
import {Image, Label, Segment} from 'semantic-ui-react';

class Carousel extends React.Component {
  ex = (image, labelText) => (
    <Segment>
      <Image src={image} rounded fluid centered style={{paddingBottom: "2em"}}/>
      <Label attached='bottom'>{labelText}</Label>
    </Segment>
  )
  //lackluster, fix later
  render() {
    let settings = {
      dots: true,
      infinite: true,
      arrows: true,
      fade: true,
      cssEase: 'linear',
    };
    return (
      <Slider {...settings}>
        {this.ex(Ex1, "The current host range of some specific resistant genes, such as tetA, on the bacterial phylogenetic tree (Whole Genomes).")}
        {this.ex(Ex2, "The current host range of some specific resistant genes in a bacterial taxon such as tetA in Proteobacteria (Whole Genomes).")}
        {this.ex(Ex3, "The dissemination of some specific resistant genes, such as aadA, in both the natural and anthropogenic habitats (Metagenomes).")}
        {this.ex(Ex4, "The dissemination of some specific resistant genes in some anthropogenic habitat, such as aadA in human feces (Metagenomes).")}
        {this.ex(Ex5, "All the antibiotic resistome currently detected in some specific taxa or specific environments, such as Proteobacteria (Whole genomes) or human feces (Metagenomes).")}
      </Slider>
    );
  }
}

export default Carousel;
