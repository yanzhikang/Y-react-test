import { withRouter } from 'react-router-dom';
import './header.css'
function YHeader(props) {
    const loginOut = ()=>{
        props.history.push('/login');
    }
    return (
        <>
            <div className='y-header' >
                <div>Yanzhi</div>
                <div className='y-Header-loginout'onClick={loginOut}>退出登录</div>
            </div>
        </>
    )
}

export default withRouter(YHeader)