import React, { Component } from 'react';
import './App.css';
import {Grid, Header, Segment} from "semantic-ui-react"

import TopCarousel from '../components/TopCarousel.jsx'
import ExampleCarousel from '../components/ExampleCarousel.jsx'
// import Fig1 from '../photoAssets/Fig1.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.gridWidth = 14;
  }
  
  header = () => (
    <Segment basic>
      <Header as='h1'>
        <Header.Content>
          ARGs-OSP v1.0: Antibiotic Resistant Genes Online Searching Platform
        </Header.Content>
      </Header>
    </Segment>
  )

  topCarousel = () => <TopCarousel />
  definition = () => (
    <Segment basic>
      <div>
        <h2>What is ARGs-OSP?</h2>
        <p>ARGs-OSP is online search platfrom that provides a global ARG profile covering the information of their phylogenetic and ecological distribution. Search and download functionality are designed for users to retrieve the occurrence of ARGs in different taxonomy and the abundance of ARGs in different habitats. Through data sharing, ARGs-OSP aims to motivate and facilitate future studies into mining new information and knowledge from the combined data, without making repeated efforts in dataset processing. <br /></p>
      </div>
    </Segment>
  )

  dataSource = () => (
    <Segment basic>
      <div>
        <h2>Data Source</h2>
        <p>We identified and quantified all the ARGs from two source using two standard pipelines, the ARGs online analysis platform (<a href="http://smile.hku.hk/SARGs">ARGs-OAP v1.0</a>)[1] and integron identification and visualization pipeline (I-VIP) (manuscript under review):<br /></p>
        <ul>
          <li><strong>Bacterial whole genome database (WGD):</strong> 54,718 bacterial genomes (7,770 complete genomes and 46,948 draft genomes with medium and high quality of more than 50% completeness from NCBI Genome database.</li>
          <li><strong>The Metagenome Database (MGD):</strong> 854 metagenomic datasets were downloaded from NCBI SRA database and MG-RAST, which were all generated through Illumina shotgun sequencing. The habitat information of the metadata of all samples was manually organized to categorize them into totally 25 eco-subtypes of 7 eco-types.</li>
        </ul>
        <p>The mothertables of the ARGs’ occurrence and abundance on ARGs-OSP are published along with the metadata information.</p>
      </div>
    </Segment>
  )

  searchableParams = () => (
    <div>
        <h2>Searchable Parameters</h2>
        <ul>
          <li><strong>ARGs</strong></li>
          <ul>
            <li>Sequence, Subtype and Type</li>
          </ul>
          <li><strong>The host information for whole genomes</strong></li>
          <ul>
            <li>Genome, Accession, Organism, Assembly level, Phylum, Class, Order, Family, Genus, Species, Strain, and Pathogen</li>
          </ul>
          <li><strong>The habitat information for metagenomes</strong></li>
          <ul>
            <li>Accession, Eco-subtype, and Eco-type</li>
          </ul>
          <li><strong>The searching criteria</strong></li>
          <ul>
            <li>Identity, Hit-length or Hit-ratio, and E-value</li>
          </ul>
        </ul>
    </div>
  )

  downloadExplanation = () => (
    <div>
      <h2>Downloadable Content</h2>
      <p>The occurrence of ARGs in different taxonomy (Whole Genomes) and the abundance of ARGs in different habitats (Metagenomes) are available for download post search. Three different abundance units (copy per cell, copy per 16S and ppm) are provided for ease of comparison.<br /></p>
    </div>
  )

  // pic1 = () => (
  //   <Segment basic>
  //     <Image name="Fig1" src={Fig1} rounded centered />
  //     <label htmlFor="Fig1">Fig. 1. <em>The phylogenetic relationship of all 54,718 bacterial genomes of 45 phyla in WGD and the occurrence of ARGs (blue nodes) and Rank I ARGs (red nodes). The pathogenic strains were indicated by purple edges.</em></label>
  //   </Segment>
  // )

  references = () => (
    <div>
      [1]   <em>Yang Y, Jiang X, Chai B, Ma L, Li B, Zhang A, et al. ARGs-OAP: online analysis pipeline for antibiotic resistance genes detection from metagenomic data using an integrated structured ARG-database. Bioinformatics. 2016;  doi:10.1093/bioinformatics/btw136.</em>
    </div>
  )

  citation = () => (
    <div>
      <h2>How to Cite</h2>
      <ul>
        <li><strong>ARGs-OSP: online searching platform for antibiotic resistance genes distribution in metagenomic database and bacterial whole genome database</strong><br/>
          An Ni Zhang, Chen-Ju Hou, Li-Guan Li, Tong Zhang <br/>
          bioRxiv 337675; doi: <a href="https://doi.org/10.1101/337675" target="_blank" rel="noopener noreferrer">https://doi.org/10.1101/337675</a>
        </li>
      </ul>
    </div>
  )
  
  exampleUsage = () => (
    <Segment basic>
      <h2>Example usage</h2>
                  
      <Grid centered>
        <Grid.Row>
          <Grid.Column mobile={15} tablet={10} computer={10}>
            <ExampleCarousel/> 
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br/><br/>
      In additional to the usages above, the users can conveniently compare the global profile to the ARG results of their local samples from <a href="http://smile.hku.hk/SARGs">ARGs-OAP v1.0</a>.
    </Segment>
  )

  render() {
    return (
      <div>
        <Segment vertical style={{ padding: '2em 0em' }}>
          <Grid stackable centered>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                {this.header()}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                {this.topCarousel()}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                {this.definition()}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row divided>
              <Grid.Column width={Math.floor(this.gridWidth/2)}>
                {this.dataSource()}
              </Grid.Column>
              <Grid.Column width={Math.ceil(this.gridWidth/2)}>
                <Segment basic>
                  {this.searchableParams()}
                  {this.downloadExplanation()}
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                {this.exampleUsage()}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                {this.references()}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={this.gridWidth}>
                {this.citation()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default App;