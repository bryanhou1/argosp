import React from 'react'
import ResearchGate from '../photoAssets/researchGate.ico'
import { Card, Button, Grid, Image} from 'semantic-ui-react'
import Anni from '../photoAssets/Anni.jpeg'
import Bryan from '../photoAssets/Bryan.jpg'
import Tong from '../photoAssets/Tong.jpg'
import TeamLogo from '../photoAssets/TeamLogo.png'

const About = () => {
  return (
    <Grid >
      <Grid.Row centered>
        <Grid.Column mobile={15} tablet={14} computer={13}>
          <div style={{paddingTop: "2em"}}>
            <h1>Team</h1>
          </div>
          <Card.Group>
            {TongCard()}
            {AnniCard()}
            {BryanCard()}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column mobile={15} tablet={14} computer={13}>
          <div>
            <h1>Organization</h1>
          </div>
          <Grid celled="internally">
            <Grid.Row>
              <Grid.Column mobile={4} tablet={3} computer={2}>
                <Image src={TeamLogo} as='a' href='http://web.hku.hk/~zhangt/ZhangT.htm' target='_blank'size="small" />
              </Grid.Column>
              <Grid.Column mobile={12} tablet={13} computer={14} >
                <h2>Environmental Biotechnology Lab</h2>
                Team led by Prof. Zhang Tong researching on ARG, NGS, bioremediation, bioreactor, bioenergy recovery and more.
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      </Grid.Row>
    </Grid>
  )
}

const AnniCard = () => {
  const extra = (
    <div>
      <a href="https://youtu.be/4RQBEILzm-4" target="_blank" rel="noopener noreferrer"><Button circular color='youtube' icon='youtube'/></a>
      <a href="https://github.com/caozhichongchong" target="_blank" rel="noopener noreferrer"><Button circular color='grey' icon='github'/></a>
      <a href="https://twitter.com/annizhanghku" target="_blank" rel="noopener noreferrer"><Button circular color='twitter' icon='twitter'/></a>
      <a href="mailto:caozhichongchong@gmail.com"><Button circular color='blue' icon='mail'/></a>
      <a href="https://www.researchgate.net/profile/An_Ni_Zhang" target="_blank" rel="noopener noreferrer"><Button circular color='teal' icon={<img src={ResearchGate} alt="researchgate" style={{width: 14, height: 14}}/>}/></a>
      
      
    </div>
  )
  
  const description = (
    <div>
      <strong>Research strengths:</strong>
      <ul>
        <li>Bioinformatics pipeline development and big data analysis</li>
        <li>Information integration and visualization</li>
        <li>Antibiotic resistance and mobile genetic elements</li>
        <li>Microbial metabolism</li>
      </ul>
    </div>
  )

  const meta = (
    <div className="meta">
      PhD Student
      <br/>
      Environmental Biotechnology Lab
      <br/>
      University of Hong Kong
      <br/>
    </div>

  )

  return (
    <Card
      image={Anni}
      header='An Ni ZHANG'
      description={description}
      meta={meta}
      extra={extra}
    />
  )
}

const BryanCard = () => {
  const extra = (
    <div>
      <a href="mailto:bhou@hku.hk"><Button circular color='blue' icon='mail'/></a>
      <a href="https://www.linkedin.com/in/bryan-hou-212407a5" target="_blank" rel="noopener noreferrer"><Button circular color='linkedin' icon='linkedin'/></a>
      <a href="https://github.com/bryanhou1" target="_blank" rel="noopener noreferrer"><Button circular color='grey' icon='github'/></a>
      
    </div>
  )
  
  const description = (
    <div>

    </div>
  )

  const meta = (
    <div className="meta">
      Research Assistant
      <br/>
      Environmental Biotechnology Lab
      <br/>
      University of Hong Kong
      <br/>
    </div>

  )

  return (
    <Card
      image={Bryan}
      header='Chen-Ju Bryan HOU'
      description={description}
      meta={meta}
      extra={extra}
    />
  )
}

const TongCard = () => {
  const extra = (
    <div>
      <a href="https://twitter.com/zhangt1968" target="_blank" rel="noopener noreferrer"><Button circular color='twitter' icon='twitter'/></a>
      <a href="mailto:zhangt@hku.hk"><Button circular color='blue' icon='mail'/></a>
      <a href="https://www.researchgate.net/profile/Tong_Zhang_15" target="_blank" rel="noopener noreferrer"><Button circular color='teal' icon={<img src={ResearchGate} alt="researchgate" style={{width: 14, height: 14}}/>}/></a>
    </div>
  )
  
  const description = (
    <div>
      <strong>Research interests:</strong>
      <ul>
        <li>Microbial population dynamics in full-scale WWTPs</li>
        <li>Major functional groups in biological wastewater treatment</li>
        <li>Antibiotics and antibiotics resistance genes in WWTPs and related environments</li>
        <li>Novel microbial populations and genes in waste/wastewater treatment</li>
      </ul>
    </div>
  )

  const meta = (
    <div className="meta">
      Professor
      <br/>
      Environmental Biotechnology Lab
      <br/>
      University of Hong Kong
      <br/>
    </div>
  )

  return (
    <Card
      image={Tong}
      header='Ir. Dr. Tong ZHANG'
      description={description}
      meta={meta}
      extra={extra}
    />
  )
}

export default About;