import { Component } from "@angular/core"
// Component: được gọi là decorator => 1 tinhs nangw cuar typescript

@Component({
    selector: "app-header",
    // template: `
    //     <h1>Header</h1>
    //     <p> This is a header</p>
    //     <p>abc</p>
    // `,
    // styles: [`
    // h1 {
    //     color: red
    // }
    // p {
    //     color: green
    // }
    // `],
    templateUrl:"./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class Header {
    
}