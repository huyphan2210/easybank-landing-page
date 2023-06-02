import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class Main implements AfterViewInit {
  ngAfterViewInit(): void {
    const sections = document.getElementsByTagName('section');

    document.addEventListener('scroll', () => {
      for (let i = 0; i < sections.length; i++) {
        if (this.isInViewport(sections[i])) {
          sections[i].style.opacity = '1';
        }
      }
    })
  }

  isInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
}
