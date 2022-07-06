import { UserFullnamePipe } from './user-fullname.pipe';

describe('UserFullnamePipe', () => {
  it('create an instance', () => {
    const pipe = new UserFullnamePipe();
    expect(pipe).toBeTruthy();
  });

  it('Pipes - Transform FirstName & LastName to FullName', () => {
    const pipe = new UserFullnamePipe();
    
    expect(pipe.transform("One","Two")).toEqual("One Two")
  });

});
