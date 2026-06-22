import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDetailComponent } from './members-detail';

describe('MembersDetail', () => {
  let component: MembersDetailComponent;
  let fixture: ComponentFixture<MembersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
