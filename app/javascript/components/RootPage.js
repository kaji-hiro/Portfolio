import React from "react"
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Tab, Segment } from 'semantic-ui-react'
import Icon from '../images/icon.jpg'

const panes = [
  {
    menuItem: 'Home',
    render: () => <Tab.Pane attached={false}>
      <Segment.Group horizontal>
        <Segment>
          <img class="ui medium circular image" alt="アイコン" src={Icon} />
        </Segment>
        <Segment>
          Hiroaki Kajiyama<br>
          2000年 3月 22日生まれ<br>
          主な使用言語 Ruby,Ruby on Rails, Python, C, nim
        </Segment>
      </Segment.Group>
    </Tab.Pane>,
  },
  {
    menuItem: 'Links',
    render: () => <Tab.Pane attached={false}><a href='https://github.com/kaji-hiro'>github</a></Tab.Pane>,
  },
]

const RootPage = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)


export default RootPage
