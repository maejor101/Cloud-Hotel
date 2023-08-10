import { Route, Routes, Navigate, Link } from "react-router-dom";

const USER_TYPES = {
    PUBLIC: "Public User",
    NORMAL_USER: "Normal User",
    ADMIN_USER: "Admin User",
};

const CURRENT_USER_TYPE = USER_TYPES.NORMAL_USER;
function App() {
    return (
        <div>


            <div style={{ display: 'flex', gap: 12, padding: 8 }}>
            <Link to={"/"}>
                        Home
                    </Link>
                {(CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) ? <>
                   
                    <Link to={"/user"}>
                        User
                    </Link>
                </>:null}

                {(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) ? <>
                    <Link to={"/admin"}>
                    Admin
                </Link>
                </>:null}
                
                <div>You are logged in as: {CURRENT_USER_TYPE}</div>
            </div>
            <AppRoutes />
        </div>
    );
}
function AppRoutes() {


    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicElement>
                            <Home />
                        </PublicElement>
                    }
                ></Route>
                <Route path="/user" element={<UserElement><User /></UserElement>}></Route>
                <Route path="/admin" element={<AdminElement><Admin /></AdminElement>}></Route>
                <Route path="*" element={<div>Page Not Found!!</div>}></Route>
            </Routes>
        </div>
    );
}

function Home() {
    return <div>Home</div>;
}

function User() {
    return <div>User page</div>;
}

function Admin() {
    return <div>Admin page</div>;
}

function PublicElement({ children }) {
    return <>{children}</>;
}


function UserElement({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
        return <>{children}</>;
    } else {
        return <Navigate to={'/'} />
        // return <div>You do not have access to this page</div>
    }
    return <>{children}</>;
}

function AdminElement({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
        return <>{children}</>;
    } else {
        return <Navigate to={'/'} />
        // return <div>You do not have access to this page</div>
    }
    return <>{children}</>;
}
export default App;
