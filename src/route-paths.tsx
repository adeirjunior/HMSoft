import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import ErrorPage from "@/routes/error-page";
import OlaPage from "@/routes/ola";
import SignInPage from "@/routes/(auth)/signin";
import Dashboard from "@/routes/dashboard";
import DashboardLayout from "@/components/layout/dashboard-layout";
import Layout from "@/components/layout/layout";
import UserPage from "./routes/user";
import ProfilePage from "./routes/profile";
import EmployeePage from "./routes/employee";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route errorElement={<ErrorPage />} element={<Layout><Outlet /></Layout>}>
        <Route index element={<SignInPage />} />
        <Route errorElement={<ErrorPage />} element={<DashboardLayout><Outlet /></DashboardLayout>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/user" element={<UserPage />} />
            <Route path="dashboard/profile" element={<ProfilePage />} />
            <Route path="dashboard/employee" element={<EmployeePage />} />
            <Route path="dashboard/kanban" element={<OlaPage />} />
        </Route>
    </Route>
));
