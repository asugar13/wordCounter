import React from 'react';
import Main from '../src/modules/main/components/Main';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//Uncomment the css import in Main.jsx to test this component. 
describe("<Main /> component", () => {
  const mainContainer = shallow(<Main />);
  // it('should match the snapshot', () => {
  //   expect(mainContainer.html()).toMatchSnapshot()
  // })

  it("accepts wordsLoading and wordCounts props", () => {
    const wrapper = mount(<Main wordsLoading={false} wordCounts={{ "a": 1 }} />);
    expect(wrapper.props().wordsLoading).toEqual(false);
    expect(wrapper.props().wordCounts).toEqual({ "a": 1 });

  });

  it('should have a div with className table', () => {
    expect(mainContainer.find('[className="table"]').length).toEqual(1)
  });

  it('should have a div with className title', () => {
    expect(mainContainer.find('[className="title"]').length).toEqual(1)
  });
})