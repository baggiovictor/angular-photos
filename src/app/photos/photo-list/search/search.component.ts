import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-photo-search',
  template: ` <div class="text-center mt-3 mb-3">
    <form>
      <input
        class="rounded"
        type="search"
        placeholder="search..."
        autofocus
        (keyup)="debounce$.next(getValue($event))"
        [value]="value"
      />
    </form>
  </div>`,
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';
  debounce$: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce$
      .pipe(debounceTime(300))
      .subscribe((filter) => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce$.unsubscribe();
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
