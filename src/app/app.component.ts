import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private firstNumber:number=null;
 private secondNumber:number=null;
 private result:number=null;

 public constructor(){
   this.firstNumber=this.firstNumber;
   this.secondNumber=this.secondNumber;
 }
 public add():number{
   this.result=this.firstNumber+this.secondNumber;
   return this.result
 }
 public sub():number{
   this.result=this.firstNumber-this.secondNumber;
   return this.result;
 }
 public mul():number{
   this.result=this.firstNumber*this.secondNumber;
   return this.result;
 }
 public div():number{
   this.result=this.firstNumber/this.secondNumber;
   return this.result;
 }
}
