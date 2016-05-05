import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router'

import find from 'lodash/find'
import filter from 'lodash/filter'

const path = (topicId, card) => `/topic/${topicId}/card/${card.id}`

const topic = (topics, id) => find(topics, { id }) || { title: 'Topic Not Found' }
const topicCards = (cards, topicId) => filter(cards, { topicId }) || []

const Topic = ({ topicId, cards, topics }) =>
  <Row>
    <Col xs={6}>
      <h1>{topic(topics, topicId).title}</h1>
      <Table striped bordered condensed hover>
        <tbody>
          {topicCards(cards, topicId).map((card) =>
            <tr key={card.id}>
              <td>
                <Link to={path(topicId, card)}>{card.word}</Link>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Col>
  </Row>

const mapStateToProps = ({ topics, cards }, ownProps) => ({
  topicId: parseInt(ownProps.params.topicId, 10),
  cards,
  topics,
})

Topic.propTypes = {
  topicId: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Topic)
