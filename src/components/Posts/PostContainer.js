import { connect } from 'react-redux';
import Post from './Post';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn,
  post: state.posts.post
});

export default connect(mapStateToProps, null)(Post);