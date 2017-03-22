import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SimpleFoo from '../simpleFoo';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<SimpleFoo />).contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<SimpleFoo />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<SimpleFoo />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<SimpleFoo />).text()).toEqual('Bar');
  });
});
