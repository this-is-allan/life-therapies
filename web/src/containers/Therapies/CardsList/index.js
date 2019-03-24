import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
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

    if (prevProps.category !== category || prevProps.page !== page) {
      await requestTherapiesByCategory(page, category);
    }
  };

  render() {
    const {
      category,
      therapies: { data, loading, pagination, error }
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
          {[...Array(pagination.lastPage)].map((x, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                tag={Link}
                to={
                  category
                    ? `/${category}/page=${i + 1}`
                    : `/therapies/page=${i + 1}`
                }
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
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
