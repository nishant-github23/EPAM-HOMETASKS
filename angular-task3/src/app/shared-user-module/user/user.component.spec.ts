import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserFullnamePipe } from '../Pipes/user-fullname.pipe';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ UserComponent ,UserFullnamePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
 
  it('Ngswitch test case - Deactivate ', () => {
    const element = HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#div1")
    expect(element.childElementCount).toEqual(1)
    expect(element.children.length).toEqual(1)
    expect(element.children[0].innerHTML).toEqual("Deactivate ")
  });

  it('Ngswitch test case - Activate ', () => {
      const element = HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#div1")
      component.type=true
      fixture.detectChanges()
      expect(element.childElementCount).toEqual(1)
      expect(element.children.length).toEqual(1)
      expect(element.children[0].innerHTML).toEqual("Activate ")
  });

  it('Ngswitch test case - Details ', () => {
        const element = HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#div1")
        component.type=null
        fixture.detectChanges()
        expect(element.childElementCount).toEqual(1)
        expect(element.children.length).toEqual(1)
        expect(element.children[0].innerHTML).toEqual(" Details ")
  });

  it("NgStyle Testing Border-color `Green` ",()=>{
    const element = HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#userlist")
    expect(element.getAttribute("style")).toContain("border-color: green")
  })

  it("NgStyle Testing Border-color `Red` ",()=>{
    const element = HTMLDivElement =fixture.debugElement.nativeElement.querySelector("#userlist")
    component.user.isDeleted=true
    fixture.detectChanges()
    expect(element.getAttribute("style")).toContain("border-color: red")
  })

});
