import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router'

const path = (topic) => `/topic/${topic.id}`

const Topics = ({ topics }) =>
  <Row>
    <Col xs={6}>
      <h1>Topics</h1>
      <Table striped bordered condensed hover>
        <tbody>
          {topics.map((topic) =>
            <tr key={topic.id}>
              <td>
                <Link to={path(topic)}>{topic.title}</Link>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Col>
  </Row>

const mapStateToProps = ({ topics }) => ({
  topics,
})

Topics.propTypes = {
  topics: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Topics)
