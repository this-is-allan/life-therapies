import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TherapiesActions } from "../../../store/ducks/therapies";

import PropTypes from "prop-types";
import {
  Col,
  Spinner,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import TherapyCard from "../../../components/Therapies/Card";

class TherapiesCardsList extends Component {
  componentDidMount = async () => {
    const {
      requestTherapies,
      requestTherapiesByCategory,
      category,
      page
    } = this.props;
    if (category) {
      requestTherapiesByCategory(page, category);
    } else {
      requestTherapies(page);
    }
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { category, page, requestTherapiesByCategory } = this.props;

    if (prevProps.category !== category) {
      await requestTherapiesByCategory(page, category);
    }
  };

  render() {
    const {
      therapies: { data, loading, error }
    } = this.props;

    return loading ? (
      <Col>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "-webkit-fill-available" }}
        >
          <Spinner style={{ width: "3rem", height: "3rem" }} color="primary" />
        </div>
      </Col>
    ) : (
      <React.Fragment>
        {data.map(therapy => (
          <Col key={therapy.id} md={3}>
            <TherapyCard therapy={therapy} />
          </Col>
        ))}
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </React.Fragment>
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
