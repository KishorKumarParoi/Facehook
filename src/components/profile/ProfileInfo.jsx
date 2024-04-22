import { useProfile } from "../../hooks";
import Bio from './Bio';
import ProfileImage from './ProfileImage';

const ProfileInfo = () => {
    const { state } = useProfile();

    return (
        <div className="flex flex-col items-center py-8 text-center">
            <div className="flex flex-col">
                <ProfileImage />
                <h3 className="text-2xl font-semibold text-white lg:text-[28px] pt-10 mt-4">
                    {state?.user?.firstName} {state?.user?.lastName}
                </h3>
                <p className="leading-[231%] lg:text-lg mt-2">
                    {state?.user?.email}
                </p>
            </div>
            <Bio />
            <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>
    );
};

export default ProfileInfo;
