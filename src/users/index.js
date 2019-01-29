import {connect} from 'react-redux';
import {mapStateToProps} from './mapstatetoprops';
import {mapDispatchToProps} from './mapdispatchtoprops';
import UserList from './user-list';

let wraper = connect(mapStateToProps,mapDispatchToProps)(UserList);

export default wraper;