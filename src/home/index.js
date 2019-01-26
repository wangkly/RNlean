import {connect} from 'react-redux';
import HomeScreen from './home';
import {mapDispatchToProps} from './mapdispatchtoprops';
import {mapStateToProps} from './mapstatetoprops';

const wraper = connect(mapStateToProps,mapDispatchToProps)(HomeScreen)

export default wraper;


