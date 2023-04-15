import { AvatarGroupProps, User } from './Avatar.types';
import { AVATAR_SIZE, TEXT_SIZE } from '../../constants/avatar';

const AvatarGroup = ({ users, maxLength, size = 'md' }: AvatarGroupProps) => {
  const avatarSize = AVATAR_SIZE[size];
  const textSize = TEXT_SIZE[size];
  const overflowCount = users.length - maxLength;

  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const initials =
      nameParts[0].charAt(0).toUpperCase() +
      (nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : '');
    return initials;
  };

  return (
    <div
      data-testid="avatar-container"
      className="flex items-center -space-x-4"
    >
      {users.slice(0, maxLength).map((user: User, idx: number) => (
        <div key={idx} data-testid="avatar-component">
          {user.image ? (
            <img
              className={`${avatarSize} rounded-full`}
              src={user.image}
              alt="avatar"
              data-testid="avatar-image"
            />
          ) : (
            <div
              data-testid="avatar-name"
              className={`flex-shrink-0 ${avatarSize} rounded-full border-2 border-white bg-green-400 text-white ${textSize} font-semibold flex items-center justify-center`}
            >
              {getInitials(user.name)}
            </div>
          )}
        </div>
      ))}
      {overflowCount > 0 && (
        <div
          data-testid="avatar-more"
          className={`flex-shrink-0 ${avatarSize} rounded-full border-2 border-white bg-slate-300 text-slate-600 text-sm font-semibold flex items-center justify-center`}
        >
          +{overflowCount}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
