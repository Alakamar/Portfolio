import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";

export const routes: Routes = [
	{
		path: "",
		redirectTo: "accueil",
		pathMatch: "full",
	},
	{
		path: "accueil",
		component: HomeComponent,
	},
	{
		path: "**",
		redirectTo: "accueil",
	},
];
