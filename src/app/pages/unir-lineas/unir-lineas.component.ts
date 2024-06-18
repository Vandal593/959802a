import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-unir-lineas',
  templateUrl: './unir-lineas.component.html',
  styleUrls: ['./unir-lineas.component.css'],
})
export class UnirLineasComponent {
  elementos = ['Elemento A', 'Elemento B'];
  objetivos = ['Objetivo A', 'Objetivo B'];
  lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
  currentLineIndex = -1; // No line initially

  @ViewChild('svgLineContainer', { static: true })
  svgLineContainer!: ElementRef<SVGElement>;

  startDrag(index: number, event: DragEvent) {
    const rect = (event.target as Element).getBoundingClientRect();
    const svgRect = this.svgLineContainer.nativeElement.getBoundingClientRect();

    // Reset or initialize line
    this.currentLineIndex = 0; // Always work with the first line
    if (this.lines.length === 0) {
      this.lines.push({ x1: 0, y1: 0, x2: 0, y2: 0 });
    }

    this.lines[0] = {
      x1: rect.left - svgRect.left + rect.width / 2,
      y1: rect.top - svgRect.top + rect.height / 2,
      x2: rect.left - svgRect.left + rect.width / 2,
      y2: rect.top - svgRect.top + rect.height / 2,
    };
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(index: number, event: DragEvent) {
    const rect = (event.target as Element).getBoundingClientRect();
    const svgRect = this.svgLineContainer.nativeElement.getBoundingClientRect();
    if (this.lines.length > 0) {
      const currentLine = this.lines[this.currentLineIndex];
      currentLine.x2 = rect.left - svgRect.left + rect.width / 2;
      currentLine.y2 = rect.top - svgRect.top + rect.height / 2;
    }
    this.checkCorrectness(index); // Check if the target is correct
  }

  checkCorrectness(index: number) {
    // Assuming correct pairing is elements[i] -> objectives[i]
    if (this.currentLineIndex !== index) {
      alert('Incorrect placement');
    } else {
      alert('Correct placement');
    }
  }
}
