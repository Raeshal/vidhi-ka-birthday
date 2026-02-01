import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card implements OnInit, OnDestroy {
  
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  tillDate:boolean=true;

  message: string = '';

  birthdayDate = new Date('February 16, 2026 00:00:00').getTime();

  interval: any;
  fallingItems: any[] = [];


  ngOnInit(): void {
    this.startCountdown();
  }

  startCelebration() {

  this.fallingItems = [];

  for (let i = 0; i < 30; i++) {

    this.fallingItems.push({
      left: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      icon: Math.random() > 0.5 ? '🎈' : '🎂'
    });

  }

}

  startCountdown() {

    this.interval = setInterval(() => {

      const now = new Date().getTime();
      const distance = this.birthdayDate - now;

      if (distance < 0) {
      this.tillDate=false;
        clearInterval(this.interval);
        this.message = "🎉 Happy Birthday 🎂🎈";
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    }, 1000);

  }
  

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}

