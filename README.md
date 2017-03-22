# react-test-must-know

Example project with React + Enzyme

## Install

```
$ git clone https://github.com/wahengchang/react-test-must-know
$ npm install
```

## Run Tests
```
$ npm test
```
        
## Remark
1. Verfity values of state/proprs in a component
```
const wrapper = shallow(<ComponentName />);

expect(wrapper.state().data).toBe('something');
expect(wrapper.props().data).toBe('something');
```

2. Verfity values of tag in a component
```
const wrapper = shallow(<ComponentName />);

expect(wrapper.find('h4').length).toBe(1);
expect(wrapper.find('h4').at(0).text()).toBe('Something');
```


3. Simulating click event of a button
```
const wrapper = shallow(<ComponentName />);

expect(wrapper.state().data).toBe('state1');
wrapper.find('button').simulate('click');
expect(wrapper.state().data).toBe('state2');

```



## Credits
The original example, written by Leland Richardson, can be found at [https://github.com/lelandrichardson/enzyme-example-jest](https://github.com/lelandrichardson/enzyme-example-jest).


