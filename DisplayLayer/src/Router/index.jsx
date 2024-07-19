import { createBrowserRouter} from "react-router-dom";
import App from "../DesignPage/Home/app";
import ExamplePage from "../ExamplePage/example";
import Display from "../DisplayPage/display";

const router = createBrowserRouter([
    {
        path:'/design',
        element: <App></App>
    },
    {
        path:'/display',
        element:<Display></Display>,   
    },
    {
        path:'/',
        element:<ExamplePage></ExamplePage>,   
    }
])

export default router;