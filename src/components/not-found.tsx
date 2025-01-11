import { routes } from "@/routes";
import { Link } from "react-router-dom";

export function NotFound() {
	return (
		<div className="grid h-[calc(100vh-45px)] w-[100vw-40px] place-content-center gap-4 sm:h-[calc(100vh-60px)] md:h-[calc(100vh-70px)] lg:h-[calc(100vh-100px)] lg:w-[100vw-64px]">
			<h1 className="text-center text-3xl font-semibold lg:text-4xl">Esta página no está disponible.</h1>
			<p className="text-center text-sm font-light lg:text-base">
				Es posible que el enlace que seleccionaste no funcione o que se haya eliminado la página.{" "}
				<Link to={{ pathname: routes.HOME }} className="text-primary-blue">
					Volver a inicio.
				</Link>
			</p>
			<div className="h-[45px]" />
		</div>
	);
}
