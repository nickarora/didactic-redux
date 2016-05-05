import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap'
import * as CounterActions from 'actions/counter'

const Counter = ({ counter, actions }) =>
  <Row>
    <Col xs={12}>
      <h1>Count: {counter}</h1>
      <ButtonToolbar>
        <Button onClick={actions.increment}>+</Button>
        <Button onClick={actions.decrement}>-</Button>
      </ButtonToolbar>
    </Col>
  </Row>

const mapStateToProps = ({ counter }) => ({
  counter,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CounterActions, dispatch),
})

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
