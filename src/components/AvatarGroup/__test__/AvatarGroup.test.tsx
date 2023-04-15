import { render, screen, within } from '@testing-library/react';
import AvatarGroup from '../AvatarGroup';

describe('<AvatarGroup />', () => {
  const users = [
    { name: 'Alice Doe', image: './ava.jpeg' },
    { name: 'Bob Marley', image: './ava.jpeg' },
    { name: 'Charlie Van', image: '' },
    { name: 'Dave Roney', image: './ava.jpeg' },
    { name: 'De Jong', image: './ava.jpeg' },
    { name: 'Frank Lamp', image: './ava.jpeg' },
  ];
  const maxLength = 4;
  const size = 'md';

  it('should render correctly', () => {
    const { container } = render(
      <AvatarGroup users={users} maxLength={maxLength} size={size} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correct number of avatars', () => {
    const { container } = render(
      <AvatarGroup users={users} maxLength={maxLength} size={size} />
    );
    const avatarContainer = screen.getByTestId('avatar-container');
    const avatarComponents = screen.getAllByTestId('avatar-component');
    expect(avatarContainer).toBeInTheDocument();
    expect(avatarComponents).toHaveLength(maxLength);

    expect(container).toMatchSnapshot();
  });

  it('should render the overflow count correctly', () => {
    const { container } = render(
      <AvatarGroup users={users} maxLength={maxLength} size={size} />
    );
    const avatarMore = screen.getByTestId('avatar-more');

    expect(avatarMore).toBeInTheDocument();
    expect(avatarMore).toHaveTextContent('+2');

    expect(container).toMatchSnapshot();
  });

  it('should render name initial if there is no image', () => {
    const { container } = render(
      <AvatarGroup users={users} maxLength={maxLength} size={size} />
    );
    const avatarContainer = screen.getByTestId('avatar-container');
    const userInitial = 'CV'; //  { name: 'Charlie Van', image: '' }
    expect(within(avatarContainer).getByText(userInitial)).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('should render with different size', () => {
    const { container } = render(
      <AvatarGroup users={users} maxLength={maxLength} size="lg" />
    );

    const avatarContainer = screen.getByTestId('avatar-container');
    const avatarComponents = screen.getAllByTestId('avatar-component');
    const avatarMore = screen.getByTestId('avatar-more');

    expect(avatarContainer).toBeInTheDocument();
    expect(avatarComponents).toHaveLength(maxLength);
    expect(avatarMore).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render with different max length', () => {
    const { container } = render(
      <AvatarGroup users={users} maxLength={2} size={size} />
    );

    const avatarComponents = screen.getAllByTestId('avatar-component');

    expect(avatarComponents).toHaveLength(2);

    expect(container).toMatchSnapshot();
  });
});
