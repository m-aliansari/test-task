import React from "react";
import styles from "./GetRequestSection.module.scss";
import Card from "./Card";
import Button from "~/components/common/Button";
import Loader from "~/components/common/Loader";
import { JOB_TITLE_VALUE_TO_LABEL_MAP } from "~/constants/signup";

const LoaderJSX = (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50px",
      marginBottom: "50px",
    }}
  >
    <Loader />
  </div>
);

function GetRequestSection({
  users,
  handleShowMore,
  usersLoading,
  isLoadMore,
  usersLoadingMore,
  positions,
}) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Working with GET request</h1>

        {usersLoading && !users?.length ? (
          LoaderJSX
        ) : (
          <div className={styles.cardsContainer}>
            {users.map((user) => (
              <Card
                key={user.id}
                image={user.photo}
                name={user.name}
                position={positions.find((pos) => pos.id === user.position_id)}
                email={user.email}
                phone={user.phone}
              />
            ))}
          </div>
        )}
        {usersLoadingMore && LoaderJSX}
        <div className={styles.centerDiv}>
          <Button
            text="Show more"
            onClick={handleShowMore}
            disabled={!isLoadMore || usersLoading || usersLoadingMore}
          />
        </div>
      </div>
    </div>
  );
}

export default GetRequestSection;
