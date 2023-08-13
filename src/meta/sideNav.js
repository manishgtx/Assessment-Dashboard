import dashboardIcon from '../assets/images/sideNav/dashboard.svg'
import noteIcon from '../assets/images/sideNav/note.svg'
import quizIcon from '../assets/images/sideNav/quiz.svg'
import adminIcon from '../assets/images/sideNav/admin.svg'
export const sideNavItems = [
    {id:1,title:'Dashboard',icon:dashboardIcon,admin:false},
    {id:2,title:'Assessment',icon:noteIcon,admin:false},
    {id:3,title:'My Library',icon:quizIcon,admin:false},
    {id:4,title:'Round Status',icon:adminIcon,admin:true}
]