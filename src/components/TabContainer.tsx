"use client";

import { useTab } from "@/contexts/TabContext";
import HomePage from "./pages/HomePage";
import BetPage from "./pages/CreateBetPage";
import FriendsPage from "./pages/FriendPage";
import TasksPage from "./pages/TaskPage";

const TabContainer = () => {
  const { activeTab } = useTab();

  return (
    <div className="flex-1 overflow-hidden max-w-md mx-auto pt-[44px] pb-[72px]">
      <div className={`${activeTab === "home" ? "is-show" : "is-hide"}`}>
        <HomePage />
      </div>
      <div className={`${activeTab === "bet" ? "is-show" : "is-hide"}`}>
        <BetPage />
      </div>
      <div className={`${activeTab === "friends" ? "is-show" : "is-hide"}`}>
        <FriendsPage />
      </div>
      <div className={`${activeTab === "tasks" ? "is-show" : "is-hide"}`}>
        <TasksPage />
      </div>
    </div>
  );
};

export default TabContainer;
