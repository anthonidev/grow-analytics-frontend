"use client";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Button } from "antd";
import { signOut } from "next-auth/react";
const UserDrop = () => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        type="default"
        variant="solid"
        color="danger"
        onClick={handleLogout}
        icon={<LockClosedIcon className="h-5 w-5" />}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserDrop;
