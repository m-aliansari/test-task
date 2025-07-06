import React, { useEffect, useRef, useState } from "react";
import { getAllPositions } from "~/api/positions";
import { getUsers } from "~/api/users";
import GetRequestSection from "~/components/Home/GetRequestSection";
import HeroSection from "~/components/Home/HeroSection";
import PostRequestSection from "~/components/Home/PostRequestSection";

function Home() {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [usersLoadingMore, setUsersLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [positions, setPositions] = useState([]);

  const loadUsers = async (loadMore = false) => {
    if (loadMore) {
      setUsersLoadingMore(true);
      setPage(page + 1);
    } else {
      setPage(1);
    }

    try {
      const { usersToDisplay, loadMorePossible } = await getUsers(
        loadMore ? page + 1 : 1
      );

      if (loadMore) {
        setUsers([...users, ...usersToDisplay]);
      } else {
        setUsers([...usersToDisplay]);
      }

      if (loadMorePossible) setIsLoadMore(true);
      else setIsLoadMore(false);
    } catch (error) {
      console.log(error);
    }

    if (loadMore) setUsersLoadingMore(false);
    else setUsersLoading(false);
  };

  const handleShowMore = async () => {
    await loadUsers(true);
  };
  const handleSuccessfulRegistration = async () => {
    await loadUsers();
  };

  useEffect(() => {
    (async () => {
      const pos = await getAllPositions();
      setPositions([...pos]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await loadUsers();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <HeroSection />
      <GetRequestSection
        positions={positions}
        users={users}
        handleShowMore={handleShowMore}
        usersLoading={usersLoading}
        isLoadMore={isLoadMore}
        usersLoadingMore={usersLoadingMore}
      />
      <PostRequestSection
        positions={positions}
        handleSuccessfulRegistration={handleSuccessfulRegistration}
      />
    </div>
  );
}

export default Home;
