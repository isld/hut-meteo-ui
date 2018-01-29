import { connect } from 'react-redux';
import { changeDateTime } from '../store/actions';
import Clock from '../components/Clock';

const mapStateToProps = state => {
    return {
        dateTime: state.liveData.dateTime
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTick: dateTime => {
            dispatch(changeDateTime(dateTime))
        }
    };
};

const ClockContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Clock);

export default ClockContainer;