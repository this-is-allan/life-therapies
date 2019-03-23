import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TherapiesActions } from "../../../store/ducks/therapies";

import PropTypes from "prop-types";
import { Col } from "reactstrap";

import TherapyCard from "../../../components/Therapies/Card";

class TherapiesCardsList extends Component {
  componentDidMount = async () => {
    const {
      category,
      requestTherapies,
      requestTherapiesByCategory
    } = this.props;

    if (category) {
      requestTherapiesByCategory(category);
    } else {
      requestTherapies();
    }
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { category, requestTherapiesByCategory } = this.props;

    if (prevProps.category !== category) {
      await requestTherapiesByCategory(category);
    }
  };

  render() {
    const {
      therapies: { data, loading, error }
    } = this.props;

    return loading ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ) : (
      data.map(therapy => (
        <Col key={therapy.id} md={3}>
          <TherapyCard therapy={therapy} />
        </Col>
      ))
    );
  }
}

TherapiesCardsList.propTypes = {
  category: PropTypes.string
};

const mapStateToProps = ({ therapies }) => ({
  therapies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TherapiesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TherapiesCardsList);
