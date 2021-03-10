
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

function LoginIn(props) {
    function test() {
        console.log('login in!')
        props.history.push('/home');
    }
    return (
        <div>
            <p>my name is yanzhi </p>
            <Button onClick={test} > login in </Button>
        </div>
    )
}
export default withRouter(LoginIn)