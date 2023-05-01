const defaultValue = [
    {
        "id" : 1,
        "title" : "Random-Stuff App",
        "description" : "An application that sells random goods using the Fake store API and uses midtrans as payment and the RajaOngkir API to find out the shipping price from the city to be addressed",
        "techStack" : "Vue.js,Midtrans,Pinia,Vue-Router,RajaOngkir API,Nodemailer,JWT,Bcyrpt.js,Bootstrap",
        "webDeploy" : "https://individual-project-d3deb.web.app/login",
        "imgUrl" : "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80"
    },
    {
        "id" : 2,
        "title" : "Bread It ! (CMS-Admin Site)",
        "description" : "an admin-site that has a CRUD (create, read, update, delete) application, where we log in to this application as an admin who can do a crud system like an admin, CRUD applications are very important in making web",
        "techStack" : "React.js,Redux,ReduxThunk,React-Router,Tailwind.css,React-Router,JWT,Bcrypt.js,Sequelize.js,AWS,Firebase,Supabase",
        "webDeploy" : "https://breadit-admin.web.app/login",
        "imgUrl" : "https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
        "id" : 3,
        "title" : "Bread It ! (Client Site)",
        "description" : "an application that displays several menu pages and details of the menu, where in the details there are several such as menu prices, ingredients used and others",
        "techStack" : "React.js,Redux,ReduxThunk,React-Router,Tailwind.css,React-Router,Sequelize.js,AWS,Firebase,Supabase",
        "webDeploy" : "https://bread-it-a5608.web.app/",
        "imgUrl" : "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    }
]
export default function postReducer(state = defaultValue,action){
    if (action.type === 'posts/fetchsuccess') {
        return {
            ...state,
            item : action.payload
        }
    }
    else {
        return state
    }
}