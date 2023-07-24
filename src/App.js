import React from "react";
import {connect} from 'react-redux'

class App extends React.Component{
    render(){
      console.log(this.props)
      return <div>
        <span>12345</span>
      </div>
    }
}

const mapStateToProps = ({userInfoReducer,  }) => {
  return {
    userInfo: userInfoReducer
  }
}
export default connect(
  mapStateToProps,
)(App);
