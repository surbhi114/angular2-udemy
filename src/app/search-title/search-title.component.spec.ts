import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTitleComponent } from './search-title.component';

describe('SearchTitleComponent', () => {
  let component: SearchTitleComponent;
  let fixture: ComponentFixture<SearchTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
