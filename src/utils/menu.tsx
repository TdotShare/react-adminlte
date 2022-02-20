import { routerPathProtectedAdmin, routerPathProtectedUser } from "../router/RouterPath";

interface MenuApp {
    id: number;
    name: string;
    icon : string;
    link : string;
}

const AdminDataMenu : MenuApp[] =[
    {
        id : 1 ,
        name : "Dashboard",
        icon : "far fa-image",
        link : routerPathProtectedAdmin.Dashboard
    },
]


const UserDataMenu : MenuApp[] =[
    {
        id : 1 ,
        name : "Example",
        icon : "far fa-image",
        link : routerPathProtectedUser.Example
    },
]


const exportedMenuApp = {
    AdminDataMenu,
    UserDataMenu
};

export default exportedMenuApp;