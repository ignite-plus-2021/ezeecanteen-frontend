import App from './App';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../src/Pages/Login';
import logoImage from '../src/assets/logos/logo_.jpeg';
import Signup from '../src/Pages/Signup';
test('renders app', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  console.log("true")
  ReactDOM.unmountComponentAtNode(div)
});
Enzyme.configure({ adapter: new Adapter() })


describe("<Login />", () => {
  it("renders an image", () => {
    const logo = shallow(<Login />);
    expect(logo.find("img").prop("src")).toEqual(logoImage);
  });
});

describe("<Signup />", () => {
  it("renders an signup image", () => {
    const logo = shallow(<Signup />);
    expect(logo.find("img").prop("src")).toEqual(logoImage);

  });
});

describe('Test case for testing login', () => {
  let wrapper;
  test('username check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'shivanyapm22@gmail.com' } });
    expect(wrapper.state('email')).toEqual('shivanyapm22@gmail.com');
  })
  it('password check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'shivanya' } });
    expect(wrapper.state('password')).toEqual('shivanya');
  })
  it('login check with right data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'shivanyapm22@gmail.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'shivanya' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toBe(true);
  })
  it('login check with wrong data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'shivanyapm22@gmail.c' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'shivanyapm' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toEqual(false);
  })
})
