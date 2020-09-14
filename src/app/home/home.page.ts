import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ThemeService } from "../theme-service.service";

const themes = {
  light: {
    primary: "#0333ff",
    secondary: "#4D9078",
    tertiary: "#0333ff",
    medium: "#0333ff",
    dark: "#000333",
    light: "#f4f6ff",
  },
  green: {
    primary: "#fff",
    secondary: "#FCFF6C",
    tertiary: "#0333ff",
    medium: "#ffdf00",
    dark: "#0333ff",
    light: "green",
  },
  yellow: {
    primary: "#39BFBD",
    secondary: "#4CE0B3",
    tertiary: "#000333",
    medium: "#0333ff",
    dark: "#000333",
    light: "#ffdf00",
  },
};

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage  implements OnInit   {
  articles;

  constructor(private theme: ThemeService,private dataService: DataService) {}

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val) {
    this.theme.setVariable("--speed", `${val}ms`);
  }
  ngOnInit() {
    this.dataService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data;
    });
  }
}
