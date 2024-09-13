import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Element, requiredRole, ...rest }) => {
    const admission = useSelector((state) => state.auth.admission);
    console.log(admission)

    const hasAccess = requiredRole.some((role) => admission[role]);
    console.log(hasAccess)

    return hasAccess ? <Element /> : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
