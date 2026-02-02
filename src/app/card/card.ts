import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card implements OnInit, OnDestroy , AfterViewInit  {
  
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  tillDate:boolean=true;

  message: string = '';

  birthdayDate = new Date('February 16, 2026 00:00:00').getTime();

  interval: any;
  fallingItems: any[] = [];
@ViewChild('audioPlayer') audioPlayer!: ElementRef;


  ngOnInit(): void {
    this.startCountdown();
   
    
  }

  ngAfterViewInit(): void {
    this.my();
    
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

my()
{
  // const audio = this.audioPlayer.nativeElement;
  // audio.currentTime = 0;
  // audio.muted = false;
  // audio.volume = 1;
  // audio.currentTime = 0;

  // audio.play().then(() => {
  //   console.log("Music playing 🎵");
  // })
  // audio.play();
  const audio = this.audioPlayer.nativeElement;

  audio.muted = false;
  audio.currentTime = 0;
  audio.play();

  // animation

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

