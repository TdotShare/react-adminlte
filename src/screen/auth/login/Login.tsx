import React from 'react'
import Headerbase from '../../../components/template/Header'
import { systemConfig } from '../../../config/System'
import WrapperContent from '../../../components/template/WrapperContent'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addAccount, setLoginSuccess } from '../../../store/reducer/Account'
import { routerPathProtectedAdmin } from '../../../router/RouterPath'

function Login() {

    return (
        <WrapperContent childrenContent={Pages()} childrenHeader={<Headerbase name='' breadlist={undefined} />} />
    )
}

function Pages() {

    const history = useHistory()
    const dispatch = useDispatch()


    const actionLogin = () =>{

        dispatch(addAccount({
            email: `test@test.com`,
            username: ``,
            fullname: `Jirayu Tester`,
            token: ``
        }))
        dispatch(setLoginSuccess())

        history.push(routerPathProtectedAdmin.Dashboard)
    }

    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >

            <h4>{systemConfig.NameFull}</h4>
            <h5>มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน</h5>

            <div style={{paddingBottom : 20}}></div>

            <div className='card'>
                <div className='card-body login-card-body'>

                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Email" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col'>
                            <button onClick={actionLogin}  className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login