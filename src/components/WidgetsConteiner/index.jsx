import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './WidgetsConteiner.module.scss';
import Widget from '../Widget';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { changeCity } from '../../models/widgets/actions';

class WidgetsConteiner extends React.PureComponent {
  componentDidMount() {
    this.loadInitialData();
  }

  loadInitialData = () => {
    const { dispatch } = this.props;
    const id = uuidv4();
    dispatch(changeCity(id, 'Warsaw'));
  };

  render() {
    const { dispatch } = this.props;
    const { allWidgets } = this.props;
    return (
      <div className={styles.widgetsConteiner}>
        {Object.keys(allWidgets).map((id) => <Widget key={id} id={id} dispatch={dispatch} {...allWidgets[id]} />)}
        <button type="button" onClick={this.loadInitialData} className={styles.addButton}>+ Add Widget</button>
      </div>
    );
  }
}
WidgetsConteiner.propTypes = {
  allWidgets: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  allWidgets: state.widgets.allWidgets,
});
export default connect(mapStateToProps)(WidgetsConteiner);
