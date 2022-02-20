import { Redirect, Route } from 'react-router-dom'


import { routerPathProtectedAdmin, routerPathPublic } from './RouterPath'
import { RootState } from '../store/ConfigureStore'
import { useSelector } from 'react-redux'
import Dashboard from '../screen/admin/Dashboard/Dashboard'

function ProtectedRoutesAdmin() {

    const auth = useSelector((state: RootState) => state.account.auth)

    if(!auth){
      return <Redirect to={routerPathPublic.Login} />
    }

    return (
        <>
            <Route exact path={`${routerPathProtectedAdmin.Dashboard}`} component={Dashboard} />
        </>
    )
}

export default ProtectedRoutesAdmin