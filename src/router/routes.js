// 分片打包
import frame from '../components/frame'
const routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        name:"home",
        component:frame,
        // components:{
        //     default:frame,
        // }
    }
]
export default routes