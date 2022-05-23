import { Navigate } from "react-router-dom";

const PrivateRouters = ({isAut, children}) => {
        return isAut
        ?children
        :<Navigate to="/login"/>
};

export default PrivateRouters;