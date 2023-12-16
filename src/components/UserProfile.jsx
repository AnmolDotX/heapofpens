import Image from "next/image";

const UserProfile = () => {
    return (
        <div className="flex items-center justify-center h-8 w-8 bg-red-400 rounded-full">
            <Image src="/ProfileDummy.jpg" width={100} height={100} className="rounded-full" alt="profile image" />
        </div>
    );
}

export default UserProfile;