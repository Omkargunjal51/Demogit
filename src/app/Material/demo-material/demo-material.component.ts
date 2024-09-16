import { Component, OnInit, ViewChild } from '@angular/core';import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface Jobs {
  jobTitle: string;
  jobDescription: string;
  vacancy: number;
  id: string;
}

const allJobs:Jobs[] =    [
  {
    "jobTitle": "Software Engineer",
    "jobDescription": "Developing new software applications",
    "vacancy": 5,
    "id": "a2cb"
  },
  {
    "jobTitle": "Data Analyst",
    "jobDescription": "Analyzing and interpreting data",
    "vacancy": 3,
    "id": "8d23"
  },
  {
    "jobTitle": "UI/UX Designer",
    "jobDescription": "Creating user-friendly interfaces",
    "vacancy": 2,
    "id": "3252"
  },
  {
    "jobTitle": "Project Manager",
    "jobDescription": "Overseeing project schedules and resources",
    "vacancy": 4,
    "id": "9fc1"
  },
  {
    "jobTitle": "Marketing Specialist",
    "jobDescription": "Executing marketing campaigns",
    "vacancy": 1,
    "id": "7a7f"
  },
  {
    "jobTitle": "Sales Executive",
    "jobDescription": "Selling products or services",
    "vacancy": 2,
    "id": "2a67"
  },
  {
    "jobTitle": "Customer Support Representative",
    "jobDescription": "Handling customer inquiries and issues",
    "vacancy": 3,
    "id": "b267"
  },
  {
    "jobTitle": "HR Coordinator",
    "jobDescription": "Assisting with recruitment and employee relations",
    "vacancy": 2,
    "id": "b539"
  },
  {
    "jobTitle": "Financial Analyst",
    "jobDescription": "Analyzing financial data and preparing reports",
    "vacancy": 1,
    "id": "5e0b"
  },
  {
    "jobTitle": "Content Writer",
    "jobDescription": "Creating engaging content for websites and blogs",
    "vacancy": 2,
    "id": "ad9d"
  },
  
  {
    "id": "067a",
    "jobTitle": "1",
    "jobDescription": "1",
    "vacancy": 1
  }
]


@Component({
  selector: 'app-demo-material',
  templateUrl: './demo-material.component.html',
  styleUrl: './demo-material.component.css'
})
export class DemoMaterialComponent implements OnInit {
  dataSource!: MatTableDataSource<Jobs>;
  allJobs1:any;

  constructor()
  {
    // this.dataSource = allJobs;

  }

 

  applyjob(id:any)
  {
console.log(id);
  }

  displayedColumns: string[] = ['jobTitle', 'jobDescription', 'vacancy', 'id'];


  @ViewChild(MatSort) sort!: MatSort;
 
    ngOnInit() {
      
  //     // Initialize MatSort
  //     setTimeout(() => {
        // this.dataSource.sort = this.sort;
  //     });
    }  
  }
