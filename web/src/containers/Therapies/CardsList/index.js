import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Creators as TherapiesActions } from "../../../store/ducks/therapies";
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from "prop-types";
import { Col, Spinner } from "reactstrap";

import TherapyCard from "../../../components/Therapies/Card";

class TherapiesCardsList extends Component {
  state = {
    activePage: 1,
    hasMore: true
  };

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

  fetchMoreData = async () => {
    const {
      therapies: {
        pagination: { page, lastPage }
      },
      category,
      pagination,
      requestInfiniteTherapies,
      requestInfiniteTherapiesByCategory
    } = this.props;

    setTimeout(async () => {
      if (category) {
        await requestInfiniteTherapiesByCategory(
          this.state.activePage,
          category
        );
      } else {
        await requestInfiniteTherapies(this.state.activePage);
      }
    }, 1500);

    if (page == lastPage) this.setState({ hasMore: false });

    this.setState({ activePage: this.state.activePage + 1 });
  };

  render() {
    const {
      category,
      therapies: { data, loading, pagination, error }
    } = this.props;

    return (
      <React.Fragment>
        <InfiniteScroll
          className="row"
          dataLength={data.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          scrollThreshold={0.9}
          loader={
            <Col>
              <div className="d-flex justify-content-center">
                <Spinner
                  style={{ margin: "50px 0" }}
                  color="primary"
                  type="grow"
                />
              </div>
            </Col>
          }
          refreshFunction={() => this.refresh}
        >
          {data.map(therapy => (
            <Col key={therapy.id} md={3}>
              <TherapyCard therapy={therapy} />
            </Col>
          ))}
        </InfiniteScroll>
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
