import { render } from '@testing-library/react';

import Scheduler from './scheduler';

describe('Scheduler', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Scheduler />);
    expect(baseElement).toBeTruthy();
  });
});
