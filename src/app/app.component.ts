import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private message:string=null;
private version:number=null;
private topics:string[]=null;
private value:string=null;
private result:string=null;
private ind:number=null;

public constructor(){
  this.message="welcome!";
  this.version=8;
  this.topics=['Data Binding','Forms','Http','Routing'];
}
public addTopic(currentTopic:string):boolean{
  if((currentTopic.length)==0){
    alert("TOPIC NAME CAN'T BE NULL");
    return false;
  }
  for(var topic of this.topics){
  if(currentTopic==topic){
  alert(" topic already present");
  return false;
  }
}
  this.topics.push(currentTopic); 
}
public deleteTopic(idx:number):void{
  if(confirm('are you sure want to delete??')){
  if (idx > -1) {
    this.topics.splice(idx, 1);
  }
 }
}
public deleteTopicName(currentTopic:string):void{
  if(confirm('are you sure want to delete??')){
  for(var topic of this.topics){
    if(currentTopic==topic){
      this.ind=this.topics.indexOf(currentTopic);
      this.topics.splice(this.ind,1);
    }
    }
  }
}
public searchTopic(currentTopic:string):void{
  for(var topic of this.topics){
    if(currentTopic==topic){
      alert(" index of "+currentTopic+" is "+this.topics.indexOf(currentTopic));

    }
  }
}
}

