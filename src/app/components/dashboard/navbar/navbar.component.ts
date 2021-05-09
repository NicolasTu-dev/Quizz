import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
