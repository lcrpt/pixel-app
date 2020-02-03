import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, getPosts } from '../../actionCreators';

import User from './User';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn,
  user: state.users.user,
  postList: state.posts.postList
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getUser,
    getPosts
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
