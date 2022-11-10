// 定义默认数据
const defaultState = {
    msg: "hello react"
}

// 导出一个函数
// eslint-disable-next-line
export default (state=defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "changeMsg":
            newState.msg = action.value;
            break;
        default:
            break;
    }
    return newState;
}
