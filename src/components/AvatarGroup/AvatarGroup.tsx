import { AvatarGroupProps, User } from './Avatar.type';
import { AVATAR_SIZE, TEXT_SIZE } from '../../constants/avatar';

const AvatarGroup = ({ users, maxLength, size }: AvatarGroupProps) => {
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
    <div className="flex items-center -space-x-4">
      {users.slice(0, maxLength).map((user: User, idx: number) => (
        <div key={idx}>
          {user.image ? (
            <img
              className={`${avatarSize} rounded-full`}
              src={user.image}
              alt="avatar"
            />
          ) : (
            <div
              className={`flex-shrink-0 ${avatarSize} rounded-full border-2 border-white bg-green-400 text-white ${textSize} font-semibold flex items-center justify-center`}
            >
              {getInitials(user.name)}
            </div>
          )}
        </div>
      ))}
      {overflowCount > 0 && (
        <div
          className={`flex-shrink-0 ${avatarSize} rounded-full border-2 border-white bg-slate-300 text-slate-600 text-sm font-semibold flex items-center justify-center`}
        >
          +{overflowCount}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
