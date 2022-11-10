import React from 'react'
import {connect} from 'react-redux'

function App(props) {
  return (
    <>
        <h2>{props.msg}</h2>
        <button onClick={props.changeMsgFn}>modify msg</button>
        <br />
        
    </>
  )
}


// state映射
const mapStateToProps = (state) => {
    return {
        msg: state.msg
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        changeMsgFn(){
            let action = {type: 'changeMsg', value: 'hello world'}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)