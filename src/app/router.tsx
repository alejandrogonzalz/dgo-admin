import { Home } from "@/app/home";
import { Login } from "@/app/login";
import { UploadServices } from "@/app/services/upload-services";
import { Layout } from "@/components/layout";
import { NotFound } from "@/components/not-found";
import { routes } from "@/routes";
import { BrowserRouter, Route, Routes } from "react-router";
import { CalendarPage } from "./calendar";
import { Services } from "./services";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<Login />} />

				<Route element={<Layout />}>
					<Route index path={routes.HOME} element={<Home />} />
					<Route path={routes.UPLOAD_SERVICES} element={<UploadServices />} />
					<Route path={routes.SERVICES} element={<Services />} />
					<Route path={routes.CALENDAR} element={<CalendarPage />} />

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
