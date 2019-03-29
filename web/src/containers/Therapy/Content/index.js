import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Spinner } from "reactstrap";
import { Creators as TherapyActions } from "../../../store/ducks/therapy";

import ShowTherapy from "../../../components/Therapy/ShowTherapy";
import ImagesCarousel from "../../../components/Therapies/ImagesCarousel";

class TherapyContent extends Component {
  componentDidMount = async () => {
    const { requestTherapy, id } = this.props;
    requestTherapy(id);
  };

  render() {
    const { therapy, loading } = this.props;

    return loading ? (
      <Row className="w-100">
        <Col className="d-flex justify-content-center">
          <Spinner style={{ margin: "50px 0" }} color="primary" type="grow" />
        </Col>
      </Row>
    ) : (
      <section className="section-therapy-details">
        <ShowTherapy therapy={therapy} />
      </section>
    );
  }
}

const mapStateToProps = ({ therapy }) => ({
  therapy: therapy.data,
  loading: therapy.loading,
  error: therapy.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TherapyActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TherapyContent);
