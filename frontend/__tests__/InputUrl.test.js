import React from 'react';
import InputUrl from '../src/modules/main/components/InputUrl';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Input /> with empty urlHistory as prop", () => {
  const mockCallBack = jest.fn();
  const container = shallow(<InputUrl urlHistory={[]} />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot()
  })

  it('should have one submit field', () => {
    expect(container.find('[type="submit"]').length).toEqual(1);
  });

  // it('should contain a Search button that responds to a click event', () => {
  //   container.find('[className="search"]').simulate('click')
  //   expect(mockCallBack.mock.calls.length).toEqual(1);
  // });
})