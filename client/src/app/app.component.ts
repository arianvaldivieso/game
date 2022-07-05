import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  apiUrl:string = 'http://localhost:3000/api/v1'

  users: Array<any> = [];
  user!:any;
  selectUser:any;

  rewards: any = [];

  token!:string;
  creditsTotal:number = 0;
  n = 0;

  constructor(
    private _http: HttpClient
  ){

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getHeaders(){
    return {
      headers:{
        'Authorization': `Bearer ${this.token}`
      }
    }
  }


  async getUsers(){
    const response:any = await this._http.get(`${this.apiUrl}/users`).toPromise();

    this.users = response.data;
  }

  onChangeUser($event:any){
    this.login($event);
  }


  async login(username:string){
    const response:any = await this._http.post(`${this.apiUrl}/auth/login`,{
      username: username
    }).toPromise();

    this.token = response.token;
    this.user = response.data;

    this.getCredits();

    setInterval(() => {
      this.getCredits();

    },1000 * 60)
  }

  async getCredits(){
    const response:any = await this._http.get(`${this.apiUrl}/credits`,this.getHeaders()).toPromise();

    this.creditsTotal = response.credits;
  }


  async bet(){

    try {
      const response:any = await this._http.post(`${this.apiUrl}/game`,{c:this.n},this.getHeaders()).toPromise();

      this.rewards.push(response.reward);
      this.getCredits();
    } catch (error:any) {
      alert(error.error.message)
    }

  }




}
