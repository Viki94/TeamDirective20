/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddedContentComponent } from './added-content.component';

describe('AddedContentComponent', () => {
  let component: AddedContentComponent;
  let fixture: ComponentFixture<AddedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
