import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserFullnamePipe } from '../Pipes/user-fullname.pipe';
import { UserdetailComponent } from './userdetail.component';

describe('UserdetailComponent', () => {
  let component: UserdetailComponent;
  let fixture: ComponentFixture<UserdetailComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ UserdetailComponent ,UserFullnamePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('UserDetail State - Condition `Active` ', () => {
  //   const element = HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#div1")
  //   component.user=sampleuserdata
  //   fixture.detectChanges()
  //   expect(element.childElementCount).toEqual(1)
  //   expect(element.children.length).toEqual(1)
  //   expect(element.children[0].innerHTML).toEqual("Active")
  // });

  // it('UserState - Condition `Deleted` ', () => {
  //   const element = HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#div1")
  //   component.user=sampleuserdata2
  //   fixture.detectChanges()
  //   expect(element.childElementCount).toEqual(1)
  //   expect(element.children.length).toEqual(1)
  //   expect(element.children[0].innerHTML).toEqual("Deleted")
  // });

  it('UserDetail - `ngIf Condition ` ', () => {
    fixture.detectChanges()
      const ele1 :HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#div1")
      const ele2 :HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#div2")
 
      expect(ele1).toBeNull()
       expect(ele2).not.toBeNull()
    });
     });

