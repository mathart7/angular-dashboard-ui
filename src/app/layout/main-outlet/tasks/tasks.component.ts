import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  users = [
    {
      name: 'A R kuete',
      avatar: 'https://gravatar.com/avatar/61f49a88d728ed09dc65432a651321bb?s=400&d=robohash&r=x',
      grade: 'Chef de Projet'
    },
    {
      name: 'Arline Baker',
      avatar: 'https://gravatar.com/avatar/8c548df7644340531484f663b239e7a8?s=400&d=robohash&r=x',
      grade: 'Vice chef'
    },
    {
      name: 'Poole Walters',
      avatar: 'https://gravatar.com/avatar/a02302b277f6aebff4402f9a3e838c5e?s=400&d=robohash&r=x',
      grade: 'UI/UX Designer'
    },
    {
      name: 'Myrtle Mcintyre',
      avatar: 'https://gravatar.com/avatar/8f10e68333363f8c70afdf8d100547a1?s=400&d=robohash&r=x',
      grade: 'Codeur'
    },
    {
      name: 'Josie Mullen',
      avatar: 'https://gravatar.com/avatar/a5b8a25ece063e93b1e0f1ce6db75094?s=400&d=robohash&r=x',
      grade: 'Codeur'
    },
    {
      name: 'Rosa Richards',
      avatar: 'https://gravatar.com/avatar/8080b11e18f130aa523df28d55a648eb?s=400&d=robohash&r=x',
      grade: 'Codeur'
    },
    {
      name: 'Dyer Roy',
      avatar: 'https://gravatar.com/avatar/59546b956cd1fcc1e55cb891e3cd3775?s=400&d=robohash&r=x',
      grade: 'Analyste'
    },
  ];

  teams = [
    {
      name: 'team_project_1',
      members: [
        {
          name: 'A R kuete',
          avatar: 'https://gravatar.com/avatar/61f49a88d728ed09dc65432a651321bb?s=400&d=robohash&r=x',
          grade: 'Chef de Projet'
        },
        {
          name: 'Poole Walters',
          avatar: 'https://gravatar.com/avatar/a02302b277f6aebff4402f9a3e838c5e?s=400&d=robohash&r=x',
          grade: 'UI/UX Designer'
        },
        {
          name: 'Josie Mullen',
          avatar: 'https://gravatar.com/avatar/a5b8a25ece063e93b1e0f1ce6db75094?s=400&d=robohash&r=x',
          grade: 'Codeur'
        },
        {
          name: 'Rosa Richards',
          avatar: 'https://gravatar.com/avatar/8080b11e18f130aa523df28d55a648eb?s=400&d=robohash&r=x',
          grade: 'Codeur'
        }

      ],
      todo: {
        name: '',
        details: '',
        start: '',
        end: ''
      }
    }
  ];

  tasks = [

  ];



  constructor() { }

  ngOnInit(): void {
  }

}
