import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
	canActivate: boolean
    state: boolean
	redirectPath: string
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	canActivate,
    state,
	redirectPath
}) => {
	if (canActivate === state) {
		return <Navigate to={redirectPath} replace />
	}
	return <Outlet />
}
