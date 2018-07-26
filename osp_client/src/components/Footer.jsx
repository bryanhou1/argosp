import React, { Component } from 'react'
import { Grid, Container, Button, Icon, Header, List, Segment} from 'semantic-ui-react'
import TeamLogo from '../photoAssets/TeamLogo.png'

export default class Footer extends Component {
  state = {}

  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a' href="mailto:caozhichongchong@gmail.com,bhou@hku.hk">Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Related Links' />
                <List link inverted>
                  <List.Item as='a' href='http://web.hku.hk/~zhangt/ZhangT.htm'>HKU Environmental Biotechnology Lab</List.Item>
                  <List.Item as='a' href='https://smile.hku.hk/SARGs'>Other tools</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                {/* <Header as='h4' inverted></Header> */}
                <p>This is a currently a trial version. For feedback, you can contact us <a href="mailto:caozhichongchong@gmail.com,bhou@hku.hk">here</a></p>
                <p>HKU Environmental Biotechnology Lab © 2018</p>
                <Container>
                  <Button icon color='twitter'>
                    <a href="https://twitter.com/HKU_LG209" target="_blank" rel="noopener noreferrer">
                      <Icon name='twitter' inverted />
                    </a>
                  </Button>
                  <Button icon color='youtube'>
                    <a href="https://www.youtube.com/channel/UCOalHVOYWK9A-SnWTJryKHw" target="_blank"  rel="noopener noreferrer">
                      <Icon name='youtube' inverted />
                    </a>
                  </Button>
                </Container>
              </Grid.Column>
              <Grid.Column width={3} verticalAlign="middle">
                <a href="http://web.hku.hk/~zhangt/ZhangT.htm" target="_blank" rel="noopener noreferrer">
                  <img src={TeamLogo} alt="HKU Environmental Biotechnology Lab" style={{width: "120px", height: "120px"}}/>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}




