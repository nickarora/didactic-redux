import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Col, Row } from 'react-bootstrap'

const Topics = (props) =>
  <Row>
    <Col xs={12}>
      <h1>Topics</h1>
      <p>{JSON.stringify(props.topics)}</p>
    </Col>
  </Row>

const mapStateToProps = ({ topics }) => ({
  topics,
})

Topics.propTypes = {
  topics: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Topics)
