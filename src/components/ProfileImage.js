import profile from '../assets/anish.svg';

const ProfileImage = () => {
  return (
    <div className="relative rounded-full overflow-hidden">
      <img src={profile} alt="Anish" className="w-200 h-200 object-cover" />
    </div>
  );
};

export default ProfileImage;