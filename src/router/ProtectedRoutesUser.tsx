import { Redirect, Route } from 'react-router-dom'


import { routerPathProtectedUser , routerPathPublic } from './RouterPath'
import { RootState } from '../store/ConfigureStore'
import { useSelector } from 'react-redux'
import Example from '../screen/user/Example/Example'

function ProtectedRoutesUser() {

    const auth = useSelector((state: RootState) => state.account.auth)

    if(!auth){
      return <Redirect to={routerPathPublic.Login} />
    }

    return (
        <>
            <Route exact path={`${routerPathProtectedUser.Example}`} component={Example} />
        </>
    )
}

export default ProtectedRoutesUser