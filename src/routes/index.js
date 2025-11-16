import Home from "../pages/Home";
import Following from "../pages/Following";
import ProfilePage from "../pages/Profile";


const publicRoutes = [
    {path:'/',component: Home},
    {path:'/following',component: Following},
    {path:'/profile',component: ProfilePage},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };