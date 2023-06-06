import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class Main implements AfterViewInit {
  reasonItems = [
    {
      reasonImageUrl: '../../../assets/images/icon-online.svg',
      reasonTitle: 'Online Banking',
      reasonContent: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      reasonImageUrl: '../../../assets/images/icon-budgeting.svg',
      reasonTitle: 'Simple Budgeting',
      reasonContent: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits..'
    },
    {
      reasonImageUrl: '../../../assets/images/icon-onboarding.svg',
      reasonTitle: 'Fast Onboarding',
      reasonContent: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
      reasonImageUrl: '../../../assets/images/icon-api.svg',
      reasonTitle: 'Open API',
      reasonContent: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    },
  ]

  articleItems = [
    {
      articleImg: '../../../assets/images/image-currency.jpg',
      articleTitle: 'Receive money in any currency with no fees',
      articleContent: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
      articleAuthor: 'Claire Robinson'
    },
    {
      articleImg: '../../../assets/images/image-restaurant.jpg',
      articleTitle: 'Treat yourself without worrying about money',
      articleContent: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
      articleAuthor: 'Wilson Hutton'
    },
    {
      articleImg: '../../../assets/images/image-plane.jpg',
      articleTitle: 'Take your Easybank card wherever you go',
      articleContent: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
      articleAuthor: 'Wilson Hutton'
    },
    {
      articleImg: '../../../assets/images/image-confetti.jpg',
      articleTitle: 'Our invite-only Beta accounts are now live!',
      articleContent: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
      articleAuthor: 'Claire Robinson'
    },
  ]

  ngAfterViewInit(): void {
    const isLandscapeDevice = window.innerWidth / window.innerHeight > 1;

    if (isLandscapeDevice) {
      this.animationOnLandscapeDevices();
    }
  }

  private animationOnLandscapeDevices() {
    const sections = document.getElementsByTagName('section');

    document.addEventListener('scroll', () => {
      for (let i = 0; i < sections.length; i++) {
        if (this.isInViewport(sections[i])) {
          sections[i].style.opacity = '1';
        }
      }
    })
  }

  private isInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
